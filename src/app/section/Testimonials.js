import {Render} from "@/app/components/render";

export const Testimonials = ({data}) => {
    const content = [
        {
            content: "Testimonials"
        },
        {
            type: "container",
            elements: [
                {
                    content: "We delivered a fast, clean, and optimized website that exceeded client expectations.",
                },
                {
                    content: "Sarah Thompson",
                },
                {
                    content: "- CEO, GreenTech Solutions",
                },
            ]
        },
        {
            type: "container",
            elements: [
                {
                    content: "Our app significantly increased team productivity from day one, impressing all users.",
                },
                {
                    content: "James Cooper",
                },
                {
                    content: "- Project Manager, BlueWave Technologies",
                },
            ]
        },
        {
            type: "container",
            elements: [
                {
                    content: "Delivered a custom solution efficiently, meeting all client requirements with professionalism.",
                },
                {
                    content: "Michael Johnson",
                },
                {
                    content: "- Founder, CraftPro Studios",
                },
            ]
        },
    ]
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">{data? data.title: "Testimonials"}</h2>
                {data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <Render
                                key={index}
                                data={item}
                                content={content[index]}>
                            </Render>
                        )
                    }
                })}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((item, index) => {
                            if (index > 0) {
                                return (
                                    <div key={index} className="bg-white border border-gray-300 rounded-lg p-8 shadow-md">
                                        <Render
                                            key={index}
                                            data={item}
                                            content={content[index]}>
                                        </Render>
                                    </div>
                                )
                            }
                        })}
                </div>
            </div>
        </section>
    );
};