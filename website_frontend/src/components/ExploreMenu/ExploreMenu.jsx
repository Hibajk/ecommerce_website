import React from 'react'
import  './ExploreMenu.css'
import { products_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-products' id='explore-products'>
        <h1>Discover Products</h1>
        <p className='explore-products-text'>Unlock a World of Endless Possibilities with Apple's Cutting-Edge Technology. Elevate Your Productivity, Creativity, and Entertainment with Apple's Comprehensive Ecosystem</p>
        <div className="explore-products-list">
            {products_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className="explore-products-list-item">
                        <img className={category===item.product_name?"active":""} src={item.product_image} alt="" />
                        <p>{item.product_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu