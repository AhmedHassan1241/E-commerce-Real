import React from 'react'

const ArrivalCard = ({data}) => {
  return (
    <>
    
     <div className="col-3 col-lg-3">
                    <img src={data.image} class="d-block w-100" alt="..."></img>
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
                          color: "rgb(202, 202, 202)",
                          textDecoration: "none",
                          fontWeight: "300",
                          letterSpacing: "1px",
                        }}
                      >
                       {data.originalPrice}
                      </ins>{" "}
                    </p>
                  </article>
                  </div>

    </>
  )
}

export default ArrivalCard
