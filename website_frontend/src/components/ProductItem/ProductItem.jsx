import React, { useContext } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const ProductItem = ({id,name,price,description,image}) => {

  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='product-item'>
      <div className="product-item-img-container">
        <img className="product-item-img" src={image} alt="" />
        {!cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.plus} alt="" />
          :<div className='product-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.minus} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.plusg} alt="" />
          </div>
        }
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="" />
        </div>
        <p className='product-item-description'>{description}</p>
        <p className='product-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default ProductItem