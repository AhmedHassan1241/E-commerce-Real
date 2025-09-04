import { useState } from "react";
import { AsideFilter, ProductsList } from "../../Components";
import img1 from "../../assets/images/sport1.jpg";
import img2 from "../../assets/images/sport2.jpg";
import img3 from "../../assets/images/sport3.jpg";
import img4 from "../../assets/images/sport4.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const ShowProduct = () => {
  const filters = {
    categories: ["Electronics", "Books", "Clothing"],
    prices: ["Under $50", "$50-$100", "Above $100"],
    brands: ["Sony", "Samsung", "Apple", "Nike"],
  };

  const products = [
    {
      id: 1,
      dd: "one",
      image: img1,
      name: "iPhone",
      category: "Electronics",
      brand: "Apple",
      price: 999,
    },
    {
      id: 2,
      dd: "two",
      image: img2,
      name: "T-shirt",
      category: "Clothing",
      brand: "Nike",
      price: 25,
    },
    {
      id: 3,
      dd: "three",
      image: img3,
      name: "Headphones",
      category: "Electronics",
      brand: "Sony",
      price: 120,
    },
    {
      id: 4,
      dd: "four",
      image: img4,
      name: "Headphones",
      category: "Electronics",
      brand: "Sony",
      price: 70,
    },
  ];
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChanged = (selectedFilters) => {
    const filtered = products.filter(
      (product) =>
        (!selectedFilters.category ||
          selectedFilters.category === product.category) &&
        (!selectedFilters.price ||
          (selectedFilters.price === filters.prices[0] && product.price < 50) ||
          (selectedFilters.price === filters.prices[1] &&
            product.price >= 50 &&
            product.price <= 100) ||
          (selectedFilters.price === filters.prices[2] &&
            product.price > 100)) &&
        (!selectedFilters.brand || selectedFilters.brand === product.brand)
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      <Header />
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-11 mx-auto col-lg-3 mb-4 mt-4">
            <AsideFilter
              filters={filters}
              onChangeFilter={handleFilterChanged}
            />
          </div>

          <div className="col-11 col-lg-9 mt-4 mx-auto">
            <ProductsList products={filteredProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowProduct;
