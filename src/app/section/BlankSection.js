import {Render} from "@/app/components/render";
import {Element} from "@/app/components/element";

export const BlankSection = ({data, content, activeElement, findElement, toggleActive}) => {
    return (<div className="w-full min-h-48 bg-amber-500 p-4">
        <section>
            {data.elements? data.elements.map((item, index) => {
                const element = findElement(item)
                return (
                    <div key={index}>
                        <Render
                            data={item}
                            content={content.content[index]}
                            activeElement={activeElement}
                            toggleActive={toggleActive}></Render>
                    </div>
                )
            }): null}
        </section>
    </div>)
}