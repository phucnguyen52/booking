import React, { useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdHotelClass } from "react-icons/md";
import { CgAssign } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";
import { VscCheck } from "react-icons/vsc";
import { IoPersonSharp } from "react-icons/io5";
const EmptyRoom = ({ emptyRoom, setEmptyRoom }) => {
    const [roomSelect, setRoomSelect] = useState([]);

    const handleRoomChange = (count, index) => {
        const newSelect = [...emptyRoom]
        newSelect[index] = { ...newSelect[index], count: count }
        setEmptyRoom(newSelect);
        console.log(count, index)
        console.log(newSelect)
    };

    return (
        <div>
            <div className="text-2xl font-bold">Phòng trống</div>
            <div className="mt-2 font-semibold text-base">
                Tất cả lựa chọn còn trống
            </div>
            <div className="flex w-full">
                <table className="w-[80%] h-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th
                                className="z-99 text-nowrap bg-[#4c76b2] text-white px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0"
                                style={{ width: "30%" }}
                            >
                                Loại chỗ ở
                            </th>
                            <th
                                className="z-20 text-nowrap bg-[#4c76b2] text-white px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0"
                                style={{ width: "13%" }}
                            >
                                Số lượng khách
                            </th>
                            <th
                                className="z-20 text-nowrap bg-[#003b95] text-white px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0"
                                style={{ width: "20%" }}
                            >
                                Giá cho 1 đêm
                                <MdOutlineArrowDropDown className="absolute w-12 h-12 bottom-[-26px] left-14 text-[#003b95]" />
                            </th>
                            <th
                                className="z-20 text-nowrap bg-[#4c76b2] text-white px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0"
                                style={{ width: "7%" }}
                            >
                                Chọn phòng
                            </th>
                        </tr>
                    </thead>
                    {emptyRoom.length > 0 ? (
                        <tbody>
                            {emptyRoom.map((room, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-[#5bbaff]"
                                >
                                    <td
                                        className="px-2 py-4 border-r border-[#5bbaff]"
                                        style={{ width: "30%" }}
                                    >
                                        <a
                                            href=""
                                            className="font-bold text-base underline text-blue-600
                                 "
                                        >
                                            {room.room_name}
                                        </a>
                                        <div className="flex items-center gap-1 my-1">
                                            <div>
                                                <AiFillExclamationCircle className="text-base text-red-500" />
                                            </div>
                                            <div className="text-red-800 font-semibold text-xs">
                                                Chỉ còn {room.available} trên
                                                trang của chúng tôi
                                            </div>
                                        </div>
                                    </td>

                                    <td
                                        className="px-2 py-4 border-r border-[#5bbaff] h-full"
                                        style={{ width: "13%" }}
                                    >
                                        <div className="flex items-center">
                                            {room.adult_count <= 5 ? (
                                                Array.from(
                                                    {
                                                        length: room.adult_count,
                                                    },
                                                    (_, iconIdx) => (
                                                        <IoPersonSharp
                                                            key={
                                                                iconIdx
                                                            }
                                                            className="text-blue-500"
                                                        />
                                                    )
                                                )
                                            ) : (
                                                <div className="flex items-center gap-1">
                                                    <span className="ml-2">
                                                        {
                                                            room.adult_count
                                                        }{" "}
                                                        x
                                                    </span>
                                                    <IoPersonSharp className="text-blue-500" />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td
                                        className="px-2 py-4 border-r border-[#5bbaff] h-full"
                                        style={{ width: "20%" }}
                                    >
                                        <div
                                        // className="grid w-full h-full gap-1"
                                        >
                                            <div
                                                className="font-bold text-base"
                                            >
                                                VNĐ {room.total_price}
                                            </div>
                                            <p className="text-xs mb-7 text-nowrap">
                                                Đã bao gồm thuế và phí
                                            </p>
                                        </div>
                                    </td>

                                    <td
                                        className="px-2 py-4 border-r border-[#5bbaff]"
                                        style={{ width: "7%" }}
                                    >
                                        <select
                                            value={room.count}
                                            onChange={(e) => {
                                                handleRoomChange(Number(e.target.value), index)
                                            }}
                                            className="focus:outline-none px-1 py-3 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
                                        >
                                            {Array.from({ length: room.available + 1 }).map((_, idx) => (
                                                <option
                                                    key={idx}
                                                    value={idx}
                                                    className="bg-white w-full"
                                                >
                                                    {idx}{idx === 0 ? '' : ` - ${room.total_price * idx}`} VND
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : <div>Không có phòng trống</div>}
                </table>


                <div className="w-1/5 border-[#5bbaff] border-b-[1px]">
                    <div className=" bg-[#4c76b2] text-[#4c76b2] px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0 z-20 text-nowrap">
                        a
                    </div>
                    <div className="mt-4 text-center sticky top-20">
                        <button className="py-3 w-4/5 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Đặt phòng
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-sm my-3">
                Huong Giang Bungalow có thể sẽ tính thêm những phụ phí chưa được
                thể hiện phía trên. Hãy xem phần Ghi chú để biết thêm về chỗ
                nghỉ này.
            </div>
        </div>
    );
};

export default EmptyRoom;
