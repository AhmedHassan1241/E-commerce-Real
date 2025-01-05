import arrowImg from "../../Assets/Images/arrow.svg";
import styles from "./Buttons.module.css";
const PrimaryButton = ({ children }) => {
  return (
    <>
      <div className={`${styles["btn-wrapper"]} mt-2`}>
        <a href="#.">
          <span>
            {children} <span className="fs-5">&#8594;</span>
          </span>
        </a>
      </div>
    </>
  );
};
export const SecondaryButton = ({ children }) => {
  return(
  <div className={`${styles["btn-wrapperr"]} mt-2`}>
    <a href="#.">
      <span className="text-dark">{children}</span>
      <img src={arrowImg} alt="" />
    </a>
  </div>
  )
};
export default PrimaryButton;
