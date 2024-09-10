import {Button} from "@/components/ui/button";
import {PlusSquare} from "lucide-react"
import {motion} from "framer-motion";
import {StudioButton} from "@/app/components/StudioButton";
import {ElementEditor} from "@/app/components/ElementEditor";

export const Sidebar = ({isOpen, setIsOpen, addElement, activeElement, findElement}) => {
    console.log("Sidebar, activeElement", activeElement)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={`flex fixed top-0 right-0 bottom-0  h-screen bg-blue-700 ${isOpen ? 'w-[512px]' : 'w-[72px]'}`}>
            <div className={`bg-amber-500 h-full p-4 ${isOpen ? 'w-[440px]' : 'hidden'}`}>
                {/*<StudioButton*/}
                {/*    draggable*/}
                {/*    onClick={() => addElement('container')}*/}
                {/*    elementType={`container`}>*/}

                {/*    Add Container*/}
                {/*</StudioButton>*/}
                {/*<StudioButton*/}
                {/*    draggable*/}
                {/*    onClick={() => addElement('text')}*/}
                {/*    elementType={`text`}>*/}

                {/*    Add Text*/}
                {/*</StudioButton>*/}
                <ElementEditor
                    activeElement={activeElement}
                    findElement={findElement}></ElementEditor>

            </div>
            <div className={`bg-red-600 w-[72px] h-full`}>
                <button
                    className={`bg-amber-500 text-white px-4 py-2 rounded-full`}
                    onClick={() => toggleSidebar()}>
                    open
                </button>
                <Button
                    variant={`outline`} size="icon"
                    onClick={() => toggleSidebar()}>
                    <PlusSquare />
                </Button>
            </div>
        </div>
    )
}