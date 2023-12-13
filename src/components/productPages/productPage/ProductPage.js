import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductPage.css";
import Navbar from '../../navbar/Navbar'
import LowestNavBar from '../../navbar/bottomNavBar/LowestNavBar';
import BrandFilters from "../../filters/BrandWiseFilter.js";
import ProductPrice from "../../filters/PriceWiseFilter";
import Footer from 'src/components/footerSection/Footer';
import FinalProductCard from '../../cards/cardWithInfo/FinalProductCard';
import database from 'src/product_data/database';


const ProductPage = () => {
  const [productFiltered, setProductFiltered] = useState([]);
  const [storedProductFiltered, setStoredProductFiltered] = useState([]);
  const { labelName } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const[currentSelectedBrand, setCurrentSelectedBrand] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [selectedColorBrand, setSelectedColorBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState(labelName);
  const [selectedPrice, setSelectedPrice] = useState();
  const [productBasedOnPrice, setProductBasedOnPrice] = useState([]);

  

  // additional filter options (color brand, offer brand)
  const [colorBrands, setColorBrands] = useState([]);


 // initial filter by category
 useEffect(() => {
  const filteredProducts = database.filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase());
  setProductFiltered(filteredProducts);
  setStoredProductFiltered(filteredProducts);

  // get unique brand names for the current category
  const uniqueBrands = [...new Set(filteredProducts.map((product) => product.brand))];
  setAvailableBrands(uniqueBrands);

  // reset selected brand when category changes
  setSelectedBrand(null); 
  setSelectedColorBrand(null);
}, [labelName]);



  // update filter when category or brand changes
  useEffect(() => {

    if(selectedBrand){
      if(selectedBrand === "All"){
        setProductFiltered(storedProductFiltered);
        setColorBrands([]); // Clear color brands when All is selected
      }
      else{
        // get products of a selected brand
        const filteredProducts = storedProductFiltered.filter((product) => (selectedBrand ? product.brand.toLowerCase() === selectedBrand.toLowerCase() : true));
        setProductFiltered(filteredProducts);
        setCurrentSelectedBrand(filteredProducts);

        // get unique color brands for the selected brand
        const uniqueColorBrands = [...new Set(filteredProducts.flatMap((product) => product.colour))];
        setColorBrands(uniqueColorBrands);
      }
    }
}, [selectedBrand]);


  // search query
  useEffect(() => {
    const filteredProducts = database
      .filter((product) => product.productName.concat(product.discription).toLowerCase().includes(searchTerm.toLowerCase()));

    setProductFiltered(filteredProducts);
  }, [searchTerm]);


  // Handle brand filter change
  function handleBrandChange(event) {
    setSelectedBrand(event.target.checked ? event.target.value : null);
    setSelectedColorBrand(null);  // Reset color brand when brand changes
  }


  // Handle color brand filter change
function handleColorBrandChange(event) {
  const selectedColorBrand = event.target.checked ? event.target.value : null;
  setSelectedColorBrand(selectedColorBrand);

  // Update productFiltered based on selected color brand
  if (selectedBrand && selectedColorBrand !== "All") {
    const filteredProducts = database
      .filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase())
      .filter(
        (product) =>
          product.brand.toLowerCase() === selectedBrand.toLowerCase() &&
          (product.colour ?? []).includes(selectedColorBrand)
      );
    setProductFiltered(filteredProducts);
  } else if (selectedColorBrand === "All") {
    // show all products for the selected brand when All is selected for color
    setProductFiltered(currentSelectedBrand);
  } 
}

// handle product filter based on price
function handlePriceChange(event){
  const currentPrice = event.target.checked ? event.target.value : "0 - 1000000";
  setSelectedPrice(currentPrice);

   if (selectedPrice) {
    const productListingPrice = storedProductFiltered.filter(
      (item) => item.price >= parseInt(currentPrice.split(' - ')[0].replace('₹ ', '').replace(',', '')) &&
                  item.price <= parseInt(currentPrice.split(' - ')[1].replace('₹ ', '').replace(',', ''))
    );

    setProductBasedOnPrice(productListingPrice);
    setProductFiltered(productListingPrice);
  } else {
    // handle the case when no price range is selected.
    setProductBasedOnPrice([]);
  }
}
  
  return (
    <>
      <Navbar onSearchChange={setSearchTerm} onSearchTerm={searchTerm}/>
      <LowestNavBar />

      <main className='filter-product-description'>
        <div className='left-section'>
          <BrandFilters handleChange={handleBrandChange} availableBrands={[...availableBrands]} />
          {selectedBrand ?
          <BrandFilters handleChange={handleColorBrandChange} availableBrands={[...colorBrands]}/>
          : null}
          <ProductPrice handleChange={handlePriceChange} />
        </div>

        <div className='right-section'>
          <h1 className='right-section-result'>{storedProductFiltered.length == 0 ? "No result found" : "Results"}</h1>
          <div className='right-section-multiple-products'>

            {productFiltered.map((value) => {
              return <FinalProductCard key={value.id} productProp={value}/>
            })}

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductPage
