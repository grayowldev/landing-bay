import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {useState} from "react";

export const StudioButton = ({draggable, elementType, onClick, children}) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (event) => {
        if (event.dataTransfer) {
            console.log(event.dataTransfer);
            event.dataTransfer.setData("elementType", elementType);
        }
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <motion.div
            drag
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
            <Button
                onClick={onClick}
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}>

                {children}
            </Button>
        </motion.div>
    );
};