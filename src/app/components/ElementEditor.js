import {Input} from "@/components/ui/input";

export const ElementEditor = ({data, content, activeElement, toggleActive, findElement, elementType}) => {
    const displayElementEditor = () => {
        console.log(activeElement)
        switch (elementType) {
            case 'text':
                return textEditor()
            default:
                return null
        }
    }

    const textEditor = () => {
        return (
            <div>
                Element Editor!

                <Input placeholder></Input>
            </div>
        )
    }

    return displayElementEditor()

}