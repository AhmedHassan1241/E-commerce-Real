import React from 'react'
import backImage from "../../Assets/Images/jbgLa.png"
import styles from "./Yeezy.module.css"
import { PrimaryButton } from '../../Components'
const Yeezy = () => {
  return (
    <>
      <div className={styles["section-yazzy"]} style={{backgroundColor: "#ebece3",width: "100%", height: "45vw", backgroundImage:`url(${backImage})`, backgrounPosition: "center", backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
            <div className="container-fluid h-100" >
              <div className={`${styles.LeftDiv} d-flex h-100 row }`} style={{justifyContent: "left", alignItems:"center"}}>
                <div className="left col-md-6">
                    <h1>YEEZY</h1>
                    <p style={{fontSize: "20px",maxWidth:"100%"}}>Access a limited selection of adidas YEEZY with 
                        up to 70% off.</p>
                     <div className="btn-wrapper mt-3"><a style={{textDecoration:"none"}} href="#.">
                    <PrimaryButton>SHOP MENS</PrimaryButton>
                    <img src="img/arrow.svg" alt=""/>
                    <img src="img/download.svg" alt="" className="d-none"/>
                </a></div>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}

export default Yeezy
