
export const Sidebar = ({isOpen, setIsOpen}) => {

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`flex fixed top-0 right-0 bottom-0  h-screen bg-blue-700 ${isOpen ? 'w-[512px]' : 'w-[72px]'}`}>
            <div className={`bg-amber-500 h-full ${isOpen ? 'w-[440px]' : 'hidden'}`}></div>
            <div className={`bg-red-600 w-[72px] h-full`}>
                <button
                    className={`bg-amber-500 text-white px-6 py-2 rounded-full`}
                    onClick={() => toggleSidebar()}
                >
                    +
                </button>
            </div>

        </div>
    )
}