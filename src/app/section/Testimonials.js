export const Testimonials = ({data}) => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">{data? data.title: "Testimonials"}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-md">
                        <p className="text-gray-700 mb-4">
                            {data? data.testimonials[0].content: "Testimonial 1"}
                        </p>
                        {/*<p className="font-semibold">- {data? data.testimonials[0].author}, {data.testimonials[0].company}</p>*/}
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-md">
                        <p className="text-gray-700 mb-4">
                            {data? data.testimonials[1].content: "Testimonial 2"}
                        </p>
                        {/*<p className="font-semibold">- {data? data.testimonials[1].author}, {data.testimonials[1].company}</p>*/}
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-md">
                        <p className="text-gray-700 mb-4">
                            {data? data.testimonials[2].content: "Testimonial 3"}
                        </p>
                        {/*<p className="font-semibold">- {data? data.testimonials[1].author}, {data.testimonials[1].company) : }Company Name</p>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};