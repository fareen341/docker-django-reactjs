import React from 'react'
import { CollectionHeader } from './CollectionChildrens/CollectionHeader'
import { NewArrivals } from './CollectionChildrens/NewArrivals'
import { SaleWatches } from './CollectionChildrens/SaleWatches'

export const Collection = () => {
  return (
    <div>
      <CollectionHeader />
      <SaleWatches />  
      <NewArrivals />
    </div>
  )
}
