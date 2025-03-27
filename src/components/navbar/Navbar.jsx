import { useState } from 'react'
import { Menu, Drawer, Input, Button, Tooltip } from 'antd'
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import iconSearch from '@assets/images/IconSearch.svg'
import LogoNoBg from '@assets/images/Logo/LogoNoBg.png'
import IconHeart from '@assets/images/IconHeart.svg'
import IconHeartActive from '@assets/images/IconHeartActive.svg'
import IconUser from '@assets/images/IconUser.svg'
import IconFavourite from '@assets/images/IconFavourite.svg'
import IconCart from '@assets/images/IconCart.svg'
import IconDot from '@assets/images/IconDot.svg'

const items = [
  { key: 'all-product', label: 'Tất cả sản phẩm', href: '/tat-ca-san-pham' },
  { key: 'news-page', label: 'Bài viết', href: '/bai-viet' },
  {
    key: 'policy',
    label: 'Chính sách',
    children: [
      { key: 'terms', label: 'Điều khoản sử dụng', href: '/chinh-sach/dieu-khoan-su-dung' },
      { key: 'payment', label: 'Phương thức thanh toán', href: '/chinh-sach/phuong-thuc-thanh-toan' },
      { key: 'shipping', label: 'Chính sách vận chuyển', href: '/chinh-sach/chinh-sach-van-chuyen' },
      { key: 'warranty', label: 'Chính sách bảo hành', href: '/chinh-sach/chinh-sach-bao-hanh' },
      { key: 'return', label: 'Chính sách đổi trả', href: '/chinh-sach/chinh-sach-doi-tra' },
    ],
  },
  {
    key: 'support',
    label: 'Hỗ trợ khách hàng',
    children: [
      { key: 'faq', label: 'Câu hỏi thường gặp', href: '/ho-tro-khach-hang/cau-hoi-thuong-gap' },
      { key: 'support-1-1', label: 'Hỗ trợ 1:1', href: '/ho-tro-khach-hang/ho-tro-1-1' },
      { key: 'service-feedback', label: 'Phản ánh dịch vụ', href: '/ho-tro-khach-hang/phan-anh-dich-vu' },
    ],
  },
  { key: 'about', label: 'Về chúng tôi', href: '/ve-chung-toi' },
  { key: 'contact', label: 'Liên hệ', href: '/lien-he' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const [valueSearch, setValueSearch] = useState('')

  let getInfoUser = ''

  return (
    <nav className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
      <div className=' mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to={'/'} className='flex items-center gap-2'>
            <img src={LogoNoBg} alt='logo' className='header-logo w-12' />
            <strong className='lg:text-[24px] font-bold text-textPrd uppercase text-logo'>BigColor</strong>
          </Link>

          {/* Menu Desktop */}
          <div className='hidden md:flex flex-1 justify-center w-full'>
            <Menu
              mode='horizontal'
              className='lg:text-primaryPrdName text-normal border-none shadow-none'
              items={items.map((item) => ({
                key: item.key,
                label: item.children ? (
                  item.label
                ) : (
                  <Link to={item.href} className='lg:text-primaryPrdName text-normal'>
                    {item.label}
                  </Link>
                ),
                children: item.children?.map((subItem) => ({
                  key: subItem.key,
                  label: (
                    <Link to={subItem.href} className='lg:text-[17px] text-normal'>
                      {subItem.label}
                    </Link>
                  ),
                })),
              }))}
            />
          </div>

          {/* Search & Login/Register */}
          <div className='hidden md:flex items-center gap-2'>
            {/* <div>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} />
            </div> */}
            <Tooltip placement='top' title={'Mua hàng'}>
              <div className='relative'>
                <img src={IconCart} alt='icon' />
                <img src={IconDot} alt='icon' className='absolute top-2.5 right-2' />
              </div>
            </Tooltip>
            <Tooltip placement='top' title={'Yêu thích'}>
              <div className='relative'>
                <img src={IconFavourite} alt='icon' />
                <img src={IconDot} alt='icon' className='absolute top-2.5 right-2' />
              </div>
            </Tooltip>
            <Tooltip placement='top' title={'Người dùng'}>
              <div
                className='cursor-pointer rounded-full h-10 w-10'
                onMouseEnter={() => setIsUserHovered(true)}
                onMouseLeave={() => setIsUserHovered(false)}
                onClick={() => (getInfoUser ? navigate('/account/change-information') : navigate('/login'))}
              >
                <img
                  src={
                    getInfoUser && getInfoUser.img
                      ? `${c.DOMAIN_AVATAR}${getInfoUser.img}?access_token=${token}`
                      : IconUser
                  }
                  alt='icon'
                  loading='lazy'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
            </Tooltip>
          </div>

          {/* Menu Mobile */}
          <div className='md:hidden'>
            <MenuOutlined onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      <Drawer title='Menu' placement='left' onClose={() => setOpen(false)} open={open}>
        <Menu
          mode='inline'
          className='text-normal font-medium'
          items={items.map((item) => ({
            key: item.key,
            label: item.children ? (
              item.label
            ) : (
              <Link to={item.href} className='text-normal font-medium'>
                {item.label}
              </Link>
            ),
            children: item.children?.map((sub) => ({
              key: sub.key,
              label: (
                <Link to={sub.href} className='text-normal font-normal'>
                  {sub.label}
                </Link>
              ),
            })),
          }))}
        />
      </Drawer>
    </nav>
  )
}
