import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { VscCheck } from "react-icons/vsc";
import {
    AiOutlineQuestionCircle,
    AiFillExclamationCircle,
} from "react-icons/ai";
import { MdViewCozy } from "react-icons/md";
const RecommendHotel = ({ checkin, checkout, adult_count, roomData, totalPrice, handleOrder }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const order =() => {
        const data = roomData.map(i => ({id: i.room_id, name: i.room_name, quantity: i.count, price: i.total_price}))
        handleOrder(data);
    }    
 
    return (
        <div>
            <div className="w-full rounded-xl shadow-xl">
                <div className="p-5 text-xl font-bold">
                    Được giới thiệu cho {adult_count} người lớn
                </div>
                <hr />
                {roomData?.length>0 ? (
                    <div className="grid grid-cols-[50%,20%,30%] w-full">
                    {roomData.map((room, index) => (
                        <React.Fragment key={index}>
                            <div className="p-4 border-[0.5px] border-l-0 border-gray-200 flex flex-col gap-[3px]">
                                <div className="flex">
                                    <div className="">{room.count} x </div>
                                    <a
                                        href=""
                                        className="text-blue-600 underline ml-1"
                                    >
                                        {room.room_name}
                                    </a>
                                </div>
                                <div className="flex gap-2 items-center text-sm">
                                    <p className="font-semibold">Giá cho: </p>
                                    <div className="flex">
                                        {Array(room.adult_count)
                                            .fill()
                                            .map((_, index) => (
                                                <IoPersonSharp
                                                    key={index}
                                                    className="text-base mr-1"
                                                />
                                            ))}
                                    </div>
                                </div>
                                <div className="text-sm">
                                    {/* <div className="flex items-center space-x-2">
                                        {room.bedDoubleCount > 0 && (
                                            <>
                                                <span>
                                                    {room.bedDoubleCount} giường
                                                    đôi lớn{" "}
                                                </span>
                                                {[
                                                    ...Array(
                                                        room.bedDoubleCount
                                                    ),
                                                ].map((_, index) => (
                                                    <LuBedDouble
                                                        key={index}
                                                        className="text-lg"
                                                    />
                                                ))}
                                            </>
                                        )}
                                        {room.bedDoubleCount > 0 &&
                                            room.singleBedCount > 0 && (
                                                <span>,</span>
                                            )}
                                        {room.singleBedCount > 0 && (
                                            <>
                                                <span>
                                                    {room.singleBedCount} giường
                                                    đơn{" "}
                                                </span>
                                                {[
                                                    ...Array(
                                                        room.singleBedCount
                                                    ),
                                                ].map((_, index) => (
                                                    <LuBedSingle
                                                        key={index}
                                                        className="text-lg"
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </div> */}
                                </div>
                                {/* <div className="flex gap-1 text-sm items-center">
                                    <div className="flex gap-1 items-center text-green-700">
                                        <VscCheck className="text-base" />
                                        <div className="font-bold text-nowrap">
                                            Hủy miễn phí
                                        </div>
                                    </div>{" "}
                                    <div className="text-green-700">
                                        trước {room.cancelDate}
                                    </div>
                                    <button onClick={openModal}>
                                        <AiOutlineQuestionCircle className="text-xl text-blue-600" />
                                    </button>
                                </div> */}
                                {/* <div className="flex gap-1 text-sm items-center">
                                    <div className="flex gap-1 items-center text-green-700">
                                        <VscCheck className="text-base" />
                                        <div className="font-bold text-nowrap">
                                            Không cần thanh toán trước{" "}
                                        </div>
                                    </div>{" "}
                                    <div className="text-green-700 text-nowrap">
                                        - thanh toán tại chỗ nghỉ
                                    </div>
                                </div> */}
                                <div className="flex items-center gap-1">
                                    <div>
                                        <AiFillExclamationCircle className="text-base text-red-500" />
                                    </div>
                                    <div className="text-red-800 font-semibold text-xs">
                                        Chỉ còn {room.remaining} trên trang của
                                        chúng tôi
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-[0.5px] border-gray-200">
                                <p className="font-semibold text-xl">
                                VND {Number(room.total_price).toLocaleString()} 
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                    <div
                        className={`col-start-3 row-start-1 p-4 border-[0.5px] border-b-0 border-r-0 border-gray-200 flex flex-col`}
                        style={{ gridRowEnd: `span ${roomData.length}` }}
                    >
                        <p className="text-xs mb-2">
                            Cho {adult_count} người ở
                        </p>
                        <p className="text-xs mb-2">
                            
                            Từ ngày {checkin} đến ngày {checkout}
                        </p>
                        <p className="font-bold text-xl">{roomData?.reduce((sum, item) => sum + item.total_price * item.count, 0).toLocaleString() || null} VND</p>
                        <p className="text-xs mb-7">Đã bao gồm thuế và phí</p>
                        <button onClick={order} className="mb-3 w-full cursor-pointer text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Đặt các lựa chọn của bạn
                        </button>
                        <p className="text-xs text-gray-600">
                            Đừng lo — bạn sẽ không bị trừ đồng nào khi nhấn nút
                            này đâu!
                        </p>
                    </div>
                </div>
                ) : (
                    <div className="italic text-center p-4">Không tìm thấy phòng phù hợp</div>
                )}
            </div>
        </div>
    );
};

export default RecommendHotel;
