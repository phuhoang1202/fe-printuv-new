import React from 'react'
import Culture from './Culture'

export default function AboutPage() {
  return (
    <div className='relative isolate overflow-hidden '>
      {/* Đường kẻ */}
      {/* <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
            width={200}
            height={200}
            x='100%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-gray-800/20'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect width='100%' height='100%' strokeWidth={0} fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)' />
      </svg> */}
      {/* bg nền */}
      <div
        className='absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
        aria-hidden='true'
      >
        <div
          className='aspect-[1108/632] w-[69.25rem] h-[400px]'
          style={{
            background: 'linear-gradient(to right, #80caff, #4f46e5)',
            opacity: 0.6,
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        ></div>
      </div>

      {/* Text */}
      <div className='lg:mt-24 mt-16 lg:px-0 px-2 pt-10 py-20 max-w-7xl mx-auto text-[#3B3B3B]'>
        <h1 className='lg:text-biggerName text-bigPrdName font-bold tracking-tight text-[#3B3B3B]'>
          CÔNG TY TNHH MỘT THÀNH VIÊN BIG COLOR VIỆT NAM
        </h1>
        <div className='w-full flex flex-col lg:flex-row gap-10 mt-4'>
          <div>
            {/* Phần nội dung chữ */}
            <img
              src='https://mayinuv.vn/wp-content/uploads/2019/10/gioi-thieu-cong-ty-bigcolor.jpg'
              alt='Giới thiệu công ty Big Color Việt Nam'
              className='rounded-xl shadow-lg w-full max-w-md float-left mr-6 mb-4'
            />
            <p className='lg:text-primaryPrdName text-normal leading-8 text-[#3B3B3B]'>
              Công ty TNHH một thành viên Big Color Việt Nam thành lập vào năm 2011 tại Số 24 ngõ 286 đường Giáp bát,
              phường Giáp bát quận Hoàng Mai, Hà Nội, Việt Nam. Hiện nay công ty đã có sự phân phối của chi nhánh chính
              tại 78/7 Nguyễn Thị Tú, P. Bình Hưng Hòa B, Quận Bình Tân. Với hơn 10 năm kinh nghiệm trong lĩnh vực cung
              cấp các loại máy in thế hệ đời đầu cho đến các dòng MÁY IN UV khổ lớn nhỏ.
            </p>
            <p className='mt-4 lg:text-primaryPrdName text-normal leading-8 text-[#3B3B3B]'>
              Chúng tôi hiện là đại lý chính thức của thương hiệu máy in FORTUNE tại Việt Nam với các dòng sản phẩm hiện
              đại nhưng có giá thành hợp lý. Chính sách{' '}
              <span className='font-semibold text-blue-400'>BẢO DƯỠNG MIỄN PHÍ – </span>
              <span className='font-semibold text-blue-400'>BẢO HÀNH TẬN NƠI</span> sẽ mang đến sự an tâm tuyệt đối cho
              khách hàng.
            </p>
            <p className='mt-4 lg:text-primaryPrdName text-normal leading-8 text-[#3B3B3B]'>
              Mang đến sự sáng tạo nghệ thuật đỉnh cao cùng thời đại 4.0 với các dòng sản phẩm có giá bán tốt nhất – giá
              thành hợp lí nhất – cùng chính sách bảo hành tuyệt đối để khách hàng luôn tin tưởng sử dụng các sản phẩm
              máy móc để tạo ra hiệu suất công việc cao nhất.
            </p>
          </div>
        </div>

        <Culture />
      </div>
    </div>
  )
}
