/* eslint-disable react/prop-types */
import { ArrivalCard, SectionHeader, SectionWrapper } from "../../Components";

const NewArrivals = ({ data, children }) => {
  const chunkData = (chaunkSize) => {
    return data.slice(0, chaunkSize);
  };
  return (
    <>
      <SectionWrapper>
        <SectionHeader>{children}</SectionHeader>
        <ArrivalCard data={chunkData(6)} />
      </SectionWrapper>
    </>
  );
};

export default NewArrivals;
