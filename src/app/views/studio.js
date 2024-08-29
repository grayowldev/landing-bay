'use client'
import React, {useState} from "react";
import {motion} from "framer-motion";
import {DropIndicator} from "@/app/components/DropIndicator";
import {PageSection} from "@/app/components/page-section";
import {Hero} from "@/app/section/Hero";



export const Studio = () => {
    const [items, setItems] = useState([
        {
            id: 6,
            content: "Item 0",
            type: 'hero',
            color: 'bg-red-500'
        },
        { id: 1, content: "Item 1", color: 'bg-red-600' },
        { id: 2, content: "Item 2", color: 'bg-red-700' },
        { id: 3, content: "Item 3", color: 'bg-red-800' },
        { id: 4, content: "Item 4", color: 'bg-red-900' },
        { id: 5, content: "Item 5", color: 'bg-red-950' },
    ])

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

    const pageJson = {

    }



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
                                className={` ${item.color} rounded-lg cursor-grab`}
                                drag="y"
                                dragConstraints={{ top: 0, bottom: 0 }}
                                onDragEnd={(event, info) => onDragEnd(event, info, index)}
                                // whileHover={{scale: 1.01}}
                                // whileTap={{scale: 0.95}}
                                layout
                                draggable={true}
                                onDragStart={(event) => onDragStart(event, index)}
                                onDragOver={(event) => onDragOver(event)}
                            >
                                {item.type == 'hero' ? (
                                    <Hero></Hero>
                                ) : item.content}
                            </motion.div>

                        </PageSection>

                    ))}
                    <DropIndicator indicatorId={'-1'}></DropIndicator>
                </div>
                {/*<div className="w-64 bg-blue-700"> Sidebar </div>*/}
            </div>
    )
}