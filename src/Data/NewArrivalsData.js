import shoes01 from "../Assets/Images/shoes1.avif"
import shoes02 from "../Assets/Images/shoes2.avif";
import shoes03 from "../Assets/Images/shoes3.avif";
import shoes04 from "../Assets/Images/shoes4.avif";
import shoes05 from "../Assets/Images/shoes5.avif";
import shoes06 from "../Assets/Images/shoes6.avif";
import shoes07 from "../Assets/Images/shoes7.avif";
import shoes08 from "../Assets/Images/shoes8.avif";
import shoes09 from "../Assets/Images/shoes9.avif";
import shoes10 from "../Assets/Images/shoes10.avif";
import shoes11 from "../Assets/Images/shoes11.avif";
import shoes12 from "../Assets/Images/shoes12.avif";
import { NewArrivalsCarousel } from "../Section"
const NewArrivalsData= ()=>{
   const data= [
    {
        name: "X_PLRBOOST SHOES",
        image: shoes01,
        originalPrice: "EGP 11,999.00"
      },
      {
        name: "SOLARGLIDE 6 Shoes",
        image: shoes02,
        originalPrice: "EGP 8,999.00"
      },
      {
        name: "Court Revival Cloudfoam Modern Lifestyle Court Comfort Shoes",
        image: shoes03,
        originalPrice: "EGP 7,499.00"
      },
      {
        name: "NMD_R1 Shoes",
        image: shoes04,
        originalPrice: "EGP 8,999.00"
      },
      {
        name: "Avryn Shoes",
        image: shoes05,
        originalPrice: "EGP 8,699.00"
      },
      {
        name: "Forum Mid Shoes",
        image: shoes06,
        originalPrice: "EGP 8,699.00"
      },
    {
        name: "NMD_V3 Shoes",
       
        image: shoes07,
        originalPrice: "EGP 9,699.00"
      },
      {
        name: "Adizero Adios Pro 3.0 Shoes",
        image: shoes08,
        originalPrice: "EGP 15,999.00"
      },
      {
        name: "Web BOOST Shoes",
        image: shoes09,
        originalPrice: "EGP 8,699.00"
      },
      {
        name: "SOLARGLIDE 6 Shoes",
        image: shoes10,
        originalPrice: "EGP 9,788.00"
      },
      {
        name: "Ultraboost Light Shoes",
        image: shoes11,
        originalPrice: "EGP 11,688.00"
      },
      {
        name: "Ultraboost 1.0 Shoes",
        image: shoes12,
        originalPrice: "EGP 9,688.00"
      }
]
return (
  <NewArrivalsCarousel data={data}>New Arrivals</NewArrivalsCarousel>
)
}


export default NewArrivalsData;
