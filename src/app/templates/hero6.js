import {Element} from "@/app/components/element";
import {useState} from "react";

export default function Hero6({data, activeElement, findElement, toggleActive}) {

    return (
        <div className="flex items-center h-screen bg-yellow-300 p-8">
            <div>
                {data.elements.map((item, index) => {
                    const element = findElement(item)
                    return (
                        <div key={index}>
                            {element.type === 'title-text' && (
                                <Element isActive={activeElement === element.id} onClick={() => toggleActive(element.id)}>
                                    <h1 className="text-5xl font-bold mb-4">{element.content}</h1>
                                </Element>
                            )}
                            {element.type === 'text' && (
                                <Element isActive={activeElement === element.id} onClick={() => toggleActive(element.id)}>
                                    <p className="text-lg mb-8">{element.content}</p>
                                </Element>
                            )}
                            {element.type === 'button' && (
                                <Element isActive={activeElement === element.id} onClick={() => toggleActive(element.id)}>
                                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                                        Learn More
                                    </button>
                                </Element>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}