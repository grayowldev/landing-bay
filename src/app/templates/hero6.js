import {Render} from "@/app/components/render";

export default function Hero6({data, contents, activeElement, findElement, toggleActive}) {
    // TODO: Change contents to content and delete content when done
    const content = [

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
    console.log(data)
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