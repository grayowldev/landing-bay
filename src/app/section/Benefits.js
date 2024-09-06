import {Render} from "@/app/components/render";

const Benefits = ({data}) => {
    console.log("Benefits")
    console.log(data)
    const content = [
        {
            content: "Benefits"
        },
        {
            type: "container",
            elements: [
                {
                    type: "container",
                    elements: [
                        {
                            content: "Benefit 1"
                        },
                        {
                            content: "sub Benefit 1"
                        },
                        {
                            content: "sub Benefit 1"
                        },
                        {
                            content: "sub Benefit 1"
                        },
                    ]
                },
                {
                    type: "container",
                    elements: [
                        {
                            content: "Benefit 2"
                        },
                        {
                            content: "sub Benefit 2"
                        },
                        {
                            content: "sub Benefit 2"
                        },
                        {
                            content: "sub Benefit 2"
                        },
                    ]
                },
                {
                    type: "container",
                    elements: [
                        {
                            content: "Benefit 3"
                        },
                        {
                            content: "sub Benefit 3"
                        },
                        {
                            content: "sub Benefit 3"
                        },
                        {
                            content: "sub Benefit 3"
                        },
                    ]
                },
            ]
        }
    ]
    return (
        <section className="bg-white py-20">
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

export default Benefits;