import React from 'react'
import { ProductList } from './ProductChildrens/ProductList'
import { SearchBar } from './ProductChildrens/SearchBar'
import { SideFilter } from './ProductChildrens/SideFilter'

export const Product = () => {
  return (
    <div>
      <SearchBar />
      
      
      <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
            <SideFilter />
            </div>
            <div className='col-lg-8'>
            <ProductList />
            </div>
          </div>
      </div>
    </div>
  )
}
