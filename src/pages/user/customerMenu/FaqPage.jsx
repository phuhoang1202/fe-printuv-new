import React from 'react'

export default function FaqPage() {
  const faqData = [
    {
      id: 1,
      question: 'Nếu như có câu hỏi hoặc không hài lòng về dịch vụ chúng tôi có thế khiếu nại với bộ phận nào?',
      answer:
        'Nếu quý khách hàng không hài lòng về dịch vụ cung cấp bởi công ty chúng tôi, quý khách hàng có thể liên hệ với bộ phận chăm sóc khách hàng chúng tôi luôn sẵn lòng hỗ trợ mọi thắc mắc hoặc phản ánh về dịch vụ.',
    },
    {
      id: 2,
      question: 'Thời gian nhận được trả lời cho thắc mắc hoặc khiếu nại về dịch vụ là bao lâu?',
      answer:
        'Sau khi tiếp nhận thắc mắc hoặc khiếu nại của quý khách chúng tôi sẽ thực hiện việc xử lý yêu cầu trong vòng 24h.',
    },
    {
      id: 3,
      question: 'Khách hàng có nhận được hóa đơn khi mua dịch vụ của chúng tôi?',
      answer:
        'Có. Tất cả các khách hàng đều nhận được hóa đơn giá trị giá tăng cho các dịch vụ cung cấp bởi công ty chúng tôi',
    },
    {
      id: 4,
      question: 'Sau khi đặt mua dịch vụ thì quy trình thanh toán sẽ như thế nào?',
      answer:
        'Sau khi quý khách hàng đặt mua dịch vụ qua điện thoại, email hoặc thông qua bất kỳ một hình thức giao dịch hợp lệ nào khác thì quý khách hàng có thể thanh toán qua Internet Banking, thẻ ATM hoặc thanh toán tại văn phòng chúng tôi',
    },
    {
      id: 5,
      question: 'Máy in UV có những loại nào?',
      answer:
        'Có nhiều loại máy in UV như máy in phẳng UV, máy in cuộn UV (UV Roll to Roll), máy in UV Hybrid (kết hợp giữa phẳng và cuộn) phù hợp với các nhu cầu in ấn khác nhau.',
    },
    {
      id: 6,
      question: 'Máy in UV có cần mực đặc biệt không?',
      answer:
        'Đúng vậy, máy in UV sử dụng loại mực chuyên dụng có khả năng khô nhanh dưới ánh sáng UV, giúp đảm bảo độ bền màu và khả năng bám dính tốt trên nhiều bề mặt.',
    },
    {
      id: 7,
      question: 'Máy in UV có thể in trên bề mặt cong không?',
      answer:
        'Máy in UV phẳng thường chỉ in được trên bề mặt phẳng, nhưng có thể sử dụng giá đỡ hoặc công nghệ in 360 độ để in lên bề mặt cong như chai lọ, ly cốc.',
    },
    {
      id: 8,
      question: 'Máy in UV có cần hệ thống thông gió đặc biệt không?',
      answer:
        'Máy in UV phát ra ozone trong quá trình in, vì vậy nên đặt máy trong không gian thông thoáng hoặc sử dụng hệ thống hút khí để đảm bảo an toàn.',
    },
    {
      id: 9,
      question: 'Máy in UV hoạt động như thế nào?',
      answer:
        'Máy in UV sử dụng công nghệ mực UV và đèn UV LED để làm khô mực ngay lập tức khi in lên bề mặt vật liệu, giúp hình ảnh sắc nét và bền màu.',
    },
    {
      id: 10,
      question: 'Máy in UV có thể in trên những vật liệu nào?',
      answer:
        'Máy in UV có thể in trên nhiều loại vật liệu như nhựa, kính, gỗ, kim loại, da, gốm sứ, và cả vải với chất lượng cao.',
    },
    {
      id: 11,
      question: 'Mực UV có độc hại không?',
      answer:
        'Mực UV hiện đại thường thân thiện với môi trường và ít gây hại, nhưng vẫn cần sử dụng trong không gian thông thoáng và tránh tiếp xúc trực tiếp.',
    },
    {
      id: 12,
      question: 'Máy in UV có cần bảo trì thường xuyên không?',
      answer:
        'Có, máy in UV cần được vệ sinh định kỳ, đặc biệt là đầu in, hệ thống cung cấp mực, và đèn UV để đảm bảo hoạt động ổn định và tuổi thọ lâu dài.',
    },
    {
      id: 13,
      question: 'Tốc độ in của máy in UV có nhanh không?',
      answer:
        'Tốc độ in của máy in UV phụ thuộc vào model và chế độ in, nhưng thường nhanh hơn các phương pháp in truyền thống do quá trình sấy khô tức thì.',
    },
    {
      id: 14,
      question: 'Giá thành của máy in UV là bao nhiêu?',
      answer:
        'Giá của máy in UV dao động từ vài chục triệu đến vài trăm triệu đồng tùy vào kích thước, công suất và tính năng.',
    },
  ]

  return (
    <div className='relative w-full ring-gray-900/5 '>
      <div className='px-5'>
        <div className='flex flex-col items-center'>
          <h3 className='text-largerPrdName font-bold uppercase'>Câu hỏi thường gặp</h3>
          {/* <p className=''>Frequenty asked questions</p> */}
        </div>

        <div className='mx-auto mt-2 grid divide-y divide-neutral-200'>
          {faqData.map((faq) => (
            <div key={faq.id} className='py-5'>
              <details className='group'>
                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                  <span>{faq.question}</span>
                  <span className='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height={24}
                      shapeRendering='geometricPrecision'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      width={24}
                    >
                      <path d='M6 9l6 6 6-6' />
                    </svg>
                  </span>
                </summary>
                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
