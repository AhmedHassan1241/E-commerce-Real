import arrowImg from "../../Assets/Images/arrow.svg";
import "./Buttons.css";
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ children,link }) => {
  return (
    <div className="btnPrimary">
      <div className=" btn-wrapper mt-2">
        <a href={`#${link}`}>
          <span>
            {children} <span className="fs-5">&#8594;</span>
          </span>
        </a>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
export const SecondaryButton = ({ children }) => {
  return(
  <div className="btn-wrapperr mt-2">
    <a href="#.">
      <span className="text-dark">{children}</span>
      <img src={arrowImg} alt="" />
    </a>
  </div>
  )
};
export default PrimaryButton;
