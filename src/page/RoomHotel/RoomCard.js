import React from "react";
import { FaClock } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
const RoomCard = ({ room }) => {
    const statusColors = {
        "Đang trống": "bg-green-100 text-green-800",
        "Sắp nhận": "bg-yellow-100 text-yellow-800",
        "Đang sử dụng": "bg-blue-100 text-blue-800",
        "Sắp trả": "bg-orange-100 text-orange-800",
        "Quá giờ trả": "bg-red-100 text-red-800",
    };

    return (
        <div className="rounded-lg shadow-md p-4 flex flex-col gap-2 transition-all duration-300 outline-none border border-gray-200 bg-gray-100 cursor-pointer hover-within:bg-white resize-none hover:border-green-600 hover:ring-green-600 disabled:opacity-50 hover:shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:hover:ring-neutral-600">
            <div className="flex justify-between">
                <h2 className="text-3xl font-semibold">{room.roomId}</h2>
                <span
                    className={`px-2 py-1 rounded-xl shadow-sm ${
                        statusColors[room.status]
                    }`}
                >
                    {room.status}
                </span>
            </div>
            <p className="text-base font-semibold">{room.description}</p>
            <div className="text-sm flex flex-col gap-1">
                <p className="flex items-center gap-3 text-gray-500">
                    <FaClock />{" "}
                    <div>Giờ: {room.hourlyPrice.toLocaleString()} VND</div>
                </p>
                <p className="flex items-center gap-3 text-gray-500">
                    <MdSunny />
                    <div>Ngày: {room.dailyPrice.toLocaleString()} VND</div>
                </p>
                <p className="flex items-center gap-3 text-gray-500">
                    <IoMoon />{" "}
                    <div>Đêm: {room.nightlyPrice.toLocaleString()} VND</div>
                </p>
            </div>
        </div>
    );
};

export default RoomCard;
