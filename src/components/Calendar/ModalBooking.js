import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { bookingService } from '../../service/bookingService';

const ModalBooking = () => {
   const bookingDetailId = 1
   const bookingId = 1
   const [booking, setBooking] = useState(null);
   
   useEffect(() => {
      const fetchBooking = async() => {
         const data = await bookingService.getBookingDetail(bookingId)
         if(data) setBooking(data)
      }
   fetchBooking()
   }, [bookingId, bookingDetailId]);
   console.log('bookingDetail', booking)
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };

   return (
      <div>
         <Button type="primary" onClick={showModal}>
            Open Modal
         </Button>
         <Modal
            title="P403"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={()=> setIsModalOpen(false)}
            style={{
               top: 20,
            }}
            width={700}
            footer={[
               <Button key="back" onClick={()=>setIsModalOpen(false)} className="px-4 py-2 bg-white text-green-700 !border-green-600 rounded-md hover:!bg-green-100 hover:!text-green-700">
                  Sửa đặt phòng
               </Button>,
               <Button key="submit" type="primary" onClick={handleOk} className="px-4 py-2 bg-green-600 text-white rounded-md hover:!bg-green-700">
                  Đóng
               </Button>,
            ]}
         >
            <div className='rounded-lg border p-4'>
               <div className="mb-4 border-b">
                  <h5 className="text-base font-semibold pb-2">
                     Phòng 01 giường đôi và 1 giường đơn cho 3 người
                     <span className="text-sm text-green-600 ml-2">Đang sử dụng</span>
                  </h5>
               </div>

               <div className="grid grid-cols-4 gap-4 text-sm mb-4">
                  <div className='col-span-2 border-r'>
                     <p className="text-gray-500">Khách hàng</p>
                     <p>Khách lẻ</p>
                  </div>
                  <div>
                     <p className="text-gray-500">Mã đặt phòng</p>
                     <p>DP000009</p>
                  </div>
                  <div className='col-span-2 border-r'>
                     <p className="text-gray-500">Thời gian lưu trú</p>
                     <p>1 tháng <span className="text-gray-400">(Đã sử dụng: 1 tháng)</span></p>
                  </div>
                  <div className='border-r'>
                     <p className="text-gray-500">Nhận phòng</p>
                     <p>09 thg 12, 00:00</p>
                  </div>
                  <div>
                     <p className="text-gray-500">Trả phòng</p>
                     <p>08 thg 1, 23:59</p>
                  </div>
               </div>

            </div>
            <div className='flex justify-between items-start gap-20 mt-10'>
               <div>
                  <p className='font-semibold mb-2'>Các phòng cùng đơn</p>
                  <span className='py-1 px-2 mr-2 rounded-md bg-green-100 text-green-700 text-xs font-semibold'>P100</span>
                  <span className='py-1 px-2 mr-2 rounded-md bg-orange-100 text-orange-700 text-xs font-semibold'>P101</span>
                  <span className='py-1 px-2 mr-2 rounded-md bg-green-100 text-green-700 text-xs font-semibold'>P102</span>
                  <span className='py-1 px-2 mr-2 rounded-md bg-green-100 text-green-700 text-xs font-semibold'>P103</span>
               </div>
               <div className="flex justify-between items-start gap-14 text-gray-700 bg-gray-100 p-4 rounded-lg">
                  <div>
                     <p>P403</p>
                     <p>Khách đã trả</p>
                  </div>
                  <div className='text-right font-semibold'>
                     <p>29,000,000</p>
                     <p>0</p>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
};

export default ModalBooking;