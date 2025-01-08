/* eslint-disable react/prop-types */

import {  SeasonSaleCard, SectionHeader, SectionWrapper } from '../../Components';
// import SeasonSaleData from '../../Data/SeasonSaleData';

const WhatsHot = ({items,children}) => {
  const chunkData = (chaunkSize) => {
    return items.slice(0,chaunkSize);
  };

  return (
    <SectionWrapper>
      <SectionHeader>{children}</SectionHeader>
     {/* <CarouselSliderSale> */}
                <SeasonSaleCard items={chunkData(8)} />
      {/* </CarouselSliderSale> */}
    </SectionWrapper>
  );
};

export default WhatsHot;
