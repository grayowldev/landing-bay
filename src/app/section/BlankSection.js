import {Render} from "@/app/components/render";

export const BlankSection = ({data, activeElement, findElement, toggleActive}) => {
    return (<div className="w-full min-h-48 bg-amber-500 p-4">
        <section>
            {data.elements? data.elements.map((item, index) => {
                const element = findElement(item)

                return (
                    <div key={index}>
                        <Render
                            data={element}
                            activeElement={activeElement}
                            toggleActive={toggleActive}></Render>
                    </div>
                )
            }): null}
        </section>
    </div>)
}