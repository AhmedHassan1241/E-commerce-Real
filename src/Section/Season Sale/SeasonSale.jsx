
import { CarouselSliderSale, SeasonSaleCard, SectionHeader, SectionWrapper } from '../../Components';
// import SeasonSaleData from '../../Data/SeasonSaleData';

// eslint-disable-next-line react/prop-types
const SeasonSale = ({items,children}) => {


  return (
    <SectionWrapper>
      <SectionHeader>{children}</SectionHeader>
     <CarouselSliderSale>
                <SeasonSaleCard items={items} visibleItemsCount={3} withIndicator isInfinite/>
      </CarouselSliderSale>
    </SectionWrapper>
  );
};

export default SeasonSale;
