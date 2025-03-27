import React from 'react'
// import IconTransport from '@assets/icons/user/IconTransport.svg'
// import IconSavingsDollar from '@assets/icons/user/IconSavingsDollar.svg'
// import Icon24Hours from '@assets/icons/user/Icon24Hours.svg'

import IconTransport from '@assets/icons/user/feature/truck.gif'
import IconSavingsDollar from '@assets/icons/user/feature/save-money.gif'
import Icon24Hours from '@assets/icons/user/feature/tech-support.gif'

export default function Features() {
  const dataCategory = [
    { id: 1, image: IconTransport, text: 'Vận chuyển nhanh chóng' },
    { id: 1, image: IconSavingsDollar, text: 'Tiết kiệm chi phí' },
    { id: 1, image: Icon24Hours, text: 'Hỗ trợ 24/7' },
  ]
  return (
    <div className='mt-2 lg:px-0 px-4 w-full bg-[#F7F7F1] py-10'>
      <div className='flex lg:flex-row flex-col items-center gap-4 justify-center'>
        {dataCategory.map((category, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center cursor-pointer shadow-md gap-4 border rounded-lg px-4 h-auto py-4 lg:w-[400px] w-[350px] bg-white hover:shadow-lg'
            >
              <img src={category.image} alt='image' className='lg:w-28 lg:h-28 w-24 h-24 object-contain' />
              <h4 className='font-semibold lg:text-largerPrdName text-textPrd uppercase'>{category.text}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}
