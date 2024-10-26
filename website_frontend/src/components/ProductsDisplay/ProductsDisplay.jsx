import React, {useContext} from 'react'
import './ProductsDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'


const ProductsDisplay = ({category}) => {

    const {product_list} = useContext(StoreContext)

  return (
    <div className="product-display" id="product-display">
        <h2>Best selling Apple products</h2>
        <div className="product-display-list">
            {product_list.map((item,index)=>{
                if (category==="All" || category===item.category) {
                    return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default ProductsDisplay