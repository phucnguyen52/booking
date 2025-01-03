import React from 'react';

const HotelItem = (props) => {
   const { nameHotel, address, description, images, id, handleHotel } = props

   return (
      <div onClick={()=>handleHotel(id)} className="border rounded-lg p-4 flex gap-8 mb-6 shadow-lg w-4/5 mx-auto">
            <img src={images[0]} alt={nameHotel} className="w-[200px] h-[200px] object-cover rounded-lg mr-4" />
            <div className="grow">
                <h3 className="text-2xl font-bold text-blue-700">
                    {nameHotel}
                </h3>
                <div className="font-bold text-sm text-blue-700 underline mt-2">
                    {address}
                    <span className='ml-4'>Show on map</span>
                </div>
                <div className=" mt-4">
                    {description}
                </div>
                {/* <div className='block mt-4'>
                    <div className="relative inline-block mt-2 group">
                        <div className="bg-green-700 text-white text-sm px-2 py-1 rounded cursor-pointer">
                            {amenityHotel.name}
                        </div>
                        <div className="absolute left-0 mt-2 w-64 bg-white p-3 rounded shadow-lg text-gray-800 text-sm hidden group-hover:block z-10">
                            <strong>{amenityHotel.name}</strong>
                            <p>{amenityHotel.detail}</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="mt-4 flex justify-between">
                    <div>
                        {room.map((roomItem, index) => (
                            <div key={index} className="mb-2 flex items-start gap-4">
                                <p>{roomItem.quantity}x</p>
                                <div>
                                    <p className="font-semibold">{roomItem.nameRoom}</p>
                                    <p className="text-sm text-gray-600">Giá: 2.000.000 / đêm </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="text-right">
                        <p className='text-sm text-gray-600 mb-2'>9 nights, 3 adults</p>
                        <div>
                            <p className="line-through text-red-500 mb-2">
                                VND {totalAmount.toLocaleString()}
                            </p>
                            <p className="text-xl font-bold mb-2">VND {(totalAmount*(100-discount) / 100).toLocaleString()}</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            Xem phòng trống
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
   );
};

export default HotelItem;

