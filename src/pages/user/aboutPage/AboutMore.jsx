import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMore() {
  return (
    <section className=' relative '>
      <div className='absolute right-20 top-0 -z-10 transform-gpu blur-3xl '>
        <div
          className='w-20 h-[400px]'
          style={{
            background: 'linear-gradient(to right, #80caff, #4f46e5)',
            opacity: 0.6,
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        ></div>
      </div>

      <div className='container mx-auto py-16 px-2 lg:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:gap-8 gap-2'>
          <div className='max-w-lg'>
            <h2 className='lg:text-bigPrdName text-largerPrdName text-[#3B3B3B] font-semibold uppercase'>
              Về chúng tôi
            </h2>
            <p className='mt-4 text-[#3B3B3B] lg:text-primaryPrdName font-medium'>
              Công ty TNHH một thành viên Big Color Việt Nam thành lập vào năm 2011 tại Số 24 ngõ 286 đường Giáp bát,
              phường Giáp bát quận Hoàng Mai, Hà Nội, Việt Nam. Hiện nay công ty đã có sự phân phối của chi nhánh chính
              tại 78/7 Nguyễn Thị Tú, P. Bình Hưng Hòa B, Quận Bình Tân. Với hơn 10 năm kinh nghiệm trong lĩnh vực cung
              cấp các loại máy in thế hệ đời đầu cho đến các dòng MÁY IN UV khổ lớn nhỏ.
            </p>
            <div className='mt-8'>
              <Link to={'/ve-chung-toi'} className='text-blue-500 hover:text-blue-600 font-medium'>
                Xem thêm
                <span className='ml-2'>→</span>
              </Link>
            </div>
          </div>
          <div className='mt-12 md:mt-0'>
            <img
              src='https://mayinuv.vn/wp-content/uploads/2019/10/gioi-thieu-cong-ty-bigcolor.jpg'
              alt='About Us Image'
              className='object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
