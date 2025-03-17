import React from 'react'

export default function Support11() {
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
      address: '78/7 Nguyễn Thị Tú, P. Bình Hưng Hòa B, Quận Bình Tân',
      phoneNumber: '0286.286.6686 - 0935 389 988',
      email: 'bigcolorsaigon@gmail.com',
    },
  ]

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-largerPrdName font-bold uppercase'>Hỗ trợ 1:1</h3>
      <p className='font-medium py-2'>
        Chúng tôi cung cấp dịch vụ hỗ trợ trực tiếp 1:1 để giải quyết mọi thắc mắc của bạn một cách nhanh chóng và hiệu
        quả.
      </p>
      <div className='grid grid-cols-1 gap-4 w-full'>
        {addressCompany.map((office) => (
          <div key={office.id} className='p-4 border rounded-lg bg-gray-100 shadow-sm'>
            <h3 className='text-lg font-semibold '>{office.office}</h3>
            <p className='font-medium'>
              <span className='font-semibold'>Địa chỉ:</span> {office.address}
            </p>
            <p className='font-medium'>
              <span className='font-semibold'>Điện thoại:</span> {office.phoneNumber}
            </p>
            <p className='font-medium'>
              <span className='font-semibold'>Email:</span> {office.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
