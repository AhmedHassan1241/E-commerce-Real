/* eslint-disable react/prop-types */
import { useState } from "react";

const AsideFilter = ({ filters, onChangeFilter }) => {
  const initalState = { category: "", brand: "", price: "" };
  const [selectedFilters, setSelectedFilters] = useState(initalState);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedFilters({ ...selectedFilters, [name]: value });
  };
  const applyFilters = () => {
    onChangeFilter({ ...selectedFilters });
  };
  const resetFilters = () => {
    setSelectedFilters(initalState)
    onChangeFilter(initalState);
  };

  return (
    <div
      className="container-fluid card p-3 text-center text-lg-start shadow-lg"
    //   style={{ width: "100%" }}
    >
      <h3 className="mb-4">Filters</h3>
      <div className="d-flex d-lg-block justify-content-between">
        <div className="mb-3">
          <label htmlFor="category" className="form-label fw-bold">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="form-select"
            value={selectedFilters.category}
            onChange={handleChange}
          >
            <option value="">All</option>
            {filters.categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="brand" className="form-label fw-bold">
            Brand
          </label>
          <select
            name="brand"
            id="brand"
            value={selectedFilters.brand}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">All</option>
            {filters.brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label fw-bold">
            Price
          </label>
          <select
            name="price"
            id="price"
            value={selectedFilters.price}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">All</option>
            {filters.prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-center mt-3 d-flex gap-3">
        <button className="btn btn-primary w-50" onClick={applyFilters}>
          Apply Filters
        </button>
        <button className="btn btn-danger w-50" onClick={resetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default AsideFilter;
