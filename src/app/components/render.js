import {Element} from "@/app/components/element";
import {PageSection} from "@/app/components/page-section";
import {Hero} from "@/app/section/Hero";
import Benefits from "@/app/section/Benefits";
import {Features} from "@/app/section/features";
import {Testimonials} from "@/app/section/Testimonials";
import {CallToAction} from "@/app/section/CallAction";
import {BlankSection} from "@/app/section/BlankSection";
import {Pricing} from "@/app/section/Pricing";
import {Footer} from "@/app/section/Footer";
import {FAQ} from "@/app/section/FAQ";

export const Render = ({data, content, activeElement, toggleActive, findElement}) => {

    console.log("+++++++++")
    console.log("LAYOUT")
    console.log(data)
    console.log("CONTENT")
    console.log(content)
    console.log("+++++++++")
    const render = () => {
        if (!data) return null;
        if (data.type === 'hero') {
            console.log('rendering hero')
            // console.log("+")
            // console.log(content)
            // console.log("++")
            // const heroContent = content.find(section => section.sectionType === 'hero')
            // console.log(heroContent)
            return renderHero(
                content.find(section => section.sectionType === 'hero')
            )
        } else if (data.type === 'benefits') {
            return renderBenefits()
        }
        else if (data.type === 'blank') {
            return renderBlank()
        }
        else if (data.type === 'call-to-action') {
            return renderCallToAction()
        }
        else if (data.type === 'faq') {
            return renderFAQ()
        }
        else if (data.type === 'features') {
            return renderFeatures()
        }
        else if (data.type === 'footer') {
            return renderFooter()
        }
        else if (data.type === 'pricing') {
            return renderPricing()
        }
        else if (data.type === 'testimonials') {
            return renderTestimonials()
        }
        else if (data.type === 'button') {
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
        if (data.textType === 'heading') {
            console.log("in heading")
            console.log(content)
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                    <h1 className="text-5xl font-bold mb-4">{content?.content}</h1>
                </Element> )
        } else if (data.textType === 'subheading') {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                    <h2 className="text-3xl font-bold mb-4">{content?.content}</h2>
                </Element>)
        } else if (data.textType === 'body') {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <p className="text-lg mb-8">{content?.content}</p>
                </Element>)
        } else {
            return (
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                    <p className="text-lg mb-8">{content?.content}</p>
                </Element>)
        }

    }

    const renderButton = () => {
        return (
            <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    {content.content}
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


    // Sections:
    const renderHero = (section) => {
        // console.log("Section -->")
        // console.log(section)
        return (
            <Hero
                data={data.elements}
                content={section.contents}
                activeElement={activeElement}
                toggleActive={toggleActive}
                findElement={findElement}></Hero>
        )
    }

    const renderBenefits = (section) => {
        return (
            <Benefits></Benefits>
        )
    }

    const renderFeatures = () => {
        return (
            <Features></Features>
        )
    }

    const renderTestimonials = () => {
        return (
            <Testimonials></Testimonials>
        )
    }

    const renderCallToAction = () => {
        return (
            <CallToAction></CallToAction>
        )
    }

    const renderFAQ = () => {
        return (
            <FAQ></FAQ>
        )
    }

    const renderFooter = () => {
        return (
            <Footer></Footer>
        )
    }

    const renderPricing = () => {
        return (
            <Pricing></Pricing>
        )
    }

    const renderBlank = () => {
        return (
            <BlankSection
                data={data}
                activeElement={activeElement}
                toggleActive={toggleActive}
                findElement={findElement}></BlankSection>
        )
    }



    return render()
}