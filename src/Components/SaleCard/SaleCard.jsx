import React from 'react'

const SaleCard = ({data}) => {
  return (
    <>
    
     <div className="col-3 col-lg-3">
                  <div className="position-relative">
                    <img src={data.image} class="d-block w-100" alt="..."></img>
                    <span
                      className="position-absolute"
                      style={{
                        bottom: "2%",
                        left: "2%",
                        width: "auto",
                        padding: "3px",
                        borderRadius: "5px",
                        fontSize: "13px",
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "GrayText",
                      }}
                    >
                      {data.discount}
                    </span>
                  </div>
                  <article class="text-left p-2">
                    <a
                      href="#."
                      style={{
                        color: "#000",
                        fontWeight: "300",
                        fontSize: "17px",
                        textDecoration:"none",
                      }}
                      className="linkGo"
                    >
                      {data.name}
                    </a>
                    <p>
                      <ins
                        style={{
                          fontSize: "12px",
                          color: "rgb(212, 24, 24)",
                          textDecoration: "none",
                          fontWeight: "300",
                          letterSpacing: "1px",
                        }}
                      >
                       {data.currentPrice}
                      </ins>{" "}
                      <del
                        className="ms-2"
                        style={{
                          letterSpacing: "1.5px",
                          fontSize: "12px",
                          color: "rgb(202, 202, 202)",
                          fontWeight: "0",
                        }}
                      >
                        {data.originalPrice}
                      </del>
                    </p>
                  </article>
                </div> 

    </>
  )
}

export default SaleCard
