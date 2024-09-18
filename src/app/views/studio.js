'use client'
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {DropIndicator} from "@/app/components/DropIndicator";
import {PageSection} from "@/app/components/page-section";
import {Render} from "@/app/components/render";
import {Sidebar} from "@/app/components/Sidebar";
import {loadTemplateFromLocalStorage, saveTemplateToLocalStorage, template1} from "@/app/templates/template1";
import {log} from "next/dist/server/typescript/utils";



export const Studio = ({genData, setView}) => {
    const [activeElement, setActiveElement] = useState({});
    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(true)
    const [layouts, setLayouts] = useState(() => {
        const storedLayout = loadTemplateFromLocalStorage()
        return storedLayout?.layout || template1.layout
    });
    const [contents, setContents] = useState(() => {
        const storedContent = loadTemplateFromLocalStorage()
        return storedContent?.content || template1.content
    })
    const sidebarRef = useRef(null)

    useEffect(() => {
        if ({layout: layouts, content: contents} !== template1) {
            saveTemplateToLocalStorage(layouts, contents)
        }
    }, [layouts, contents]);



    const findAndUpdateElementById = (id, sectionId, newElement, elementLoc = 'layout') => {

        const updatedLayouts = [...layouts];
        const updatedContents = [...contents];
        let layoutSectionIndex = null;
        let contentSectionIndex = null;
        if (elementLoc === 'layout') {
            layoutSectionIndex = layouts.findIndex(layout => layout.id === sectionId);
        } else if (elementLoc === 'content') {
            contentSectionIndex = contents.findIndex(content => content.id === sectionId);
        } else {
            console.log("Invalid element location");
            return;
        }

        if (elementLoc === 'layout' && layoutSectionIndex === -1) {
            console.error("Section not found");
            return null;
        } else if (elementLoc === 'content' && contentSectionIndex === -1) {
            console.error("Section not found");
            return null;
        }

        if (elementLoc === 'layout') {
            if (id === sectionId) {
                updatedLayouts[layoutSectionIndex] = {
                    ...updatedLayouts[layoutSectionIndex],
                    elements: [...updatedLayouts[layoutSectionIndex].elements, newElement]
                }
                setLayouts(updatedLayouts)
                return
            }
        } else if (elementLoc === 'content') {
            if (id === sectionId) {
                updatedContents[contentSectionIndex] = {
                    ...updatedContents[contentSectionIndex],
                    elements: [...updatedContents[contentSectionIndex].elements, newElement]
                }
                setContents(updatedContents)
                return
            }
        }


        const updateElementRecursive = (elements) => {
            return elements.map(element => {
                if (element.id === id) {
                    return { ...element, ...newElement };
                }
                if (element.elements) {
                    return { ...element, elements: updateElementRecursive(element.elements) };
                }
                return element;
            });
        };

        if (elementLoc === 'layout') {
            updatedLayouts[layoutSectionIndex] = {
                ...updatedLayouts[layoutSectionIndex],
                elements: updateElementRecursive(updatedLayouts[layoutSectionIndex].elements)
            };
            setLayouts(updatedLayouts);

            return updatedLayouts[layoutSectionIndex];

        } else if (elementLoc === 'content') {
            const contentElementIndex = updatedContents[contentSectionIndex].elements.findIndex(element => element.id === id);

            updatedContents[contentSectionIndex].elements = [
                ...updatedContents[contentSectionIndex].elements.slice(0, contentElementIndex),
                newElement.element,
                ...updatedContents[contentSectionIndex].elements.slice(contentElementIndex + 1)
            ];
            setContents(updatedContents);

            return updatedContents[contentSectionIndex];
        }
    };

    const findLayoutById = (id, layout = layouts) => {
        let foundElement = null;
        layout.map((section) => {
            if (section.id === id) {
                foundElement = { sectionId: section.id, element: section }
                return;
            }

            if (section.elements && section.elements.length > 0) {
                section.elements.map((element) => {
                    if (element.id === id) {
                        foundElement = { sectionId: section.id, element: element }
                        return;
                    }

                    if (element.elements && element.elements.length > 0) {
                        const result = findLayoutById(id, element.elements)
                        if (result) {
                            foundElement = { sectionId: section.id, element: result.element}
                        }
                    }
                })
            }
        })

        return foundElement
    }

    const findContentById = (id, content = contents) => {
        let foundElement = null;
        content.map((section) => {
            if (section.id === id) {
                foundElement = { sectionId: section.id, element: section }
                return;
            }

            if (section.elements && section.elements.length > 0) {
                section.elements.map((element) => {
                    if (element.id === id) {
                        foundElement = { sectionId: section.id, element: element }
                        return;
                    }

                    if (element.elements && element.elements.length > 0) {
                        const result = findLayoutById(id, element.elements)
                        if (result) {
                            foundElement = { sectionId: section.id, element: result.element}
                        }
                    }
                })
            }
        })

        return foundElement
    }

    const updateLayout = (id, sectionId, newElement) => {
        console.log("in update layout", id, sectionId, newElement)
        findAndUpdateElementById(id, sectionId, newElement, "layout")
    }
    const updateContent = (id, sectionId, newElement) => {
        findAndUpdateElementById(id, sectionId, newElement, "content")
    }

    const addElement = (type) => {
        console.log("added text clicked from studio", type)
        let newElement = {}
        if (type === "text") {
            newElement = {
                type: "text",
                textType: "body",
                fontSize: "24px",
                fontWeight: "normal",
                color: "#FFFFFF",
                marginBottom: "40px"
            }
        } else if (type === "container") {
            newElement = {
                id: 102,
                type: "container",
                orientation: "vertical",
                elements: []
            }
        } else {
            return
        }

        const sectionIndex = layouts.findIndex(layout => layout.id === activeSection)

        if (sectionIndex === -1) return

        const updatedLayouts = [...layouts]

        updatedLayouts[sectionIndex] = {
            ...updatedLayouts[sectionIndex],
            elements: [...updatedLayouts[sectionIndex].elements, newElement]
        };

        // Update the layouts state
        setLayouts(updatedLayouts);
    }

    const toggleActive = (id) => {
        console.log("Toggling active", id)
        let newActiveElement = {
            id: id,
            layout: null,
            content: null
        }
        newActiveElement.layout = activeElement?.id === id ? null : findLayoutById(id);
        newActiveElement.content = activeElement?.id === id ? null : findContentById(id);
        newActiveElement.id = activeElement?.id === id ? null : id

        setActiveElement(newActiveElement);
        setActiveSection(newActiveElement ? findItemById(newActiveElement.id) : null);

    };

    const findItemById = (id) => {
        return items.find(item => item.id === id)
    }

    const onAddSection = () => {
        // TODO: Add section
        setItems([...items,
            {
                id: items.length + 1,
                type: 'blank',
                content: "Item " + (items.length + 1),
                color: 'bg-red-600' }])
    }

    const addElementOnClick = (sectionId) => {
        setActiveSection(sectionId)
    }


    console.log(contents)
    return (
        <div className="flex">
            {/*<div>Top bar</div>*/}
            {/*<div className={`bg-gray-500 flex-grow overflow-y-auto p-4 ${isOpen ? 'mr-[512px]' : 'mr-[72px]'}`}>*/}
                {/*<div className={`bg-amber-700 w-full h-[calc(100vh-2rem)] p-12` }>*/}
                    <div className={`bg-red-600 w-full h-full ${isOpen ? 'mr-[512px]' : 'mr-[72px]'}`}>
                        {layouts.map((layout, index) => (
                            <div key={index}>
                                <PageSection
                                    key={layout.id}
                                    onAddSection={onAddSection}
                                    addElementOnClick={() => addElementOnClick(layout.id)}
                                    addElement={findAndUpdateElementById}
                                    sectionId={layout.id}
                                    section={layout}>
                                        <Render
                                            data={layout}
                                            content={contents[index]}
                                            activeElement={activeElement}
                                            toggleActive={toggleActive}
                                            findElement={findAndUpdateElementById}
                                            sectionId={layout.id}
                                            sidebarRef={sidebarRef}>
                                        </Render>
                                </PageSection>
                            </div>
                        ))}
                    </div>
                {/*</div>*/}
            {/*</div>*/}
            <Sidebar
                ref={sidebarRef}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addElement={addElement}
                activeElement={activeElement}
                findElement={findLayoutById}
                updateContent={updateContent}
                updateLayout={updateLayout}></Sidebar>
            </div>
    )
}