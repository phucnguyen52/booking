import React, { useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdHotelClass } from "react-icons/md";
import { CgAssign } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";
import { VscCheck } from "react-icons/vsc";
import { IoPersonSharp } from "react-icons/io5";
const EmptyRoom = ({ emptyRoom }) => {
    const [selectedPrice, setSelectedPrice] = useState({});

    const handlePriceChange = (roomId, price) => {
        setSelectedPrice({ ...selectedPrice, [roomId]: price });
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
                                Giá cho n đêm
                                <MdOutlineArrowDropDown className="absolute w-12 h-12 bottom-[-26px] left-14 text-[#003b95]" />
                            </th>
                            <th
                                className="z-20 text-nowrap bg-[#4c76b2] text-white px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0"
                                style={{ width: "30%" }}
                            >
                                Các lựa chọn
                            </th>
                            <th
                                className="z-20 text-nowrap bg-[#4c76b2] text-white px-2 py-[6px] text-sm font-bold pb-8 border-1 border-[#5bbaff] border border-t-0 sticky top-0"
                                style={{ width: "7%" }}
                            >
                                Chọn bungalow
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {emptyRoom.map((room) => (
                            <tr
                                key={room.id}
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
                                        {room.name}
                                    </a>
                                    <div className="flex items-center gap-1 my-1">
                                        <div>
                                            <AiFillExclamationCircle className="text-base text-red-500" />
                                        </div>
                                        <div className="text-red-800 font-semibold text-xs">
                                            Chỉ còn {room.availability} trên
                                            trang của chúng tôi
                                        </div>
                                    </div>
                                    <ul className="my-2">
                                        {room.bedDetails.map((bed, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center"
                                            >
                                                <span className="mr-2 text-nowrap text-sm">
                                                    {bed.quantity} {bed.type}
                                                </span>
                                                <div className="flex gap-1 flex-wrap">
                                                    {Array.from({
                                                        length: bed.quantity,
                                                    }).map((_, iconIdx) =>
                                                        bed.type ===
                                                        "Giường đôi cực lớn" ? (
                                                            <LuBedDouble
                                                                key={iconIdx}
                                                                className="text-xl"
                                                            />
                                                        ) : bed.type ===
                                                          "Giường đơn" ? (
                                                            <LuBedSingle
                                                                key={iconIdx}
                                                                className="text-xl"
                                                            />
                                                        ) : null
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-1">
                                        <CgAssign className="w-5 h-5" />
                                        <div className="flex-nowrap text-sm">
                                            {room.size}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {room.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-1"
                                            >
                                                <MdHotelClass className="text-gray-600" />{" "}
                                                <span className="text-xs">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {room.additionalAmenities.map(
                                            (feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-1"
                                                >
                                                    <IoMdCheckmark className="text-green-600" />{" "}
                                                    <span className="text-xs">
                                                        {feature}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </td>

                                <td
                                    className="px-2 py-4 border-r border-[#5bbaff] h-full"
                                    style={{ width: "13%" }}
                                >
                                    <div
                                        className="grid w-full h-full gap-1"
                                        style={{
                                            gridTemplateRows: `repeat(${room.options.length}, 1fr)`,
                                            alignItems: "start",
                                        }}
                                    >
                                        {room.options.map((option, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex items-center justify-between p-2 ${
                                                    idx !== 0
                                                        ? "border-t border-[#5bbaff]"
                                                        : ""
                                                }`}
                                            >
                                                <div className="flex items-center">
                                                    {option.guestCount <= 5 ? (
                                                        Array.from(
                                                            {
                                                                length: option.guestCount,
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
                                                                    option.guestCount
                                                                }{" "}
                                                                x
                                                            </span>
                                                            <IoPersonSharp className="text-blue-500" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td
                                    className="px-2 py-4 border-r border-[#5bbaff] h-full"
                                    style={{ width: "20%" }}
                                >
                                    <div
                                        className="grid w-full h-full gap-1"
                                        style={{
                                            gridTemplateRows: `repeat(${room.options.length}, 1fr)`,
                                            alignItems: "start",
                                        }}
                                    >
                                        {room.options.map((option, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex flex-col items-start justify-between p-2 ${
                                                    idx !== 0
                                                        ? "border-t border-[#5bbaff]"
                                                        : ""
                                                }`}
                                            >
                                                <div
                                                    key={idx}
                                                    className="font-bold text-base"
                                                >
                                                    VNĐ {option.price}
                                                </div>
                                                <p className="text-xs mb-7 text-nowrap">
                                                    Đã bao gồm thuế và phí
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td
                                    className="px-2 py-4 border-r border-[#5bbaff] h-full"
                                    style={{ width: "30%" }}
                                >
                                    <div
                                        className="grid w-full h-full gap-1"
                                        style={{
                                            gridTemplateRows: `repeat(${room.options.length}, 1fr)`,
                                            alignItems: "start",
                                        }}
                                    >
                                        {room.options.map((option, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex justify-center flex-col p-2 ${
                                                    idx !== 0
                                                        ? "border-t border-[#5bbaff]"
                                                        : ""
                                                }`}
                                            >
                                                <div
                                                    key={idx}
                                                    className="flex gap-1 text-xs items-center"
                                                >
                                                    <div className="flex gap-1 items-center text-green-700">
                                                        <VscCheck className="text-sm" />
                                                        <div className="font-bold text-xs text-nowrap">
                                                            Hủy miễn phí
                                                        </div>
                                                    </div>{" "}
                                                    <div className="text-green-700 text-nowrap">
                                                        trước{" "}
                                                        {
                                                            option
                                                                .cancellationPolicy
                                                                .freeCancellationUntil
                                                        }
                                                    </div>
                                                </div>
                                                <div className="text-xs text-wrap">
                                                    <div className="flex gap-1 items-center text-green-700">
                                                        <VscCheck className="text-base" />
                                                        <div className="font-bold text-nowrap">
                                                            Không cần thanh toán
                                                            trước{" "}
                                                        </div>
                                                    </div>{" "}
                                                    <div className="text-green-700 text-nowrap">
                                                        - thanh toán tại chỗ
                                                        nghỉ
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </td>

                                <td
                                    className="px-2 py-4 border-r border-[#5bbaff]"
                                    style={{ width: "7%" }}
                                >
                                    <select
                                        value={selectedPrice[room.id] || ""}
                                        onChange={(e) =>
                                            handlePriceChange(
                                                room.id,
                                                e.target.value
                                            )
                                        }
                                        className="focus:outline-none px-1 py-3 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
                                    >
                                        <option value="" className="bg-white">
                                            0
                                        </option>
                                        {room.options.map((option, idx) => (
                                            <option
                                                key={idx}
                                                value={option.price}
                                                className="bg-white w-full"
                                            >
                                                {option.price}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
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
