'use client'
import React, {useState} from "react";
import {motion} from "framer-motion";
import {DropIndicator} from "@/app/components/DropIndicator";
import {PageSection} from "@/app/components/page-section";
import {Render} from "@/app/components/render";
import {Sidebar} from "@/app/components/Sidebar";



export const Studio = ({genData, setView}) => {
    const [items, setItems] = useState(
        [
            {
                id:80,
                type: 'test',
            },
            {
                id: 2,
                type: 'benefits',
                content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
                elements: [
                    {
                        type: "text",
                        textType: "heading",
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        marginBottom: "20px"
                    },
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                ]
            },

            {
                id: 5,
                type: 'call-to-action',
                content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
                elements: [
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                ]

            },
            {
                id: 6,
                type: 'features',
                content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
                color: 'bg-green-500',
                elements: [
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                ]
            },
            {
                id: 7,
                type: 'pricing',
                content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
                color: 'bg-green-500',
                elements: [
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                    {
                        type: "text",
                    },
                ]

            }
    ]
)

    const content = [
        {
            sectionType: "hero",
            contents: [
                {
                    content: "Welcome to Your Next Adventure",
                    type: "heading"
                },
                {
                    content: "Explore the World with Us",
                    type: "heading"
                },
                {
                    content: "Discover amazing experiences tailored just for you.",
                    type: "subheading"
                },
                {
                    content: "Get Started",
                    type: "button",
                    url: "/get-started"
                }

            ]
        },
        {
            id: 4,
            sectionType: "blank",
            content: [
                {
                    type: "container",
                    contents: [
                        {
                            content: "Welcome to Your Next Adventure",
                            type: "subheading"
                        },
                        {
                            content: "Explore the World with Us",
                            type: "subheading"
                        },
                        {
                            content: "Discover amazing experiences tailored just for you.",
                            type: "subheading"
                        },
                        {
                            content: "Get Started",
                            type: "subheading",
                        }
                    ]
                },
                {
                    type: "container",
                    contents: [
                        {
                            content: "Welcome to Your Next Adventure (2)",
                            type: "body"
                        },
                        {
                            content: "Explore the World with Us (2)",
                            type: "body"
                        },
                        {
                            content: "Discover amazing experiences tailored just for you. (2)",
                            type: "body"
                        },
                        {
                            content: "Get Started (2)",
                            type: "body",
                        }
                    ]
                },
                {
                    type: "container",
                    contents: [
                        {
                            content: "Welcome to Your Next Adventure",
                            type: "subheading"
                        },
                        {
                            content: "Explore the World with Us",
                            type: "subheading"
                        },
                        {
                            content: "Discover amazing experiences tailored just for you.",
                            type: "subheading"
                        },
                        {
                            content: "Get Started",
                            type: "subheading",
                        }
                    ]
                },
            ]
        },
        {
            sectionType: "benefits",
        },
        {
            sectionType: "call-to-action",
        },
        {
            sectionType: "features",
        },

        {
            sectionType: "pricing",
        },
        {
            sectionType: "testimonials",
        },
        {
            sectionType: "faq",
        },
        {
            sectionType: "footer",
        },

    ]

    const template = {
        "layout": [
            {
                id: 1,
                type: 'blank',
                elements: []
            },
            {
                id: 2,
                type: 'hero',
                elements: [
                    {
                        type: "text",
                        textType: "heading",
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        marginBottom: "20px"
                    },
                    {
                        type: "text",
                        textType: "subheading",
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        marginBottom: "20px"
                    },
                    {
                        type: "text",
                        textType: "body",
                        fontSize: "24px",
                        fontWeight: "normal",
                        color: "#FFFFFF",
                        marginBottom: "40px"
                    },
                    {
                        type: "button",
                        textType: "button",
                        textColor: "#FFFFFF",
                        backgroundColor: "#FF5733",
                        fontSize: "18px",
                        padding: "10px 30px",
                        borderRadius: "5px"
                    },
                ]
            },
            {id: 3, type: 'benefits', elements: [
                    {
                        type: "text",
                        textType: "subheading",
                        styles: {
                            color: "#000000",
                            marginBottom: "30px"
                        }
                    },
                    {
                        id: 101,
                        type: "container",
                        orientation: "horizontal",
                        elements: [
                            {
                                id: 201,
                                type: "container",
                                orientation: "vertical",
                                elements: [
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            marginBottom: "30px"
                                        }
                                    },
                                ]
                            },
                            {
                                id: 201,
                                type: "container",
                                orientation: "vertical",
                                elements: [
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                ]
                            },
                            {
                                id: 201,
                                type: "container",
                                orientation: "vertical",
                                elements: [
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                    {
                                        type: "text",
                                        textType: "body",
                                        styles: {
                                            color: "#FF0000",
                                            // marginBottom: "30px"
                                        }
                                    },
                                ]
                            },
                        ]
                    },

                ]},
            {id: 4, type: 'features', elements: []},
            {id: 5, type: 'call-to-action', elements: []},
            {id: 6, type: 'pricing', elements: []},
            {id: 7, type: 'testimonials', elements: []},
            {id: 8, type: 'faq', elements: []},
            {id: 9, type: 'footer', elements: []},
        ],
        "content": [],
    }


    const [activeElement, setActiveElement] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [layouts, setLayouts] = useState(template.layout)
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
            <div className={`bg-gray-500 flex-grow overflow-y-auto p-4 ${isOpen ? 'mr-[512px]' : 'mr-[72px]'}`}>
                {/*<div className={`bg-amber-700 w-full h-[calc(100vh-2rem)] p-12` }>*/}
                    <div className={`bg-red-600 w-full h-full`}>
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
                                            content={content}
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
            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} addElement={addElement} activeElement={activeElement}></Sidebar>
            </div>
    )
}