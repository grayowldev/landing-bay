import {Render} from "@/app/components/render";

const Benefits = ({data}) => {
    console.log("Benefits")
    console.log(data)
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">{data? data.title : "Benefits"}</h2>
                {data?.map((item, index) => (
                    <Render
                        data={item} key={index}>

                    </Render>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Benefit 1</h3>
                        <p className="text-gray-700">
                            {/*{data? data.benefits[0]: "Benefits 1"}*/}
                            Benefits 1
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Benefit 2</h3>
                        <p className="text-gray-700">
                            Benefits 1
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Benefit 3</h3>
                        <p className="text-gray-700">
                            Benefits 1
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;