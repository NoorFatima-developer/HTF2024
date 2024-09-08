import FeatureBtn from "./Feature2Badge"
import {iphone_desktop_mockup,  iphone_mockup, messanger, power, share} from "../../assets/"
import FeatureCard from "../utilityComponents/FeatureCard"

let data = [
    {
        icon: messanger,
        title: "Share team inboxes",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        icon: power,
        title: "Deliver instant answers",
        description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
        icon: share,
        title: "Manage your team with reports",
        description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
    },
]

function Feature2Section() {
  return (
    <div className="
    w-full bg-[#FFFFFF] py-[64px] px-[16px] flex flex-col items-center md:py-[96px] md:px[80px]
    ">
      <FeatureBtn text="Features"  />
      <h2
      className="
      text-[30px] font-[600] leading-[38px] tracking-tight text-center text-[#101828]  mt-[12px] md:text[36px] md:leading-[44px]
      "
      >Analytics that feels like it’s from the future</h2>
      <p className="
      mt-[16px] text-[18px] leading-7 text-center font-[400] text-[#475467] md:text-[20px] md:leading-[30px] md:mt-[20px]  md:w-[768px]
      ">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        
    
        <img className="mt-[48px] md:hidden w-full" src={iphone_mockup} alt="" />
        <img className="mt-[48px] hidden md:block" src={iphone_desktop_mockup} alt="" />

        <div className="mt-[48px] flex flex-col gap-10 items-center justify-center flex-wrap mb-[64px] md:flex-row md:gap-8 md:mx-4 md:mb-[96px]">
        {data.map((item, index) => (
            <FeatureCard key={index} feature2={true} icon={item.icon} title={item.title} description={item.description} />
        ))}

        <div className=" w-[full] h-[1px] bg-[#E4E7EC]"></div>

    </div>
    </div>
  )
}

export default Feature2Section
