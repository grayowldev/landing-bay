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
import {TestComp} from "@/app/section/TestComp";

import {motion} from "framer-motion";
import { useState } from 'react';
import {renderText} from "@/app/components/rendering/RenderText";

export const Render = ({data, content, activeElement, toggleActive, findElement, sectionId}) => {
    // const content = "Content"
    console.log("!!!!! Section Id", sectionId)
    console.log("data", data)
    const render = () => {
        if (!data) return null;
        if (data.type === 'hero') {
            return renderHero()
                // content.find(section => section.sectionType === 'hero'))
        } else if (data.type === 'test') {
            return <TestComp></TestComp>
        }
        else if (data.type === 'benefits') {
            return renderBenefits()
        }
        else if (data.type === 'blank') {
            return renderBlank()
                // content.find(section => section.id === data.id))
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
            return renderText({data, content, activeElement, toggleActive})
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
        const [isHovered, setIsHovered] = useState(false);
        console.log("In Container", sectionId)
        console.log("container contents", content)

        const allowDrop = (event) => {
            event.preventDefault();
            event.stopPropagation();
        }

        const onDrop = (event) => {
            event.preventDefault();
            event.stopPropagation();
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
            const updatedElements = [...data.elements, newElement];

            const updatedData = {
                ...data,
                elements: [...(data.elements || []), newElement]
            };

            // Call the findAndUpdateElementById function passed as a prop
            if (typeof findElement === 'function') {
                findElement(data.id, sectionId, updatedData);
            } else {
                console.warn('findAndUpdateElementById function is not provided');
            }

            console.log("Updated data:", updatedData);
            setIsHovered(false);
        }

        const onDragEnter = (event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsHovered(true);
        }

        const onDragLeave = (event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsHovered(false);
        }

        return (
            <motion.div
                onDrop={onDrop}
                onDragOver={allowDrop}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                className={`w-full h-full p-4 ${isHovered ? 'bg-blue-400' : 'bg-amber-600'}`}
            >
                <Element isActive={activeElement === data.id} onClick={() => toggleActive(data.id)}>
                    {data.orientation === "horizontal" ? (
                        <div className="flex flex-row space-x-4 w-full">
                            {data?.elements?.map((item, index) => {
                                return (
                                    <div key={index} className="flex-1">
                                        <Render
                                            key={index}
                                            data={item}
                                            content={content.elements[index]}
                                            activeElement={activeElement}
                                            toggleActive={toggleActive}
                                            sectionId={sectionId}></Render>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-4">
                            {data?.elements?.map((item, index) => {
                                return (
                                        <Render
                                            key={index}
                                            data={item}
                                            content={content.elements[index]}
                                            activeElement={activeElement}
                                            toggleActive={toggleActive}
                                            sectionId={sectionId}></Render>
                                )
                            })}
                        </div>
                    )}

                </Element>
            </motion.div>
        )
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
        return (
            <Hero
                data={data.elements}
                // content={section.contents}
                activeElement={activeElement}
                toggleActive={toggleActive}
                findElement={findElement}></Hero>
        )
    }

    const renderBenefits = (section) => {
        return (
            <Benefits
                data={data.elements}
            ></Benefits>
        )
    }

    const renderFeatures = () => {
        return (
            <Features
                data={data.elements}></Features>
        )
    }

    const renderTestimonials = () => {
        return (
            <Testimonials data={data.elements}></Testimonials>
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
            <Pricing data={data.elements}></Pricing>
        )
    }

    const renderBlank = (section) => {
        return (
            <BlankSection
                data={data}
                content={section}
                activeElement={activeElement}
                toggleActive={toggleActive}
                findElement={findElement}
                sectionId={sectionId}></BlankSection>
        )
    }

    return render()
}