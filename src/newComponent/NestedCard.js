import primg from "../components/images/ipodImages/ipod_oppo_air32.png";
import ProductPage from './ProductCardPage/ProductPage';

const NestedCard = () => {
  const CustomCard = () => { return(
    <div className='card'>
      <a href="#">
        <div className="card-container">
          <div className="image-container">
            <img src={primg} />
          </div>
          <div className='product-info'>
            <p>Newly launched turke buds Clarity 5 true Wireless in ear EarBuds, 5Mic adv.ENC. 80H playtime. 35m Ultra- low</p>
            <p id="message">Deal of the Day</p>
            <div className='price'>
              <sup><span>$</span></sup>
              <p id="product-price"><span>1499/-</span></p>
            </div>
          </div>
        </div>
      </a>
    </div>)

  }

  return (
    <>
      <ProductPage>
        <CustomCard />
      </ProductPage>
    </>
  )

}
export default NestedCard;
