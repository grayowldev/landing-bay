import {Element} from "@/app/components/element";

export const Render = ({data, activeElement, toggleActive, children}) => {
    const render = () => {
        if (data.type === 'button') {
            return renderButton()
        } else if (data.type === 'text') {
            return renderText()
        } else if (data.type === 'image') {
            return renderImage()
        } else if (data.type === 'video') {
            return renderVideo()
        } else if (data.type === 'element') {
            return renderElement()
        } else if (data.type === 'section') {
            return renderSection()
        } else if (data.type === 'container') {
            return renderContainer()
        } else if (data.type === 'input') {
            return renderInput()
        } else if (data.type === 'table') {
            return renderTable()
        } else if (data.type === 'list') {
            return renderList()
        } else if (data.type === 'map') {
            return renderMap()
        }

    }

    const renderText = () => {
        if (data.textType === 'title-text') {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(element.id)}>
                    <h1 className="text-5xl font-bold mb-4">{data.content}</h1>
                </Element> )
        } else if (data.textType === 'body') {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(element.id)}>
                <p className="text-lg mb-8">{data.content}</p>
                </Element>)
        } else {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(element.id)}>
                    <p className="text-lg mb-8">{data.content}</p>
                </Element>)
        }

    }

    const renderButton = () => {
        return (
            <Element isActive={activeElement === data.id} onClick={() => toggleActive(element.id)}>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    {data.content}
                </button>
            </Element>
        )
    }

    const renderImage = () => {
        return null
    }

    const renderVideo = () => {
        return null
    }

    const renderElement = () => {
        return null
    }

    const renderSection = () => {
        return null
    }

    const renderContainer = () => {
        return null
    }

    const renderInput = () => {
        return null
    }

    const renderTable = () => {
        return null
    }

    const renderList = () => {
        return null
    }

    const renderMap = () => {
        return null
    }

    const renderForm = () => {
        return null
    }

    const renderCode = () => {
        return null
    }

    const renderRichText = () => {
        return null
    }

    const renderHero = () => {
        return null
    }


    return render()
}