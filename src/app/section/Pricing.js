import {Render} from "@/app/components/render";

export const Pricing = ({data}) => {
    const content = [
        {
            content: "Pricing"
        },
        {
            type: "container",
            elements: [
                {
                    content: "Starter"
                },
                {
                    content: "$3.99/month"
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
                    content: "Plus"
                },
                {
                    content: "$9.99/month"
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
                    content: "Pro"
                },
                {
                    content: "$12.99/month"
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
    ]
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                {data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <Render
                                key={index}
                                data={item}
                                content={content[index]}></Render>
                        )
                    }

            })}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item, index) => {
                        if (index > 0 && index < data.length) {
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-lg p-8 shadow-md">
                                    <Render
                                        data={item}
                                        content={content[index]}></Render>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-gray-300 rounded-lg p-8 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Starter</h3>
                        <p className="text-4xl font-bold mb-6">$3.99</p>
                        <ul className="text-gray-700 mb-8">
                            <li className="mb-2">feature 1</li>
                            <li className="mb-2">feature 2</li>
                            <li>feature 3</li>
                        </ul>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </button>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-8 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Plus</h3>
                        <p className="text-4xl font-bold mb-6">9.99</p>
                        <ul className="text-gray-700 mb-8">
                            <li className="mb-2">feature</li>
                            <li className="mb-2">feature</li>
                            <li>feature</li>
                        </ul>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </button>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-8 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Pro</h3>
                        <p className="text-4xl font-bold mb-6">12.99</p>
                        <ul className="text-gray-700 mb-8">
                            <li className="mb-2">feature</li>
                            <li className="mb-2">feature</li>
                            <li>feature</li>
                        </ul>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};