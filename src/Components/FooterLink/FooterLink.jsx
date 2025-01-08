import "./FooterLink.css";
// eslint-disable-next-line react/prop-types
const FooterLink = ({ href, children }) => {
  return (
    <>
      <a href={href} className="footer-link">
        <p className="mb-2">{children}</p>
      </a>
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const WrapperFooterLink = ({ header, children }) => {
  return (
    <>
      <div className="col-6 col-md-4 col-lg-2">
        <h6 className="fw-bold text-uppercase"
        style={{textShadow: "1px 1px 1px rgb(226, 235, 225)"}}
        >{header}</h6>
        {children}
      </div>
    </>
  );
};

export default FooterLink;

import "./FooterLink.css";
// eslint-disable-next-line react/prop-types
export const FooterLinkeLast = ({ href, children,borderRight }) => {
  return (
    <>
      <div
        className={`col-3 text-center border-end ${borderRight}-dark-subtle`}
      >
        <a href={href} style={{ color: "#666" }}>
          {children}
        </a>
      </div>
    </>
  );
};
// eslint-disable-next-line react/prop-types
export const WrapperFooterLinkLast = ({children }) => {
  return (
    <>
      <div className="mt-md-2 pt-md-2 pb-md-2">
            <div className="data-final col-md-12 col-xl-8 m-md-auto">
              <div
                className="row g-0 w-75 m-md-auto"
                style={{ fontSize: "12px" }}
              >
        {children}
        </div>
        </div>
      </div>
    </>
  );
};
