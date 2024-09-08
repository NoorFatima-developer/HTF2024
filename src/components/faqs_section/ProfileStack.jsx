// ProfileStack.jsx


const ProfileStack = () => {
  return (
 <div className="
 w-full mt-[48px] py-[32px] bg-[#F9FAFB] rounded-2xl md:mx-[112px] md:w-[1216px] flex flex-col items-center gap-[24px] md:gap-[32px] 
 ">

  {/* imagestack */}
  <div className="relative flex items-center justify-center ">
    <img className="w-[48px] h-[48px] rounded-full object-cover border-[0.75px] opacity-80 border-black  " src="https://i.pinimg.com/736x/bc/5a/86/bc5a8680fd18d355fd15ef1331e08d55.jpg" alt="" />
    <img className="w-[56px] absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] h-[56px] z-10 border-[1.5px] border-white rounded-full object-cover " src="https://i.pinimg.com/564x/1c/b4/2c/1cb42cae55c972b2185ba0e651826802.jpg" alt="" />
    <img className="w-[48px] h-[48px] rounded-full object-cover  border-[0.75px] opacity-80 border-black " src="https://i.pinimg.com/564x/cb/cf/51/cbcf518aac85fc007d09c035b3110fc0.jpg" alt="" />
  </div>

{/* text */}
<div>
<h3 className="
  font-[600] text-[20px] leading-[30px] text-[#101828] text-center
  ">Still have questions?</h3> 

  <p className="
  font-[400] text-[16px] leading-[24px] text-[#475467] text-center md:text-[18px] md:leading-[28px] mt-[8px]
  " >Can’t find the answer you’re looking for? Please chat to our friendly team.</p>

</div>

<button className="flex w-[148px] bg-[#7F56D9]  hover:bg-[#6d45c3]  justify-center items-center py-3 px-2 rounded-lg font-[600] text-[16px] text-white">Get in touch</button>

 </div>
  );
};

export default ProfileStack;
