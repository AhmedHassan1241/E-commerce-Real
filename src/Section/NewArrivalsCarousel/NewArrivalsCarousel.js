import React from 'react'
import { ArrivalCard, SectionHeader, SectionWrapper } from '../../Components';

const NewArrivalsCarousel = ({data,children}) => {
 

        const chunkData2 = (array,chaunkSize)=>{
            const result = [];
            for ( let i =0 ;i<array.length; i +=chaunkSize){
                result.push(array.slice(i, i + chaunkSize));
            }
            return result ;
        }
        
        const chunks2 = chunkData2(data,4);
        if (chunks2.length === 0) {
            return <p>No products available</p>; // Handle no data case
          }
      return (
        <>
          <SectionWrapper>
            <SectionHeader>{children}</SectionHeader>
            <div id="carouselArrival" className="carousel slide">
              <div className="carousel-indicators">
                { chunks2.map((_,index)=>(
                <button
                key={index}
                  type="button"
                  data-bs-target="#carouselArrival"
                  data-bs-slide-to={index}
                  className={index === 0 ?"active": ""}
                  aria-current={index === 0 ? "true":"fales"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
                ))}
              </div>
              <div className="carousel-inner">
             {
                chunks2.map((chunk,chunkIndex)=>(
                    <div key={chunkIndex}
                    className={`carousel-item ${chunkIndex===0 ? "active":""}`}
                    >
    <div className="row">
    {
        chunk.map((product,index)=>(
            <ArrivalCard key={index} data={product}/>
        ))}
        </div>
        </div>
        ))}
        </div>
            
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselArrival"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselArrival"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </SectionWrapper>
        </>
      );
    };

export default NewArrivalsCarousel
