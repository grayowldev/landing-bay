export const PageSection = ({children, onAddSection}) => {
    return (
            <div className='relative group'>
                <div className="relative border-2 border-transparent group-hover:border-sky-700 p-4">
                    {/* Button positioned in the top-right corner of the children */}
                    <button
                        className={`absolute top-14 right-28 transform translate-x-1/2 -translate-y-1/2 bg-black 
                        text-white px-6 py-2 rounded-full hover:bg-gray-800 transition z-10 opacity-0 group-hover:opacity-100`}>
                        Add element
                    </button>
                    <div className="relative">
                        {children}
                    </div>
                </div>
                <button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2
                        translate-y-1/2 bg-sky-700 text-white text-sm px-2 py-1 rounded opacity-0
                        group-hover:opacity-100 transition-opacity z-10"
                        onClick={onAddSection}
                >
                    Add Section
                </button>
            </div>


    )
}