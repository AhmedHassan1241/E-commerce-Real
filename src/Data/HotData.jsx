import sport01 from '../Assets/Images/sport1.jpg';
import sport02 from '../Assets/Images/sport2.jpg';
import sport03 from '../Assets/Images/sport3.jpg';
import sport04 from '../Assets/Images/sport4.jpg';

import { SeasonSale } from '../Section';
import { createContext } from 'react';

  
export const ItemsData= createContext();
  const HotData =()=>{ 
    const video = "https://cmspreview-res.cloudinary.com/video/upload/v1716272651/MENA/tennis-SS24-roland-garros-launch-HP-teaser-card-portrait-dualgender-d_1.mp4";
    const items= [
    {
      img: sport01,
      title: 'For the fast',
      description: 'Meet our record-breaking running shoe family.',
    },
    {
      img: sport02,
      title: 'Ready for Yoga',
      description: 'Connect to your practice in mind and body with our yoga range.',
    },
    {
      img: sport03,
      title: 'SUPERCOMFORT. SUPERNOVA.',
      description: 'Experience maximum comfort with the new Supernova.',
    },
    {
      img: sport04,
      title: 'ADIDAS FOOTBALL',
      description: 'The Messi Player Pack, follow in the footsteps of a legend.',
    },
    {
      video: video,
      title: 'Paris tennis collection',
      description: 'Discover the tennis range designed to provide best on court performance.',
    },
  ];
  
  return(
    <>
      <SeasonSale items={items}>What's Hot</SeasonSale>
    </>
  )
}

export default HotData;
