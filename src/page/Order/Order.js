import { Outlet } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import Payment from './Payment';
const Order = () => {
  const [services, setServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState({ totalRoom: 0, totalService: 0 });
  const [state, setState] = useState({
    idHotel: 1,
    checkin: 'Thu Nov 28 2024 00:00:00 GMT+0700 (Indochina Time)',
    checkout: 'Mon Dec 02 2024 00:00:00 GMT+0700 (Indochina Time)',
    guests: {
      rooms: 2,
      adults: 2,
      children: 1
    },
    room: [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 }
    ]
  });

  const [hotel, setHotel] = useState({
    name: "La Vela Saigon Hotel",
    star: 4.5,
    address: "280 Nam Ky Khoi Nghia, Ward 8, District 3, District 3, Ho Chi Minh City, Vietnam",
    rooms: [
      { id: 1, name: "La Vela Club Lounge - Suite", price: 2000000 },
      { id: 2, name: "La Vela Club Lounge - President Suite", price: 4000000 },
      { id: 3, name: "La Vela Deluxe Twin", price: 2500000 }
    ],
    services: [
      { id: 1, name: "Breakfast", price: 100000 },
      { id: 2, name: "Parking", price: 0 },
      { id: 3, name: "High-speed internet", price: 0 }
    ]
  });

  useEffect(() => {
    const totalRoom = state.room.reduce((sum, room) => {
      const roomPrice = hotel.rooms.find((r) => r.id === room.id)?.price * room.quantity;
      return sum + roomPrice;
    }, 0);
    const totalService = services.reduce((sum, service) => {
      const servicePrice = service.quantity * service.price;
      return sum + servicePrice;
    }, 0)
    setTotalAmount({ totalRoom, totalService })
  }, [state.room, services]);

  const handleService = (option) => {
    const check = services.find((item) => item.id === option.id)
    if (check) {
      setServices([...services.filter((item) => item.id !== option.id), { ...check, quantity: check.quantity + 1 }]);
    } else {
      setServices([...services, { ...option, quantity: 1 }]);
    }
  };
  return (
    <div className='flex gap-8 mx-auto w-[80%] mt-10'>
      <div className='basis-1/3'>
        <div className='border rounded-lg p-4 mb-4'>
          <p className="text-sm flex items-center gap-4">
            Hotel
            <span>
              {Array.from({ length: Math.floor(hotel.star) }, (_, i) => (
                <IoStar className='text-yellow-400 inline' key={i} />
              ))}
              {hotel.star % 1 !== 0 && <IoStarHalf className='text-yellow-400 inline-block' />}
              <sup>({hotel.star})</sup>
            </span>
          </p>
          <h3 className="text-lg font-semibold my-2">{hotel.name}</h3>
          <p className="text-sm text-gray-600">{hotel.address}</p>
        </div>

        <div className='border rounded-lg p-4 mb-4'>
          <h2 className="text-xl font-semibold mb-4">Chi tiết đặt phòng</h2>
          <div className="flex gap-2 mb-2 text-sm my-2">
            <div className='border-r basis-1/2'>
              <p>Check-in: </p>
              <b>{new Date(state.checkin).toDateString()}</b>
            </div>
            <div className='basis-1/2'>
              <p>Check-out: </p>
              <b>{new Date(state.checkout).toDateString()}</b>
            </div>
          </div>
          <div className="text-sm my-2">
            <p>Số ngày ở</p>
            <b>{(new Date(state.checkout) - new Date(state.checkin)) / (1000 * 60 * 60 * 24)} đêm</b>
          </div>
          <div className="text-sm my-2">
            <p>Chi tiết phòng</p>
            <div className="font-bold"> {state.guests.rooms} phòng cho {state.guests.adults} người lớn, {state.guests.children} trẻ em</div>
          </div>
          <div className="italic text-xs">
            {state.room.map((roomBooking) => {
              const roomDetails = hotel.rooms.find((room) => room.id === roomBooking.id);
              return (
                <div key={roomBooking.id} className="p-2 mb-2 flex gap-4">
                  <div>{roomBooking.quantity}</div>
                  ×
                  <div>
                    <div>{roomDetails.name}</div>
                    <p>Giá mỗi đêm: {roomDetails.price.toLocaleString()} VND</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='border rounded-lg p-4 mb-4'>
          <h2 className="text-xl font-semibold mb-4">Dịch vụ</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {services.map((item) => (
              <div key={item.id}>
                <div
                  className="flex items-center px-3 py-1 text-sm text-white bg-green-700 rounded-full"
                >
                  {item.name} {item.quantity !== 1 && ` × ${item.quantity}`}
                  <button
                    className="ml-2 text-white hover:text-red-400"
                    onClick={() => setServices(services.filter((i) => i.id !== item.id))}
                  >
                    ✕
                  </button>
                </div>
              </div>

            ))}
          </div>
          <div className="relative">
            <button className="w-full px-4 py-2 text-left border rounded shadow focus:outline-none group">
              Chọn dịch vụ
              <ul className="absolute hidden group-hover:block left-0 w-full mt-2 bg-white border rounded shadow">
                {hotel.services.map((service) => (
                  <li
                    key={service.id}
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100`}
                    onClick={() => handleService(service)}
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <i className='text-xs mx-4'>{service.price !== 0 ? `${service.price.toLocaleString()} VND` : 'Miễn phí'} </i>
                    </div>

                    <span className='text-green-600'>{services.find((item) => item.id === service.id) && "✔"}</span>
                  </li>
                ))}
              </ul>
            </button>

          </div>
        </div>

        <div className='border rounded-lg p-4 mb-4'>
          <h2 className="text-lg font-semibold mb-4">Thành tiền</h2>
          <div className="text-sm mb-4">
            {totalAmount.totalRoom && (
              <div className="flex justify-between mb-2">
                <span>Tổng tiền đặt phòng</span>
                <span className="font-medium">{(totalAmount.totalRoom).toLocaleString()} VND</span>
              </div>
            )}
            {totalAmount.totalService !== 0 ? (
              <div className="flex justify-between ">
                <span>Phí dịch vụ</span>
                <span className="font-medium">{(totalAmount.totalService).toLocaleString()} VND</span>
              </div>
            ) : (null)}
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            {/* <div className="text-xs text-gray-500 line-through mb-1">VND 29,400,000</div> */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">TỔNG</span>
              <span className="text-xl font-bold text-blue-900">VND {(totalAmount.totalRoom + totalAmount.totalService).toLocaleString()}</span>
            </div>
          </div>



        </div>
      </div>


      <div className='basis-2/3'>
        <Outlet context={{ totalAmount:  totalAmount.totalRoom + totalAmount.totalService}} />
      </div>
    </div>
  )
}

export default Order;
