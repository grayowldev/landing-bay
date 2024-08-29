export const Features = ({data}) => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">{data? data.title : "Features"}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                        <p className="text-gray-700">
                            {data? data.features[0]: "Features 1"}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                        <p className="text-gray-700">
                            {data? data.features[1]: "Features 1"}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                        <p className="text-gray-700">
                            {data? data.features[2]: "Features 1"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};