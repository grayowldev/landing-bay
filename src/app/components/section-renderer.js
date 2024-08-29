import {Hero} from "@/app/section/Hero";
import Benefits from "@/app/section/Benefits";
import {BlankSection} from "@/app/section/BlankSection";
import {CallToAction} from "@/app/section/CallAction";
import {FAQ} from "@/app/section/FAQ";
import {Features} from "@/app/section/features";
import {Footer} from "@/app/section/Footer";
import {Pricing} from "@/app/section/Pricing";
import {Testimonials} from "@/app/section/Testimonials";

export const SectionRenderer = ({data, children}) => {
    return (
        <div className="bg-white">
            {children}
            {data.type == 'hero' && <Hero></Hero>}
            {data.type == 'benefits' && <Benefits></Benefits>}
            {data.type == 'blank' && <BlankSection></BlankSection>}
            {data.type == 'call-to-action' && <CallToAction></CallToAction>}
            {data.type == 'faq' && <FAQ></FAQ>}
            {data.type == 'features' && <Features></Features>}
            {data.type == 'footer' && <Footer></Footer>}
            {data.type == 'pricing' && <Pricing></Pricing>}
            {data.type == 'testimonials' && <Testimonials></Testimonials>}
        </div>
    )
}