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
                id: 1,
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
                        textType: "heading",
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        marginBottom: "20px"
                    },
                    {
                        type: "text",
                        textType: "subheading",
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
            {
                id: 4,
                type: 'blank',
                content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
                elements: [
                    {
                        id: 100,
                        type: "container",
                        orientation: "horizontal",
                        elements: [
                            {
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
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
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
                            },
                            {
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
                            },
                        ]
                    },
                    {
                        id: 101,
                        type: "container",
                        orientation: "vertical",
                        elements: [
                            {
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
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
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
                            },
                            {
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
                            },
                        ]
                    },
                    {
                        id: 102,
                        type: "container",
                        orientation: "horizontal",
                        elements: [
                            {
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
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
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
                            },
                            {
                                type: "text",
                                textType: "body",
                                fontSize: "24px",
                                fontWeight: "normal",
                                color: "#FFFFFF",
                                marginBottom: "40px"
                            },
                        ]
                    },
                ]

            },
            {
                id: 2,
                type: 'benefits',
                content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
                color: 'bg-green-500',
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





    const [activeElement, setActiveElement] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(true)
    const [layouts, setLayouts] = useState([
        {
            id: 1,
            type: 'blank',
            elements: []
        },
    ])
    const [contents, setContents] = useState([])


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

    const onDragEnd = (event, info, draggedIndex) => {
        const droppedIndex = items.findIndex((_, index) => {
            const rect = document.getElementById(`item-${index}`).getBoundingClientRect();
            return (
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom &&
                event.clientX >= rect.left &&
                event.clientX <= rect.right
            )
        })

        if (droppedIndex === -1 || draggedIndex === droppedIndex) return;

        const updatedItems = [...items];
        const [removed] = updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(droppedIndex, 0, removed);

        setItems(updatedItems);
    }

    const onDragOver = (event) => {
        event.preventDefault();
        console.log("onDragOver")
        // Add visual feedback (e.g., highlight the drop target)

    }

    const onDragStart = (event, index) => {
        event.preventDefault();
        // Add visual feedback (e.g., highlight the drop target)
        // console.log(items[index])
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

    const handleTextChange = (event, index) => {
        const newValue = event.target.value

        setItems(
            prevItems => prevItems.map(
                item =>  item.id === index ? { ...item, content: newValue } : item
            )
        )

        setActiveSection(prevSection =>
            prevSection && prevSection.id === index ? { ...prevSection, content: newValue } : prevSection
        );
    };

    const addElementOnClick = (sectionId) => {
        // console.log("addElement ", sectionId)
        setActiveSection(sectionId)
        // console.log(activeSection)
    }

    return (
        <div className="flex">
            {/*<div>Top bar</div>*/}
            <div className={`bg-gray-500 flex-grow overflow-y-auto p-4 ${isOpen ? 'mr-[512px]' : 'mr-[72px]'}`}>

            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} addElement={addElement}></Sidebar>
                {/*TODO: Add drag and drop to main section to allow sections to be added*/}
                <div className="flex-1 bg-emerald-50">
                    {items.map((layout, index) => (
                        <div key={index}>
                            <PageSection key={layout.id} onAddSection={onAddSection}>
                                {/*<DropIndicator indicatorId={`item-${index}`}></DropIndicator>*/}
                                <motion.div
                                    key={layout.id}
                                    id={`item-${index}`}
                                    className={` ${layout.color} rounded-lg`}
                                    drag="y"
                                    dragConstraints={{ top: 0, bottom: 0 }}
                                    onDragEnd={(event, info) => onDragEnd(event, info, index)}
                                    layout
                                    draggable={true}
                                    onDragStart={(event) => onDragStart(event, index)}
                                    onDragOver={(event) => onDragOver(event)}>

                                    {/*<SectionRenderer data={item} activeElement={activeElement} toggleActive={toggleActive} findElement={findItemById}></SectionRenderer>*/}
                                    <Render
                                        data={layout}
                                        content={content}
                                        activeElement={activeElement}
                                        toggleActive={toggleActive}
                                        findElement={findItemById}>

                                    </Render>
                                </motion.div>

                            </PageSection>
                        </div>
                    ))}
                    <DropIndicator indicatorId={'-1'}></DropIndicator>
                </div>
                {/*<div className="w-96 bg-blue-700 p-4 text-white">*/}
                {/*    <p>id: {activeElement}</p>*/}
                {/*    <p>{activeSection? JSON.stringify(activeSection) : ''}</p>*/}
                {/*    {activeSection &&*/}
                {/*        <Textarea*/}
                {/*            placeholder="Update Text"*/}
                {/*            onChange={(event) => handleTextChange(event, activeElement)}*/}
                {/*            value={activeSection.content}*/}
                {/*            className="border rounded w-full py-2 px-3 text-gray-700"*/}
                {/*        />*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
    )
}