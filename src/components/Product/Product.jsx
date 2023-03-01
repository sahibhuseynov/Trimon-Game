import React from 'react'
import './Product.scss'
import ProductsData from '../../assets/data/products'
const Product = () => {
  return (
    <div className='products__grid'>
        {
            ProductsData.map((product,index) => (
                <div key={index} className='product__box'>
                   <div className='product__box__img'> <img src={product.image} alt="" /></div >
                    <h5>{product.name}</h5>
                    <span>${product.price}.00</span>

                    <div className="product__add">
                        <button className="product__add__btn">ADD TO CART</button>
                    </div>
                </div> 
            ))
        }
    </div>
  )
}

export default Product