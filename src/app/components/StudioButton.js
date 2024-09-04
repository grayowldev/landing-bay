import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";

export const StudioButton = ({draggable, onClick, children}) => {
    return (
        <motion.div
            drag={draggable}
            dragMomentum={false}>
            <Button
                onClick={onClick}>{children}</Button>
        </motion.div>
    )
}