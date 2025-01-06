import { SecondaryButton } from "../../Components"
const Category = ({img,name}) => {
  return (
    <>
     <div className="category col-md">
                <div
                  style={{
                      position: "relative",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      height: "300px",
                    }}
                  className="d-flex justify-content-center  align-items-end "
                >
                    <a href={`#${name}`}>
                  <SecondaryButton >{name} </SecondaryButton>
                </a>
                </div>
              </div> 
    </>
  )
}

export default Category;
