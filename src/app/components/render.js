import {Element} from "@/app/components/element";
import {PageSection} from "@/app/components/page-section";

export const Render = ({data, activeElement, toggleActive}) => {
    const render = () => {
        if (!data) return null;
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
        } else {
            return null
        }

    }

    const renderText = () => {
        if (data.textType === 'title-text') {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                    <h1 className="text-5xl font-bold mb-4">{data.content}</h1>
                </Element> )
        } else if (data.textType === 'body') {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <p className="text-lg mb-8">{data.content}</p>
                </Element>)
        } else {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                    <p className="text-lg mb-8">{data.content}</p>
                </Element>)
        }

    }

    const renderButton = () => {
        return (
            <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    {data.content}
                </button>
            </Element>
        )
    }

    const renderImage = () => {
        return (
            <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <img
                    src={data.src}
                    className="w-full h-full object-cover"
                />
            </Element>
        )
    }

    const renderVideo = () => {
        return (
            <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <video
                    controls
                    src={data.src}
                    className="w-full h-full object-cover"
                />
            </Element>
        )
    }

    const renderElement = () => {
        return null
    }

    const renderSection = () => {
        return (
            <PageSection>
                <div className="w-screen h-96 bg-red-600">
                    SECTION!!!
                </div>
            </PageSection>
        )
    }

    const renderContainer = () => {
        return null
    }

    const renderInput = () => {
        return (
            <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <input
                    type={data.inputType}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    placeholder={data.placeholder}
                />
            </Element>
        )
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