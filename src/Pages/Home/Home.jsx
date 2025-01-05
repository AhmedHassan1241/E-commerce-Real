// import HotData from "../../Data/HotData";
// import NewArrivalsData from "../../Data/NewArrivalsData";
import SeasonSaleData from "../../Data/SeasonSaleData"
// import { Footer, Header, HomeHero, Popular, Yeezy } from "../../Section"
// import SaleData from "./../../Data/SaleData";

import { Header, HomeHero } from "../../Section"
import Popular from './../../Section/Popular/Popular';


const Home = () => {
  return (
    <>
      <Header/>
      <HomeHero/>
      <SeasonSaleData/> 
      <Popular/>
{/*     
      <Yeezy/>
      <SaleData/>
      <NewArrivalsData/>
      <HotData/>
      <Footer/> */}
    </>
  )
}

export default Home
