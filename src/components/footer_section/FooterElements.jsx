import PropTypes from 'prop-types';

function FooterElements({ title, links, showBadge }) {
  return (
    <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
      <p className="font-[600] text-[14px] text-[#667085] leading-[20px]">{title}</p>
      <ul className="flex flex-col items-start justify-start gap-[12px]">
        {links.map((item, index) => (
          <li key={index} className="font-[600] text-[16px] leading-[24px] text-[#475467] flex items-center">
            <a href={item.link}>{item.text}</a>
            {/* Show badge if the conditions are met */}
            {showBadge && index === 2    && (
              <span className="h-[22px] py-[2px] border-[1px] border-[#D0D5DD] flex items-center ml-3 rounded-md justify-center bg-[white] px-[6px] font-[500] text-[12px] leadiing-[18px] text-[#344054] ">New</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterElements.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  showBadge: PropTypes.bool, // Added prop for controlling badge display
};

export default FooterElements;
