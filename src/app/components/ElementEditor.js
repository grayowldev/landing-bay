import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export const ElementEditor = ({data, content, activeElement, toggleActive, findElement, elementType, updateContent, updateElement}) => {
    console.log("@@ ElementEditor, activeElement", activeElement)
    console.log("@@ ElementEditor, elementType",elementType)
    let currentElement = null;

    const displayElementEditor = () => {
        switch (activeElement?.layout?.element.type) {
            case 'text':
                return textEditor()
            default:
                return <div>Null</div>
        }
    }

    const handleContentChange = (event) => {
        console.log("@@ handleContentChange", event.target.value)
        const newContent = activeElement?.content
        newContent.element.content = event.target.value
        console.log("@@ activeElement content", activeElement.content)
        const newElement = {...activeElement, content: newContent}
        console.log("@@ newElement", newElement)
        updateContent(activeElement.id, activeElement.content.sectionId , newContent)
    }


    const textEditor = () => {
        return (
            <div>
                <div>
                    <h4>Text</h4>
                    <Input
                        type={`text`}
                        placeholder={`${activeElement?.content.element.content}`}
                        value={`${activeElement?.content.element.content}`}
                        onChange={handleContentChange}
                    />
                    <h4>Padding</h4>
                    <Input/>
                    <h4>Margin</h4>
                    <Input/>
                </div>
                <div>
                    <h4>Font</h4>
                    <Input/>
                    <h4>Size</h4>
                    <Input/>
                    <h4>Weight</h4>
                    <Input/>
                    <h4>Line spacing</h4>
                    <Input/>
                    <h4>Letter spacing</h4>
                    <Input/>
                </div>
                <h4>Type</h4>
                <Select>
                    <SelectTrigger className={`w-[180px]`}>
                        <SelectValue placeholder={`${currentElement?.element.textType}`}></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="heading">Heading</SelectItem>
                            <SelectItem value="heading2">Heading 2</SelectItem>
                            <SelectItem value="subheading">Subheading</SelectItem>
                            <SelectItem value="subheading2">Subheading 2</SelectItem>
                            <SelectItem value="body">Body</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <h4>Font size</h4>
                <Select>
                    <SelectTrigger className={`w-[180px]`}>
                        <SelectValue placeholder="Select a font size"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="heading">2px</SelectItem>
                            <SelectItem value="heading2">4px</SelectItem>
                            <SelectItem value="subheading">8px</SelectItem>
                            <SelectItem value="subheading2">12px</SelectItem>
                            <SelectItem value="body">16px</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <h4>Text color</h4>
                <Input placeholder={`#:${currentElement?.styles?.color || '000000' }`}></Input>
                <h4>Margin</h4>
                <Input placeholder={`Margin`}></Input>
            </div>
        )
    }

    return displayElementEditor()

}