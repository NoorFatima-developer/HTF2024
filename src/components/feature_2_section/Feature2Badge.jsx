import PropTypes from 'prop-types';

function FeatureBtn({ text, className,}) {
  return (
   <div className={` w-[79px] font-[500] text-[14px] leading-[20px] text-center text-[#6941C6]
    bg-[#F9F5FF] border-[1px] border-[#E9D7FE] rounded-2xl  md:w-[83px]
   ${className}`}>
    {text}
   </div>
  )
}
FeatureBtn.propTypes = {
    text: PropTypes.string.isRequired, 
    className: PropTypes.string,        
           
  };
  

export default FeatureBtn
