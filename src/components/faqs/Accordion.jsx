import SeeMore from '@components/seeMore/SeeMore'
import React, { useState } from 'react'

const Accordion = () => {
  return (
    <section className='relative z-20 overflow-hidden bg-white pb-12 pt-10 dark:bg-dark lg:pb-[50] border-t lg:px-0 px-4'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
              <span className='mb-2 block text-lg font-semibold text-primary'>FAQ</span>
              <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]'>
                Câu hỏi thường gặp
              </h2>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='Nếu như có câu hỏi hoặc không hài lòng về dịch vụ chúng tôi có thế khiếu nại với bộ phận nào?'
              text='Nếu quý khách hàng không hài lòng về dịch vụ cung cấp bởi công ty chúng tôi, quý khách hàng có thể liên hệ với bộ phận chăm sóc khách hàng chúng tôi luôn sẵn lòng hỗ trợ mọi thắc mắc hoặc phản ánh về dịch vụ.'
            />
            <AccordionItem
              header='Sau khi đặt mua dịch vụ thì quy trình thanh toán sẽ như thế nào?'
              text='Sau khi quý khách hàng đặt mua dịch vụ qua điện thoại, email hoặc thông qua bất kỳ một hình thức giao dịch hợp lệ nào khác thì quý khách hàng có thể thanh toán qua Internet Banking, thẻ ATM hoặc thanh toán tại văn phòng chúng tôi'
            />
            <AccordionItem
              header='Máy in UV có cần mực đặc biệt không?'
              text='Đúng vậy, máy in UV sử dụng loại mực chuyên dụng có khả năng khô nhanh dưới ánh sáng UV, giúp đảm bảo độ bền màu và khả năng bám dính tốt trên nhiều bề mặt.'
            />
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='Thời gian nhận được trả lời cho thắc mắc hoặc khiếu nại về dịch vụ là bao lâu?'
              text='Sau khi tiếp nhận thắc mắc hoặc khiếu nại của quý khách chúng tôi sẽ thực hiện việc xử lý yêu cầu trong vòng 24h.'
            />
            <AccordionItem
              header='Khách hàng có nhận được hóa đơn khi mua dịch vụ của chúng tôi?'
              text='Có. Tất cả các khách hàng đều nhận được hóa đơn giá trị giá tăng cho các dịch vụ cung cấp bởi công ty chúng tôi'
            />

            <AccordionItem
              header='Máy in UV có thể in trên bề mặt cong không?'
              text='Máy in UV phẳng thường chỉ in được trên bề mặt phẳng, nhưng có thể sử dụng giá đỡ hoặc công nghệ in 360 độ để in lên bề mặt cong như chai lọ, ly cốc.'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center  mt-2 pt-2'>
        <SeeMore linkRef={'/ho-tro-khach-hang/cau-hoi-thuong-gap'} />
      </div>

      <div className='absolute bottom-0 right-0 z-[-1]'>
        <svg width='1440' height='886' viewBox='0 0 1440 886' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            opacity='0.5'
            d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
            fill='url(#paint0_linear)'
          />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='1308.65'
              y1='1142.58'
              x2='602.827'
              y2='-418.681'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#3056D3' stop-opacity='0.36' />
              <stop offset='1' stop-color='#F5F2FD' stop-opacity='0' />
              <stop offset='1' stop-color='#F5F2FD' stop-opacity='0.096144' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Accordion

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    event.preventDefault()
    setActive(!active)
  }
  return (
    <div className='lg:mb-8 mb-4 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]'>
      <button className={`faq-btn flex w-full text-left`} onClick={() => handleToggle()}>
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5'>
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? 'rotate-180' : ''}`}
            width='17'
            height='10'
            viewBox='0 0 17 10'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
              fill=''
              stroke=''
            />
          </svg>
        </div>

        <div className='w-full'>
          <h4 className='mt-1 lg:text-primaryPrdName font-semibold text-dark dark:text-white'>{header}</h4>
        </div>
      </button>

      <div className={`pl-[62px] duration-200 ease-in-out ${active ? 'block' : 'hidden'}`}>
        <p className='py-3 lg:text-normal text-small leading-relaxed font-medium'>{text}</p>
      </div>
    </div>
  )
}
