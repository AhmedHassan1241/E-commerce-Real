import jacket from "../assets/images/jackett.jpg";
import shoes from "../assets/images/shoes.jpg";
import shoWhite from "../assets/images/sho-white.jpg";
import sho from "../assets/images/sho.jpg";
import tShirt from "../assets/images/tShirt.jpg";
import { SeasonSale } from "../Section";

const SeasonSaleData = () => {
  const items = [
    {
      image: jacket,
      title: "SPORTS WEAR",
      id: 1,
      description:
        "Elevate your active lifestyle and workouts with up to 50% off",
    },
    {
      image: shoes,
      title: "SHOES",
      id: 2,
      description: "Bring home our best-selling shoes with up to 50% off",
    },
    {
      image: shoWhite,
      title: "ORIGINALS",
      id: 3,
      description:
        "Make a bold statement with our Originals collection with up to 50% off",
    },
    {
      image: sho,
      title: "SLIDES",
      id: 4,
      description: "Effortless style, unmatched comfort, and vibrant designs.",
    },
    {
      image: tShirt,
      id: 5,
      title: "KIDS COLLECTION",
      description:
        "Save big on our best-selling kids apparel, shoes, and slides.",
    },
    {
      image: tShirt,
      id: 6,
      title: "KIDS COLLECTION",
      description:
        "Save big on our best-selling kids apparel, shoes, and slides.",
    },
    {
      image: tShirt,
      id: 7,
      title: "KIDS COLLECTION",
      description:
        "Save big on our best-selling kids apparel, shoes, and slides.",
    },
    {
      image: tShirt,
      id: 8,
      title: "KIDS COLLECTION",
      description:
        "Save big on our best-selling kids apparel, shoes, and slides.",
    },
    {
      image: jacket,
      id: 9,
      title: "SPORTS WEAR",
      description:
        "Elevate your active lifestyle and workouts with up to 50% off",
    },
    {
      image: tShirt,
      id: 10,
      title: "KIDS COLLECTION",
      description:
        "Save big on our best-selling kids apparel, shoes, and slides.",
    },
  ];

  return (
    <>
      <SeasonSale items={items}>End Of Season Sale</SeasonSale>
    </>
  );
};

export default SeasonSaleData;
