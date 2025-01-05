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
import { SaleCarousel } from "../Section"
const SaleData= ()=>{
   const data1= [
    {
        name: "X_PLRBOOST SHOES",
        image: shoes01,
        discount: "- 30%",
        currentPrice: "EGP 8,279.31",
        originalPrice: "EGP 11,999.00"
      },
      {
        name: "SOLARGLIDE 6 Shoes",
        image: shoes02,
        discount: "- 30%",
        currentPrice: "EGP 6,299.00",
        originalPrice: "EGP 8,999.00"
      },
      {
        name: "Court Revival Cloudfoam Modern Lifestyle Court Comfort Shoes",
        image: shoes03,
        discount: "- 25%",
        currentPrice: "EGP 8,279.31",
        originalPrice: "EGP 7,499.00"
      },
      {
        name: "NMD_R1 Shoes",
        image: shoes04,
        discount: "- 35%",
        currentPrice: "EGP 5,409.00",
        originalPrice: "EGP 8,999.00"
      },
      {
        name: "Avryn Shoes",
        image: shoes05,
        discount: "- 30%",
        currentPrice: "EGP 5,409.00",
        originalPrice: "EGP 8,699.00"
      },
      {
        name: "Forum Mid Shoes",
        image: shoes06,
        discount: "- 35%",
        currentPrice: "EGP 6,089.00",
        originalPrice: "EGP 8,699.00"
      },
    {
        name: "NMD_V3 Shoes",
        discount: "- 45%",
        image: shoes07,
        currentPrice: "EGP 5,334.45",
        originalPrice: "EGP 9,699.00"
      },
      {
        name: "Adizero Adios Pro 3.0 Shoes",
        discount: "- 50%",
        image: shoes08,
        currentPrice: "EGP 7,999.50",
        originalPrice: "EGP 15,999.00"
      },
      {
        name: "Web BOOST Shoes",
        discount: "- 40%",
        image: shoes09,
        currentPrice: "EGP 5,219.40",
        originalPrice: "EGP 8,699.00"
      },
      {
        name: "SOLARGLIDE 6 Shoes",
        discount: "- 25%",
        image: shoes10,
        currentPrice: "EGP 7,319.40",
        originalPrice: "EGP 9,788.00"
      },
      {
        name: "Ultraboost Light Shoes",
        discount: "- 25%",
        image: shoes11,
        currentPrice: "EGP 8,215.40",
        originalPrice: "EGP 11,688.00"
      },
      {
        name: "Ultraboost 1.0 Shoes",
        discount: "- 50%",
        image: shoes12,
        currentPrice: "EGP 4,215.40",
        originalPrice: "EGP 9,688.00"
      }
]
return (
    <SaleCarousel data01={data1}>Sale</SaleCarousel>
)
}


export default SaleData;
