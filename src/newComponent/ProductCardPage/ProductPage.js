import React from 'react'
import BrandWiseFilter from 'src/components/filters/BrandWiseFilter'
import Navbar from 'src/components/navbar/Navbar'
// import LowestNavBar from 'src/components/navbar/bottomNavBar/LowestNavBar'
// import mobile from "../../components/images/mobileImages/samsung_Galaxy_M34_5G_Waterfall_Blue.png";
// import Card from "../../newComponent/Card";
// import NestedCard from '../NestedCard';


let brands = [
    {
      samsung: "Samsung",
      oppo: "Oppo",
      realme: "Realme",
      vivo: "Vivo"
    }
  ]
const ProductPage = ({children}) => {
  return (
    <>
    <Navbar/>
    {/* <LowestNavBar/> */}
    <section className='filter-product-description'>
        <div className='product-filter'>
          <BrandWiseFilter brandName={brands}/>

        </div>

        <section>
          <h1 style={{ marginLeft: 20, marginTop: 10 }}>Results</h1>
          <div className='product-and-description'>
            {console.log(children)}
            {children}
          </div>
        </section>
      </section>
      {/* <LowerFooter/> */}
    </>
  )
}

export default ProductPage
