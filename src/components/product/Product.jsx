import React, { useState, useEffect } from 'react'
import { Modal, Skeleton, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { getToken } from '@utils/auth'
import { useTranslation } from 'react-i18next'
import ImageError from '@assets/images/ImageError.svg'
import IconHeartBlack from '@assets/images/IconHeartBlack2.svg'
import IconHeartActive from '@assets/images/IconHeartActive.svg'

export default function Product({ item, type, index, addToWishList, setBestProducts, setDataCategory }) {
  const [loading, setLoading] = useState(true)
  const [unit, setUnit] = useState('KRW')

  // Modal navigate login
  const [openModal, setOpenModal] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleOk = () => {
    setConfirmLoading(true)

    setOpenModal(false)
    setConfirmLoading(false)

    navigate('/login')
  }
  const handleCancel = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    const getUnitLocal = JSON.parse(localStorage.getItem('exchangePrice')) || 'KRW'
    setUnit(getUnitLocal)
  }, [unit])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // if (loading) {
  //   return (
  //     <div className='flex items-center gap-4'>
  //       <Skeleton.Image className='w-full h-full' />
  //       <Skeleton active />
  //     </div>
  //   )
  // }

  return (
    <section className='flex justify-center items-center w-full max-w-3xl gap-6'>
      <article className='relative w-80 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-xl overflow-hidden group'>
        <div
          className='relative h-60 bg-cover bg-center transition-all duration-300 group-hover:scale-110'
          style={{
            backgroundImage: item.imageUrls?.length > 0 ? `url(${item.imageUrls[0]})` : 'none',
          }}
        ></div>

        <div className='absolute top-0 right-0 bottom-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4'>
          <div className='flex items-center justify-center'>
            <img src={IconHeartBlack} alt='icon' className='lg:w-7 lg:h-7 w-6 h-6' />
          </div>
        </div>

        <div className='p-4 mt-1'>
          <h3 className='text-lg font-semibold'>
            <Link to={`/product/${item.id}`}>
              <div className='font-medium lg:text-textPrd text-normal'>
                <Tooltip title={item.name} autoAdjustOverflow>
                  <div className='truncate text-[#3B3B3B]'>{item.name}</div>
                </Tooltip>
              </div>
            </Link>
          </h3>
          <Link to={`/product/${item.id}`}>
            <button className='w-full mt-4 p-2 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:bg-gray-100 active:bg-gray-200'>
              Xem chi tiết
            </button>
          </Link>
        </div>
      </article>
    </section>
  )
}
