import {Render} from "@/app/components/render";

export default function Hero6({data, content, activeElement, findElement, toggleActive}) {

    return (
        <div className="flex items-center h-screen bg-yellow-300 p-8">
            <div>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Render
                                data={item}
                                content={content[index]}
                                activeElement={activeElement}
                                toggleActive={toggleActive}></Render>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}