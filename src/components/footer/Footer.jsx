import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoNoBg from '@assets/images/Logo/LogoNoBg.png'
import bgFooter from '@assets/images/users/bgFooter.png'

export default function Footer() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
    }, 60000)
  }, [time])

  const addressCompany = [
    {
      id: 1,
      office: 'Văn phòng tại Hà Nội',
      address: 'Số 84 Giáp Bát - Q. Hoàng Mai - TP. Hà Nội',
      phoneNumber: '0246.668.0246 - 0949 58 11 58',
      email: 'bigcoloradv@gmail.com',
    },
    {
      id: 2,
      office: 'Văn phòng tại Đà Nẵng',
      address: '172 Lý Thái Tông - Q. Thanh Khê - Tp Đà Nẵng',
      phoneNumber: '0966161373',
      email: 'bigcoloradv@gmail.com',
    },
    {
      id: 3,
      office: 'Văn phòng tại Sài Gòn',
      address: '78/7 Nguyễn Thị Tú.P Bình Hưng Hòa B,Quận Bình Tân',
      phoneNumber: '0286.286.6686 - 0935389988',
      email: 'bigcolorsaigon@gmail.com',
    },
  ]

  const dataFooter = [
    {
      id: 1,
      title: 'Thông tin',
      content: [
        {
          id: 1,
          subContent: 'Về Chúng tôi',
          linkHref: '/ve-chung-toi',
        },
        // {
        //   id: 2,
        //   subContent: 'Thông tin tuyển dụng',
        //   linkHref: '/thong-tin-tuyen-dung',
        // },
        {
          id: 3,
          subContent: 'Liên hệ',
          linkHref: '/lien-he',
        },
      ],
    },

    {
      id: 2,
      title: 'Chính sách',
      content: [
        {
          id: 1,
          subContent: 'Điều khoản sử dụng',
          linkHref: '/chinh-sach/dieu-khoan-su-dung',
        },
        {
          id: 2,
          subContent: 'Phương thức thanh toán',
          linkHref: '/chinh-sach/phuong-thuc-thanh-toan',
        },
        {
          id: 3,
          subContent: 'Chính sách vận chuyển',
          linkHref: '/chinh-sach/chinh-sach-van-chuyen',
        },
        {
          id: 4,
          subContent: 'Chính sách bảo hành',
          linkHref: '/chinh-sach/chinh-sach-bao-hanh',
        },
        {
          id: 5,
          subContent: 'Chính sách đổi trả',
          linkHref: '/chinh-sach/chinh-sach-doi-tra',
        },
      ],
    },

    {
      id: 3,
      title: 'Hỗ trợ',
      content: [
        {
          id: 1,
          subContent: 'Câu hỏi thường gặp',
          linkHref: '/ho-tro-khach-hang/cau-hoi-thuong-gap',
        },
        {
          id: 2,
          subContent: 'Hỗ trợ 1:1',
          linkHref: '/ho-tro-khach-hang/ho-tro-1-1',
        },
        {
          id: 3,
          subContent: 'Phản ánh dịch vụ',
          linkHref: '/ho-tro-khach-hang/phan-anh-dich-vu',
        },
      ],
    },
  ]

  return (
    <div className='relative lg:mt-8 border-t text-[#3B3B3B] py-4 lg:px-0 px-4'>
      <div className='max-w-7xl w-full mx-auto lg:my-6 my-4 '>
        {/* Chia layout thành grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Phần đầu (Chiếm 2 phần) */}
          <div className='col-span-1 flex flex-col md:flex-row items-center md:items-start gap-4 max-w-2xl text-center md:text-left'>
            <div className='w-20'>
              <img src={LogoNoBg} alt='photo' className='w-full h-full object-cover' />
            </div>
            <div>
              <div>
                <div className='font-bold lg:text-bigPrdName text-largerPrdName uppercase text-[#3B3B3B]'>
                  <strong className='text-logo'>bigcolor việt nam</strong>
                </div>
                <p className='text-[#3B3B3B] font-semibold'>
                  Bigcolor Việt Nam cung cấp máy in UV chất lượng cao, đáp ứng mọi nhu cầu in ấn chuyên nghiệp.
                </p>
              </div>
              <ul className='mt-4'>
                {addressCompany.map((infor, index) => (
                  <li key={index} className='mt-4'>
                    <strong>{infor.office}:</strong>
                    <div className='flex flex-col ml-4'>
                      <div className='flex items-center gap-1'>
                        <i className='fa-solid fa-location-dot lg:text-small text-[12px] w-4'></i>
                        <span className='font-medium lg:text-normal text-small lg:w-auto w-12'>Địa chỉ: </span>
                        <div className='font-medium line-clamp-1 lg:w-auto w-72 lg:text-normal text-small'>
                          {infor.address}
                        </div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <i className='fa-solid fa-phone lg:text-small text-[12px] w-4'></i>
                        <span className='font-medium lg:text-normal text-small'>SĐT: </span>
                        <div className='font-medium lg:text-normal text-small'>{infor.phoneNumber}</div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <i className='fa-solid fa-envelope lg:text-small text-[12px] w-4'></i>
                        <span className='font-medium lg:text-normal text-small'>Email: </span>
                        <div className='font-medium lg:text-normal text-small'>{infor.email}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Các cột thông tin (Chiếm 1 phần mỗi cột) */}
          <div className='grid grid-cols-3'>
            {dataFooter.map((infor, index) => (
              <div key={index} className='text-center'>
                <div>
                  <strong className='uppercase lg:text-normal '>{infor.title}</strong>
                </div>
                <div className='flex flex-col items-center gap-2 lg:mt-4 mt-2'>
                  {infor.content.map((el, idx) => (
                    <Link
                      key={idx}
                      to={el.linkHref}
                      className='font-medium text-[#3B3B3B] transition hover:opacity-75 lg:text-normal text-small'
                    >
                      {el.subContent}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
