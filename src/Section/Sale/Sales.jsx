/* eslint-disable react/prop-types */
import { SaleCard, SectionHeader, SectionWrapper } from "../../Components";
const Sales = ({ data, children }) => {
  const chunkData = (chaunkSize) => {
    return data.slice(0, chaunkSize);
  };

  return (
    <>
      <SectionWrapper>
        <SectionHeader>{children}</SectionHeader>
        <SaleCard data={chunkData(7)} />
      </SectionWrapper>
    </>
  );
};

export default Sales;
