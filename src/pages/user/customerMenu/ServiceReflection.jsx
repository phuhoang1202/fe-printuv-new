import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceReflection() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-largerPrdName font-bold uppercase'>Phản ánh dịch vụ</h3>
      <p className='font-medium py-2'>
        Nếu bạn có bất kỳ phản hồi nào về chất lượng dịch vụ, vui lòng gửi phản ánh để chúng tôi có thể cải thiện tốt
        hơn.{' '}
        <Link to='/phan-anh-dich-vu' className='text-blue-500 underline'>
          tại đây
        </Link>
      </p>
    </div>
  )
}
