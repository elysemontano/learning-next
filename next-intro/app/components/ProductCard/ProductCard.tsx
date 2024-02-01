import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
    {/* <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'> */}
      <h2>Product</h2>
      <AddToCart />
    </div>
  )
}

export default ProductCard