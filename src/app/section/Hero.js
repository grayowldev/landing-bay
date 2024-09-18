import Hero1 from "@/app/templates/hero10";
import Hero2 from "@/app/templates/Hero2";
import Hero4 from "@/app/templates/Hero4";
import Hero3 from "@/app/templates/Hero3";
import Hero5 from "@/app/templates/hero5";
import Hero6 from "@/app/templates/hero6";
import Hero7 from "@/app/templates/hero7";
import Hero8 from "@/app/templates/hero8";
import Hero9 from "@/app/templates/hero9";
import Hero10 from "@/app/templates/Hero1";

export const Hero = ({data, content, styles, activeElement, toggleActive, findElement}) => {
    console.log("Hero Content: ",content)
    console.log("Hero Data: ",data)
    console.log("Hero Styles: ",styles)

    return (
      <div onClick={() => toggleActive(content.id)}>
        <Hero6
            data={data}
            content={content}
            activeElement={activeElement}
            toggleActive={toggleActive}
            findElement={findElement}
            styles={styles}></Hero6>
      </div>


  )
}