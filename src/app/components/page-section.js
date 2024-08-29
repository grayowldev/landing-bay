export const PageSection = ({children, onAddSection}) => {
    return (
            <div className='relative group'>
                <div className="group-hover:border-2 group-hover:border-sky-700">
                    {children}
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