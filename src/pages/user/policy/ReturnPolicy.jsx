import React from 'react'

export default function ReturnPolicy() {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-largerPrdName font-bold uppercase'>Chính sách đổi trả</h2>
        {/* Chương 1 */}
        <div className='mt-2'>
          {/* 1 */}
          <div className='mt-2'>
            <h3 className='text-textPrd font-bold uppercase'>1. Các trường hợp được đổi hàng</h3>

            <div className='mt-2 text-small'>
              <p className='text-small'>
                <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong> thực hiện đổi hàng cho quý khách, nhưng
                không hoàn lại phí vận chuyển hoặc lệ phí giao hàng đối với những trường hợp sau:
              </p>
              <ol className='list-disc pl-6 flex flex-col gap-2 mt-2 text-small'>
                <li>Không đúng chủng loại, mẫu mã như quý khách hàng đặt hàng</li>
                <li>Không đủ số lượng, không đủ bộ như trong đơn hàng</li>
                <li>Tình trạng bên ngoài bị ảnh hưởng như bong tróc, bể vỡ xảy ra trong quý trình vận chuyển</li>
                <li>
                  Không đạt chất lượng như: quá hạn sử dụng, hết bảo hành, không vận hành được, hỏng hóc khách quan
                  trong phạm vi bảo hành của nhà cung cấp, nhà sản xuất, ...
                </li>
              </ol>

              <p className='text-small mt-2'>
                Quý khách vui lòng kiểm tra hàng hóa và ký nhận tình trạng với nhân viên giao hàng ngay khi nhận được
                hàng
              </p>

              <p className='text-small mt-2'>
                Khi phát hiện một trong các trường hợp trên, quý khách có thể trao đổi trực tiếp với Nhân viên giao hàng
                hoặc phản hồi cho chúng tôi trong vòng 04h đến 08h theo số điện thoại tại phần liên hệ
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='mt-2'>
            <h3 className='text-textPrd font-bold uppercase'>2. Các trường hợp không được đổi trả hàng</h3>

            <div className='mt-2 text-small'>
              <ol className='list-disc pl-6 flex flex-col gap-2 mt-2 text-small'>
                <li>Quý khách muốn thay đổi chủng loại, mẫu mã nhưng không thông báo trước.</li>
                <li>Quý khách tự làm ảnh hưởng tình trạng bên ngoài như rách bao bì, bong tróc, bể vỡ, …</li>
                <li>Quý khách vận hành không đúng chỉ dẫn gây hỏng hóc hàng hóa.</li>
                <li>
                  Quý khách không thực hiện các quy định theo yêu cầu để được hưởng chế độ bảo hành (ví dụ không gửi
                  phiếu bảo hành về đúng nơi quy định trong thời gian quy định).
                </li>
                <li>
                  Quý khách đã kiểm tra và ký nhận tình trạng hàng hóa nhưng không có phản hồi trong vòng 04h đến 08h kể
                  từ lúc ký nhận hàng.
                </li>
              </ol>
            </div>
          </div>
          {/* 3 */}
          <div className='mt-2'>
            <h3 className='text-textPrd font-bold uppercase'>3. Lưu ý khi đổi hàng</h3>

            <div className='mt-2 text-small'>
              <p className='text-small'>
                Quy trình xử lý thủ tục đổi hoặc trả hàng được thực hiện trong vòng hai (02) ngày tính từ ngày nhận đủ
                thông tin, sản phẩm và chứng từ từ khách hàng.
              </p>
              <p className='text-small mt-2'>
                Việc đổi hàng, sửa chữa sẽ được thực hiện theo đúng quy định của nhà cung cấp, nhà sản xuất, hoặc nhà
                bảo hành được ủy quyền của nhà cung cấp, nhà sản xuất đó.
              </p>
              <p className='text-small mt-2'>
                Trong trường hợp sản phẩm thuộc các trường hợp được đổi hàng như mục 1 và Quý khách đã phản hồi cho{' '}
                <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong> trong vòng 04h đến 08h theo quy định, Quý
                khách phải mang sản phẩm đến cửa hàng của <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong>{' '}
                trong vòng 02 ngày kể từ khi nhận hàng để thực hiện thủ tục đổi hàng.
              </p>
              <p className='text-small mt-2'>Không áp dụng đổi hàng với các sản phẩm sau:</p>

              <ol className='list-disc pl-6 flex flex-col gap-2 mt-2 text-small'>
                <li>Sản phẩm của thương hiệu khác.</li>
                <li>Phụ kiện, linh kiện.</li>
                <li>Quà tặng đi kèm sản phẩm khi mua hàng.</li>
              </ol>
            </div>
          </div>
          {/* 4 */}
          <div className='mt-2'>
            <h3 className='text-textPrd font-bold uppercase'>4. Yêu cầu đối với sản phẩm khi đổi hàng:</h3>

            <div className='mt-2 text-small'>
              <ol className='list-disc pl-6 flex flex-col gap-2 mt-2 text-small'>
                <li>Sản phẩm chưa kích hoạt bảo hành.</li>
                <li>Sản phẩm chưa qua sử dụng.</li>
                <li>
                  Sản phẩm còn đầy đủ các phụ kiện, hộp đựng và sách hướng dẫn, CD phần mềm sử dụng đi kèm (nếu có).
                </li>
                <li>Phiếu bảo hành, tem bảo hành còn nguyên vẹn.</li>
              </ol>
            </div>
          </div>
          {/* 5 */}
          <div className='mt-2'>
            <h3 className='text-textPrd font-bold uppercase'>5. Quy trình thực hiện thủ tục đổi hàng</h3>

            <div className='mt-2 text-small'>
              <p className='text-small'>Quý khách hàng cần thực hiện các bước sau:</p>

              <ol className='list-decimal pl-6 flex flex-col gap-2 mt-2 text-small'>
                <li>
                  Kiểm tra tình trạng sản phẩm và liên hệ với{' '}
                  <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong> và làm theo hướng dẫn, trong vòng 08h sau
                  khi nhận hàng.
                </li>
                <li>
                  <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong> xác nhận và Quý khách đóng gói sản phẩm
                  bao gồm tất cả hóa đơn chứng từ đi kèm thông báo cho SBC để tới thu hồi đổi hàng.
                </li>
                <li>
                  <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong> nhận hàng và tiến hành các thủ tục đổi
                  hàng/ bảo hành/ sửa chữa (tùy vào tình trạng sản phẩm).
                </li>
                <li>
                  <strong className='text-blue-500'>BIGCOLOR VIỆT NAM</strong> gửi hàng đã đổi/ bảo hành/ sửa chữa cho
                  Quý khách
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
