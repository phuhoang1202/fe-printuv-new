import Product from '@components/product/Product'
import React, { useEffect, useState } from 'react'
import { product } from '@services/user/product'
import { getUserInfor } from '@utils/auth'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'antd'

export default function BestProduct({ addToWishList }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [bestProducts, setBestProducts] = useState([])

  const fetchBestProducts = async () => {
    try {
      setIsLoading(true)
      const response = await product.getAllPrds(8, 2)
      setBestProducts(response.data.data.items)
    } catch (error) {
      console.error('Error fetching recommended products')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBestProducts()
  }, [])

  return (
    <div className='lg:py-20 py-10 md:py-10 bg-[#F7F7F1] lg:px-0 px-4'>
      <div className='lg:max-w-7xl w-full mx-auto'>
        <div className='font-bold lg:text-bigPrdName text-largerPrdName'>Sản phẩm hot</div>
        <span className='inline-block h-[2px] w-10 bg-[#F14646] mb-6' />

        <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-6 gap-4'>
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='flex flex-col lg:min-h-[400px] min-h-[50px] lg:gap-6 gap-4 mx-auto'>
                  <Skeleton.Image className='w-[162px] lg:h-[240px] rounded-lg flex-1' />
                  <div className='flex flex-col justify-between lg:w-[220px] w-44'>
                    <Skeleton active paragraph={{ rows: 3 }} />
                  </div>
                </div>
              ))
            : bestProducts?.map((item, index) => (
                <div key={index}>
                  <Product item={item} type={'best'} setBestProducts={setBestProducts} index={index} />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}
