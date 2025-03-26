import React from 'react'
import SeeMore from '@components/seeMore/SeeMore'
import Slider from 'react-slick'
import IconRight from '@assets/icons/user/IconRight.svg'
import IconLeft from '@assets/icons/user/IconLeft.svg'

export default function Article() {
  function SamplePrevArrow2(props) {
    const { onClick } = props
    return (
      <button
        className={` absolute top-1/2 -translate-y-1/2 -left-10 rounded-full !w-10 !h-10  cursor-pointer  bg-white flex items-center justify-center `}
        onClick={onClick}
      >
        <img src={IconLeft} alt='icon' className='w-full h-full object-cover rounded-full shadow-lg' />
      </button>
    )
  }

  function SampleNextArrow2(props) {
    const { className, onClick } = props
    return (
      <button
        className={` absolute top-1/2 -translate-y-1/2 -right-10 rounded-full !w-10 !h-10  cursor-pointer  bg-white flex items-center justify-center `}
        onClick={onClick}
      >
        <img src={IconRight} alt='icon' className='w-full h-full object-cover rounded-full shadow-lg' />
      </button>
    )
  }

  const newsData = [
    {
      id: 1,
      category: 'Kiến Thức',
      title: 'Công nghệ in UV có gì đặc biệt',
      author: 'Admin',
      date: '27/02/2025',
      image: 'https://bigcolor.vn/hinhanh/tintuc/cong-nghe-in-uv-co-gi-dac-biet.jpg',
    },
    {
      id: 2,
      category: 'Kiến Thức',
      title: 'Top 5 máy in UV bạn nên dùng',
      author: 'Admin',
      date: '03/03/2025',
      image: 'https://mayinuv.com.vn/wp-content/uploads/may-in-uv-cuon-kho-lon-3m2.jpg',
    },
    {
      id: 3,
      category: 'Kiến Thức',
      title: 'Đào tạo JDPAIN và vận hành máy cắt khắc CNC',
      author: 'Admin',
      date: '01/03/2025',
      image: 'https://bizweb.dktcdn.net/thumb/large/100/251/749/products/tooli-p.jpg?v=1630386063953',
    },

    {
      id: 4,
      category: 'Kiến Thức',
      title: 'Tìm hiểu các loại máy in UV',
      author: 'Admin',
      date: '03/03/2025',
      image: 'https://bigcolor.vn/hinhanh/tintuc/tim-hieu-cac-loai-may-in-uv.jpg',
    },
    {
      id: 5,
      category: 'Kiến Thức',
      title: 'Bigcolor Việt Nam chính thức trở thành đại lý độc quyền EZLETER tại Việt Nam',
      author: 'Admin',
      date: '26/02/2025',
      image:
        'https://bigcolor.vn/hinhanh/tintuc/bigcolor-viet-nam-chinh-thuc-tro-thanh-dai-ly-doc-quyen-ezleter-tai-viet-nam.jpg',
    },
  ]

  const settings2 = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow2 />,
    nextArrow: <SampleNextArrow2 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id='content' className=' dark:bg-dark py-8 lg:py-18 border-t lg:px-0 px-4'>
      <div className='container mx-auto '>
        <div className='w-full px-4'>
          <div className='mx-auto mb-[60px] max-w-[520px] text-center'>
            <h2 className='mb-3 md:text-largerPrdName text-textPrd font-bold leading-[1.2] text-[#3B3B3B] dark:text-white lg:text-[40px]'>
              Tin tức và sự kiện
            </h2>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto lg:px-0 px-14'>
        <div>
          <Slider {...settings2}>
            {newsData.map((banner, i) => (
              <section className='lg:px-2' key={i}>
                <article className='relative border border-[#EEEBFF] shadow-lg rounded-xl overflow-hidden group'>
                  <div
                    className='relative h-[300px] bg-cover bg-center transition-all duration-300 group-hover:scale-110'
                    style={{
                      backgroundImage: banner.image?.length > 0 ? `url(${banner.image})` : 'none',
                    }}
                  >
                    {/* Nội dung */}
                    <div className='font-medium text-white absolute top-4 left-4 z-10 text-small bg-black/50 backdrop-blur-sm p-2 rounded-md'>
                      {banner.category}
                    </div>

                    <div
                      className='absolute w-full bg-black/50 backdrop-blur-sm bottom-0 flex items-center justify-between py-2 px-8 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-small'
                    >
                      <div className='font-medium text-white'>{banner.author}</div>
                      <div className='font-medium text-white'>{banner.date}</div>
                    </div>
                  </div>

                  <div className='p-4 mt-2 bg-white'>
                    <div className='h-16'>
                      <div className='font-semibold text-primaryPrdName line-clamp-2'>{banner.title}</div>
                    </div>

                    {/* <p className='text-sm font-medium text-[#37383C99] mt-3'>{banner.content}</p> */}

                    <div className='flex justify-between items-end mt-2'>
                      <button className='font-medium text-sm px-5 py-2 border border-[#70737C38] rounded-lg hover:bg-[#37383C] hover:text-white transition-opacity duration-200'>
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </article>
              </section>
            ))}
          </Slider>
        </div>
      </div>

      {/* <div className='lg:max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-0 px-4'>
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className={` relative rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 cursor-pointer ${
              index === 0 || index === 3 || index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <img src={news.image} alt={news.title} className='w-full h-80 object-cover' />
            <div className='p-2 flex flex-col h-auto'>
              <span className='px-3 py-2 text-sm font-semibold rounded-full'>{news.category}</span>
              <h3 className='mt-1 mb-8 text-lg font-semibold text-[#3B3B3B] transition hover:opacity-75'>
                {news.title}
              </h3>
              <p className='absolute bottom-2 mt-2 text-[#3B3B3B] transition hover:opacity-75 text-sm'>
                {news.author} | {news.date}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className='flex justify-center w-full mt-2 pt-2'>
        <SeeMore />
      </div>
    </section>
  )
}
