import React from 'react'
import 'animate.css'
import { useNavigate } from 'react-router-dom'

const SeeMore = ({ linkRef }) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center w-full mt-4'>
      <div
        className='hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-bold py-2 px-4 text-[#808080] hover:text-[#3B3B3B] flex flex-col justify-center items-center bg-[#F8F8F8] hover:bg-[#EFEFEF] rounded-lg  max-w-[300px] w-full cursor-pointer text-normal h-11 transition-all'
        onClick={() => navigate(`${linkRef}`)}
      >
        Xem thêm
      </div>
    </div>
  )
}

export default SeeMore
