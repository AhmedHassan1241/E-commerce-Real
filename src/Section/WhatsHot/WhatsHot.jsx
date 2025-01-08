/* eslint-disable react/prop-types */

import { SectionHeader, SectionWrapper, WhatsHotCard } from '../../Components';
// import SeasonSaleData from '../../Data/SeasonSaleData';

const SeasonSale = ({data,children}) => {
  const chunkData = (chaunkSize) => {
    return data.slice(0,chaunkSize);
  };

  return (
    <SectionWrapper>
      <SectionHeader>{children}</SectionHeader>
                <WhatsHotCard data={chunkData(8)} />
    </SectionWrapper>
  );
};

export default SeasonSale;
