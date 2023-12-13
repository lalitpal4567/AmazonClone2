import React, { useState } from 'react'
import "./MultiCardSelection.css"


const MultiCardSelection = ({imgProp}) => {
  const [selectedImage, setImage] = useState(imgProp.images.imgUrl1);

  return (
    <div className='main-container-img-selection'>
        <div className='inner-container-img-selection'>
          <div className='img-box-selection'><img src={imgProp.images.imgUrl2} onMouseEnter={(e)=>setImage(imgProp.images.imgUrl2)}/></div>
          <div className='img-box-selection'><img src={imgProp.images.imgUrl3} onMouseEnter={(e)=>setImage(imgProp.images.imgUrl3)}/></div>
          <div className='img-box-selection'><img src={imgProp.images.imgUrl4} onMouseEnter={(e)=>setImage(imgProp.images.imgUrl4)}/></div>
          <div className='img-box-selection'><img src={imgProp.images.imgUrl5} onMouseEnter={(e)=>setImage(imgProp.images.imgUrl5)}/></div>
          <div className='img-box-selection'><img src={imgProp.images.imgUrl6} onMouseEnter={(e)=>setImage(imgProp.images.imgUrl6)}/></div>
        </div>
        <div className='selected-img-container'>
          <img className='selected-img' src={selectedImage}/>
        </div>
    </div>
  )
}

export default MultiCardSelection



















































































































// const MultiCardSelection = () => {
//   const [currentImage, setImage] = useState(image);
//   const setPhoto = (event)=>{
//       setImage(event);
//   }
// return (
//   <div>
//     <div>
//       <img src={currentImage}></img>
//     </div>
//     <div className='multiimages'>
//       <img src={image4} onClick={(event) => setPhoto(image4)}/>
//       <img src={image3} onClick={(events) => setPhoto(image3)}/>
//       <img src={image} onClick={(events) => setPhoto(image)}/>
//     </div>
//   </div>
// )
// }