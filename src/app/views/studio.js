'use client'
import React, {useState} from "react";
import {motion} from "framer-motion";
import {DropIndicator} from "@/app/components/DropIndicator";
import {PageSection} from "@/app/components/page-section";
import {Render} from "@/app/components/render";
import {Sidebar} from "@/app/components/Sidebar";
import {template1} from "@/app/templates/template1";



export const Studio = ({genData, setView}) => {

    const [activeElement, setActiveElement] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(true)
    const [layouts, setLayouts] = useState(template1.layout)
    const [contents, setContents] = useState([])



    // TODO: Review this function
    const findAndUpdateElementById = (id, sectionId, newElement) => {
        console.log("Finding and updating element");
        const updatedLayouts = [...layouts];
        console.log("Layouts ",id, sectionId, layouts)

        const sectionIndex = layouts.findIndex(layout => layout.id === sectionId);

        if (sectionIndex === -1) {
            console.log("Section not found");
            return null;
        }

        if (id === sectionId) {
            updatedLayouts[sectionIndex] = {
                ...updatedLayouts[sectionIndex],
                elements: [...updatedLayouts[sectionIndex].elements, newElement]
            }
            setLayouts(updatedLayouts)
            console.log(layouts)
            return
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

        updatedLayouts[sectionIndex] = {
            ...updatedLayouts[sectionIndex],
            elements: updateElementRecursive(updatedLayouts[sectionIndex].elements)
        };

        setLayouts(updatedLayouts);

        console.log("Updated layouts:", updatedLayouts);
        return updatedLayouts[sectionIndex];
    };

    const findLayoutById = (id, layout = template1.layout) => {
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
        // console.log(layouts)
        // console.log(sectionIndex)
        if (sectionIndex === -1) return

        const updatedLayouts = [...layouts]

        updatedLayouts[sectionIndex] = {
            ...updatedLayouts[sectionIndex],
            elements: [...updatedLayouts[sectionIndex].elements, newElement]
        };

        // Update the layouts state
        setLayouts(updatedLayouts);

        // console.log("Updated layouts:", updatedLayouts);
    }

    const toggleActive = (id) => {
        console.log("Toggle active", activeElement, id)
        const newActiveElement = activeElement === id ? null : id;
        setActiveElement(newActiveElement);
        setActiveSection(newActiveElement ? findItemById(newActiveElement) : null);

        console.log(activeElement, activeSection)
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
        // console.log("addElement ", sectionId)
        setActiveSection(sectionId)
        // console.log(activeSection)
        console.log(layouts)
    }

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
                                            content={template1.content}
                                            activeElement={activeElement}
                                            toggleActive={toggleActive}
                                            findElement={findAndUpdateElementById}
                                            sectionId={layout.id}>
                                        </Render>
                                </PageSection>
                            </div>
                        ))}
                    </div>
                {/*</div>*/}
            {/*</div>*/}
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addElement={addElement}
                activeElement={activeElement}
                findElement={findLayoutById}
            ></Sidebar>
            </div>
    )
}