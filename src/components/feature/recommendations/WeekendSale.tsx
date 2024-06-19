import React from 'react'

import { fetchWeekendSaleProducts } from '@/api/resource/reccomendation'
import BigCard from '@/components/common/product/bigCard'
import { ProductType } from '@/types/product'

import WeekendTimeLeft from './WeekendTimeLeft'

export default async function WeekendSale() {
  const productList = await fetchWeekendSaleProducts()
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="text-headline3 ">주말특가</p>
      <WeekendTimeLeft />

      <div className="flex flex-col h-full w-full items-center gap-3 pt-2">
        {productList.map((product: ProductType) => (
          <div key={product.id} className="h-[269px] w-full flex flex-col items-center">
            <BigCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
