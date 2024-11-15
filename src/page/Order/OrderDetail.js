
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import Payment from './Payment';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { APP_ROUTER } from '../../utils/Constants';

const OrderDetail = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: '',
        specialRequests: '',
        arrivalTime: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        console.log('Submit', e.target.elements)
        navigate(APP_ROUTER.PAYMENT);
    };

    return (
        <form className='basis-2/3' onSubmit={handleSubmit}>
            <div className='border rounded-lg p-4 mb-4'>
                <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <label className="block text-gray-700 text-sm mb-1">Họ tên</label>
                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleInputChange}
                                className="w-full p-1 border outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm mb-1">Số điện thoại</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-1 border outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                                pattern="[0-9]{10}"
                                placeholder="123 456 7890"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-gray-700 text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-1 border outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <div className='text-[10px] text-neutral-600'>Thông tin xác nhận sẽ được gửi về địa chỉ mail này</div>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 text-sm mb-1">Địa chỉ</label>
                            <input
                                type="tel"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full p-1 border outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='border rounded-lg p-4 mb-4'>
                <section className="border-b border-gray-300 p-6">
                    <h2 className="text-xl font-semibold mb-4">Special Requests</h2>
                    <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Please write your requests in English."
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </section>
            </div>
            <div className='border rounded-lg p-4 mb-4'>
                <section className="border-b border-gray-300 p-6">
                    <h2 className="text-xl font-semibold mb-4">Your arrival time</h2>
                    <select
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="">Please select</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                    </select>
                </section>
            </div> */}

            <div className="flex justify-end">
                <button type='submit' className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                    Thanh toán
                </button>
            </div>

        </form>
    );
}

export default OrderDetail;