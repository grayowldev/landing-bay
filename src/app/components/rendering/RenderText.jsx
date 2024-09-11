'use client'
import React, {useEffect, useRef, useState} from "react";
import {Element} from "@/app/components/element";
export const RenderText = ({data, content, activeElement, toggleActive}) => {
    const [isEditable, setIsEditable] = useState(false);
    const headingMapping = {
        heading: <h1 className="text-5xl font-bold mb-4" contentEditable={isEditable}>{content?.content || 'New Heading'}</h1>,
        heading2: <h2 className="text-5xl font-bold mb-4" contentEditable={isEditable}>{content?.content || 'New Heading'}</h2>,
        subheading: <h3 className="text-3xl font-bold mb-4" contentEditable={isEditable}>{content?.content}</h3>,
        subheading2: <h4 className="text-3xl font-bold mb-4" contentEditable={isEditable}>{content?.content}</h4>,
        body: <p className="text-lg" contentEditable={isEditable}>{content?.content || 'New Body'}</p>,
        default: <p className="text-lg mb-8" contentEditable={isEditable}>{content?.content}</p>,
    };

    // const contentElement = headingMapping[data.textType] || headingMapping.default;
    const textRef = useRef(null);

    const contentElement = React.cloneElement(
        headingMapping[data.textType] || headingMapping.default,
        { ref: textRef }
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (textRef.current && !textRef.current.contains(event.target)) {
                setIsEditable(false);
                toggleActive(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [textRef, toggleActive]);



    return (
        <Element
            isActive={activeElement === data.id}
            onClick={() => {
                toggleActive(data.id)
                setIsEditable(true)
                console.log("Text clicked")
            }}
            styles={data.styles}>

            {contentElement}
        </Element>
    );
}

