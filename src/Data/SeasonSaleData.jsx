import jacket from '../Assets/Images/jacket.jpg';
import shoes from '../Assets/Images/shoes.jpg';
import shoWhite from '../Assets/Images/sho-white.jpg';
import sho from '../Assets/Images/sho.jpg';
import tShirt from '../Assets/Images/tShirt.jpg';
import { SeasonSale } from '../Section';

  
  const SeasonSaleData =()=>{ 
    const items= [
    {
      img: jacket,
      title: 'SPORTS WEAR',
      description: 'Elevate your active lifestyle and workouts with up to 50% off',
    },
    {
      img: shoes,
      title: 'SHOES',
      description: 'Bring home our best-selling shoes with up to 50% off',
    },
    {
      img: shoWhite,
      title: 'ORIGINALS',
      description: 'Make a bold statement with our Originals collection with up to 50% off',
    },
    {
      img: sho,
      title: 'SLIDES',
      description: 'Effortless style, unmatched comfort, and vibrant designs.',
    },
    {
      img: tShirt,
      title: 'KIDS COLLECTION',
      description: 'Save big on our best-selling kids apparel, shoes, and slides.',
    },
    {
      img: tShirt,
      title: 'KIDS COLLECTION',
      description: 'Save big on our best-selling kids apparel, shoes, and slides.',
    },
    {
      img: tShirt,
      title: 'KIDS COLLECTION',
      description: 'Save big on our best-selling kids apparel, shoes, and slides.',
    },
    {
      img: tShirt,
      title: 'KIDS COLLECTION',
      description: 'Save big on our best-selling kids apparel, shoes, and slides.',
    }
  ];
  
  return(
    <>
      <SeasonSale items={items}>End Of Seasoon Sale</SeasonSale>
    </>
  )
}

export default SeasonSaleData;
