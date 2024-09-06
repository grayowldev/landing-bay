import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";

export const PageSection = ({children, onAddSection, addElementOnClick, addElement, section}) => {
    const onDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Dropping element")
        console.log(event)
        const draggedElementType = event.dataTransfer.getData("elementType");
        console.log("Dropped element of type:", draggedElementType);
        // Here you should add logic to update the container's elements
        // based on the dropped element type
        // Update data.elements with new object
        let newElement = {};
        if (draggedElementType === "text") {
            newElement = {
                type: "text",
                textType: "body",
                fontSize: "24px",
                fontWeight: "normal",
                color: "#FFFFFF",
                marginBottom: "40px"
            }
        }
        addElement(section.id, section.id, newElement);
    }
    const allowDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }
    return (
            <div className='relative group'>
                <div className="relative border-2 border-transparent group-hover:border-sky-700 p-4">
                    {/* Button positioned in the top-right corner of the children */}
                    <Button
                        className={`absolute top-14 right-28 transform translate-x-1/2 -translate-y-1/2 bg-black 
                        text-white px-6 py-2 rounded-full hover:bg-gray-800 transition z-10 opacity-0 group-hover:opacity-100`}
                        onClick={addElementOnClick}>
                        Add element
                    </Button>
                    <motion.div
                        onDrop={onDrop}
                        onDragOver={allowDrop}>
                        <div className="relative">
                            {children}
                        </div>
                    </motion.div>
                </div>
                <Button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2
                        translate-y-1/2 bg-sky-700 text-white text-sm px-2 py-1 rounded opacity-0
                        group-hover:opacity-100 transition-opacity z-10"
                        onClick={onAddSection}>

                    Add Section
                </Button>
            </div>
    )
}