import React from 'react'
import './TopSellingProducts.css';
import LineComponent from '../LineComponent/LineComponent';
import SellingProductCard from '../SellingProductCard/SellingProductCard';


const TopSellingProducts = () => {
  return (
    <><div className='mt-10'>
      <LineComponent text='Top Selling Products' />
    </div>
    
    <div className='mt-10'>
      

    <SellingProductCard
  
  />
      </div></>
  )
}

export default TopSellingProducts