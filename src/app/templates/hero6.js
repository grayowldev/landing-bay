import {Element} from "@/app/components/element";
import {useState} from "react";
import {Render} from "@/app/components/render";

export default function Hero6({data, activeElement, findElement, toggleActive}) {

    return (
        <div className="flex items-center h-screen bg-yellow-300 p-8">
            <div>
                {data.elements.map((item, index) => {
                    const element = findElement(item)

                    return (
                        <div key={index}>
                            <Render
                                data={element}
                                activeElement={activeElement}
                                toggleActive={toggleActive}></Render>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}