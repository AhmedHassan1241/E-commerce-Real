// import HotData from "../../Data/HotData";
// import NewArrivalsData from "../../Data/NewArrivalsData";
import SeasonSaleData from "../../Data/SeasonSaleData"
// import { Footer, Header, HomeHero, Popular, Yeezy } from "../../Section"
// import SaleData from "./../../Data/SaleData";

import { Footer, Header, HomeHero, Popular, } from "../../Section"


const Home = () => {
  return (
    <>
      <Header/>
      <HomeHero/>
      <SeasonSaleData/> 
      <Popular/>
      <SaleData/>
      <Footer/> 
{/*     
      <Yeezy/>
      <NewArrivalsData/>
      <HotData/>
      */}
    </>
  )
}

export default Home
