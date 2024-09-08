
import Faq from "../utilityComponents/FAQS";
import ProfileStack from "./ProfileStack";

function FaqsSections() {
    const faqData = [
        { title: 'Is there a free trial available?', content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
        { title: 'Can I change my plan later?', content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
        { title: 'What is your cancellation policy?', content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
        { title: 'Can other info be added to an invoice?', content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
        { title: 'How do I change my account email?', content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
      ];
      

  return (
    <div
      className="
    w-full bg-[#FFFFFF] py-[64px] px-[16px]  flex flex-col items-center md:py-[96px] md:px[80px]
    "
    >
      <h2
        className="
      text-[30px] font-[600] leading-[38px] tracking-tight text-center text-[#101828]  mt-[12px] md:text[36px] md:leading-[44px]
      "
      >
        Frequently asked questions
      </h2>
      <p
        className="
      mt-[16px] text-[18px] leading-7 text-center font-[400] text-[#475467] md:text-[20px] md:leading-[30px] md:mt-[20px]  md:w-[768px]
      "
      >
        Everything you need to know about the product and billing.
      </p>

    

      <Faq data={faqData} />

      <ProfileStack />

    
    </div>
  );
}

export default FaqsSections;
