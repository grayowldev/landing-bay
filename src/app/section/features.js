import {Render} from "@/app/components/render";

export const Features = ({data}) => {
    const content = [
        {
            content: "Features"
        },
        {
            type: "container",
            elements: [
                {
                    type: "container",
                    elements: [
                        {
                            content: "Features 1"
                        },
                        {
                            content: "sub feature 1"
                        },
                        {
                            content: "sub feature 1"
                        },
                        {
                            content: "sub feature 1"
                        },
                    ]
                },
                {
                    type: "container",
                    elements: [
                        {
                            content: "Features 2"
                        },
                        {
                            content: "sub feature 2"
                        },
                        {
                            content: "sub feature 2"
                        },
                        {
                            content: "sub feature 2"
                        },
                    ]
                },
                {
                    type: "container",
                    elements: [
                        {
                            content: "Features 3"
                        },
                        {
                            content: "sub feature 3"
                        },
                        {
                            content: "sub feature 3"
                        },
                        {
                            content: "sub feature 3"
                        },
                    ]
                },
            ]
        }
    ]
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                {data?.map((item, index) => (
                    <Render
                        key={index}
                        data={item}
                        content={content[index]}>
                    </Render>
                ))}
            </div>
        </section>
    );
};