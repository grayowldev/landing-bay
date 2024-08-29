'use client'
import React, {useState} from "react";
import {motion} from "framer-motion";
import {DropIndicator} from "@/app/components/DropIndicator";
import {PageSection} from "@/app/components/page-section";
import {Hero} from "@/app/section/Hero";
import {SectionRenderer} from "@/app/components/section-renderer";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";



export const Studio = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            type: 'hero',
            content: "Welcome to Our Website",
            color: 'bg-blue-500',
            elements: [
                10,11,12
            ]

        },
        {
            id: 2,
            type: 'benefits',
            content: "Benefit 1: High Quality, Benefit 2: Affordable Prices",
            color: 'bg-green-500',

        },
        {
            id: 3,
            type: 'features',
            content: "Feature 1: Easy to Use, Feature 2: Customizable",
            color: 'bg-purple-500',

        },
        {
            id: 4,
            type: 'call-to-action',
            content: "Join Us Today!",
            color: 'bg-yellow-500',

        },
        {
            id: 5,
            type: 'testimonials',
            content: "Customer 1: Amazing service!, Customer 2: Highly recommend!",
            color: 'bg-teal-500',

        },
        {
            id: 6,
            type: 'faq',
            content: "Frequently Asked Questions",
            color: 'bg-gray-500',

        },
        {
            id: 7,
            type: 'pricing',
            content: "Basic: $9.99/month, Pro: $19.99/month",
            color: 'bg-indigo-500',

        },
        {
            id: 8,
            type: 'footer',
            content: "© 2024 Your Company. All Rights Reserved.",
            color: 'bg-black text-white',

        },
        {
            id: 9,
            type: 'blank',
            content: "",
            color: 'bg-white',

        },
        {
            id: 10,
            type: 'title-text',
            content: 'Welcome to Our Platform'
        },
        {
            id: 11,
            type: 'text',
            content: 'A place where innovation meets creativity.'
        },
        {
            id: 12,
            type: 'button',
            content: 'Learn More'
        }
    ])

    const [activeElement, setActiveElement] = useState(null);
    const [activeSection, setActiveSection] = useState(null);

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
        console.log(items[index])
    }

    const onAddSection = () => {
        // TODO: Add section
        console.log("Section added")
        setItems([...items, { id: items.length + 1, content: "Item " + (items.length + 1), color: 'bg-red-600' }])
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



    return (
            <div className="flex">
                {/*<div>Top bar</div>*/}
                {/*TODO: Add drag and drop to main section to allow sections to be added*/}
                <div className="flex-1 bg-emerald-50">
                    {items.map((item, index) => (
                        <PageSection key={item.id} onAddSection={onAddSection}>
                            {/*<DropIndicator indicatorId={`item-${index}`}></DropIndicator>*/}
                            <motion.div
                                key={item.id}
                                id={`item-${index}`}
                                className={` ${item.color} rounded-lg`}
                                drag="y"
                                dragConstraints={{ top: 0, bottom: 0 }}
                                onDragEnd={(event, info) => onDragEnd(event, info, index)}
                                layout
                                draggable={true}
                                onDragStart={(event) => onDragStart(event, index)}
                                onDragOver={(event) => onDragOver(event)}>

                                <SectionRenderer data={item} activeElement={activeElement} toggleActive={toggleActive} findElement={findItemById}></SectionRenderer>
                            </motion.div>

                        </PageSection>

                    ))}
                    <DropIndicator indicatorId={'-1'}></DropIndicator>
                </div>
                <div className="w-96 bg-blue-700 p-4 text-white">
                    <p>id: {activeElement}</p>
                    <p>{activeSection? JSON.stringify(activeSection) : ''}</p>
                    {activeSection &&
                        <Textarea
                            placeholder="Update Text"
                            onChange={(event) => handleTextChange(event, activeElement)}
                            value={activeSection.content}
                            className="border rounded w-full py-2 px-3 text-gray-700"
                        />
                    }
                </div>
            </div>
    )
}