import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    const { nameHotel, address, starRating, amenityHotel, room, totalAmount, discount, images } = props

    return (
        <div className="border rounded-lg p-4 flex mb-6 shadow-lg">
            <img src={images[0]} alt={nameHotel} className="w-[240px] h-[240px] object-cover rounded-lg mr-4" />
            <div className="grow">
                <h3 className="text-2xl font-bold text-blue-700">
                    {nameHotel}
                </h3>
                <Link className="font-bold text-sm text-blue-700 underline">
                    {address.split(',').slice(-3, -1).join(',').trim()}
                    <span className='ml-4'>Show on map</span>
                </Link>

                <div className='block mt-4'>
                    <div className="relative inline-block mt-2 group">
                        <div className="bg-green-700 text-white text-sm px-2 py-1 rounded cursor-pointer">
                            {amenityHotel.name}
                        </div>
                        <div className="absolute left-0 mt-2 w-64 bg-white p-3 rounded shadow-lg text-gray-800 text-sm hidden group-hover:block z-10">
                            <strong>{amenityHotel.name}</strong>
                            <p>{amenityHotel.detail}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-between">
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
                </div>


            </div>
        </div>
    );
};

export default CardItem;