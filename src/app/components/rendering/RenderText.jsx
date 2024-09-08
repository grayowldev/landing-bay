import React from "react";
import {Element} from "@/app/components/element";
export const renderText = ({data, content, activeElement, toggleActive}) => {
    const headingMapping = {
        heading: <h1 className="text-5xl font-bold mb-4">{content?.content || 'New Heading'}</h1>,
        heading2: <h2 className="text-5xl font-bold mb-4">{content?.content || 'New Heading'}</h2>,
        subheading: <h3 className="text-3xl font-bold mb-4">{content?.content}</h3>,
        subheading2: <h4 className="text-3xl font-bold mb-4">{content?.content}</h4>,
        body: <p className="text-lg">{content?.content || 'New Body'}</p>,
        default: <p className="text-lg mb-8">{content?.content}</p>,
    };

    const contentElement = headingMapping[data.textType] || headingMapping.default;



    return (
        <Element
            isActive={activeElement === data.id}
            onClick={() => toggleActive(data.id)}
            styles={data.styles}>

            {contentElement}
        </Element>
    );
}

