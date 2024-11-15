import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { VscCheck } from "react-icons/vsc";
import {
    AiOutlineQuestionCircle,
    AiFillExclamationCircle,
} from "react-icons/ai";
import { MdViewCozy } from "react-icons/md";
const RecommendHotel = ({ roomData, totalPrice }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const information = {
        "description" : `Bạn có thể đủ điều kiện hưởng giảm giá Genius tại Huong Giang Bungalow. Để biết giảm giá Genius có áp dụng cho ngày bạn đã chọn hay không, hãy đăng nhập.\\\\Giảm giá Genius tại chỗ nghỉ này tùy thuộc vào ngày đặt phòng, ngày lưu trú và các ưu đãi có sẵn khác.\\\\Huong Giang Bungalow nằm tại thị trấn Dương Đông, chỉ cách bãi biển 100 m. Nơi nghỉ này sở hữu nhà hàng gọi món và cung cấp truy cập Wi-Fi miễn phí.\\\\Các bungalow tại đây được trang bị sân trong và sân hiên cho tầm nhìn ra quang cảnh khu vườn cùng truyền hình cáp màn hình phẳng, minibar và phòng tắm riêng với tiện nghi vòi sen, dép đi trong phòng và khăn tắm.\\\\Nơi nghỉ này có lễ tân 24 giờ. Quý khách có thể được hỗ trợ với dịch vụ giặt là, dịch vụ đưa/đón sân bay, dịch vụ ủi và cho thuê xe hơi. Chỗ đỗ xe riêng cũng được cung cấp miễn phí cho khách.\\\\Huong Giang cách Nhà hàng Chez Carole 1,1 km, cách Chùa Sư Muôn 1,7 km và cách Coco Bar 2,2 km.\\\\Các nhóm khách đặc biệt thích địa điểm này — họ cho điểm 8,5 khi đánh giá chuyến đi theo nhóm.`,
        "convenientLove": [
            "Phòng không hút thuốc",
            "Chỗ đỗ xe miễn phí",
            "Dịch vụ phòng",
            "WiFi miễn phí",
            "Phòng gia đình",
            "Điều hòa nhiệt độ"
        ]
    }
    

    return (
        <div>
            <div className="w-full rounded-xl shadow-xl">
                <div className="p-5 text-xl font-bold">
                    Được giới thiệu cho 5 người lớn
                </div>
                <hr />
                <div className="grid grid-cols-[50%,20%,30%] w-full">
                    {roomData.map((room, index) => (
                        <React.Fragment key={room.id}>
                            <div className="p-4 border-[0.5px] border-l-0 border-gray-200 flex flex-col gap-[3px]">
                                <div className="flex">
                                    <div className="">1 x </div>
                                    <a
                                        href=""
                                        className="text-blue-600 underline ml-1"
                                    >
                                        {room.name}
                                    </a>
                                </div>
                                <div className="flex gap-2 items-center text-sm">
                                    <p className="font-semibold">Giá cho: </p>
                                    <div className="flex">
                                        {Array(room.maxCount)
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
                                    <div className="flex items-center space-x-2">
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
                                    </div>
                                </div>
                                <div className="flex gap-1 text-sm items-center">
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
                                </div>
                                <div className="flex gap-1 text-sm items-center">
                                    <div className="flex gap-1 items-center text-green-700">
                                        <VscCheck className="text-base" />
                                        <div className="font-bold text-nowrap">
                                            Không cần thanh toán trước{" "}
                                        </div>
                                    </div>{" "}
                                    <div className="text-green-700 text-nowrap">
                                        - thanh toán tại chỗ nghỉ
                                    </div>
                                </div>
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
                                <p className="font-bold text-xl">
                                    {room.price}
                                </p>
                                <p className="text-xs">{room.priceDetails}</p>
                            </div>
                            {isModalOpen && (
                                <div
                                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50"
                                    onClick={closeModal}
                                >
                                    <div
                                        className="bg-white p-6 rounded-lg max-w-lg w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-base">
                                                Hủy đặt phòng
                                            </h3>
                                            <button
                                                onClick={closeModal}
                                                className="text-gray-600 text-3xl"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="">
                                            <div className="flex gap-1 text-sm items-center">
                                                <div className="flex gap-1 items-center text-green-700 mb-1">
                                                    <VscCheck className="w-4 h-4" />
                                                    <div className="font-bold text-nowrap">
                                                        Hủy miễn phí
                                                    </div>
                                                </div>{" "}
                                                <div className="text-green-700">
                                                    trước {room.cancelDate}
                                                </div>
                                            </div>
                                            <p className="text-sm ml-5">
                                                Bạn có thể hủy miễn phí đến 3
                                                ngày trước khi tới nhận phòng.
                                                Bạn sẽ phải trả toàn bộ tiền
                                                phòng nếu bạn hủy trong vòng 3
                                                ngày trước khi tới nhận phòng.
                                                Nếu bạn vắng mặt, phí vắng mặt
                                                sẽ bằng với phí hủy.
                                            </p>
                                            <h3 className="font-bold text-base mt-2 mb-1">
                                                Trả trước
                                            </h3>
                                            <div className="flex gap-1 text-sm items-center">
                                                <div className="flex gap-1 items-center text-green-700">
                                                    <VscCheck className="w-4 h-4" />
                                                    <div className="font-bold text-nowrap">
                                                        Không cần thanh toán
                                                        trước{" "}
                                                    </div>
                                                </div>{" "}
                                                <div className="text-green-700 text-nowrap">
                                                    - thanh toán tại chỗ nghỉ
                                                </div>
                                            </div>
                                            <p className="text-sm ml-5 mt-1">
                                                Không cần thanh toán trước.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    <div
                        className={`col-start-3 row-start-1 p-4 border-[0.5px] border-b-0 border-r-0 border-gray-200 flex flex-col`}
                        style={{ gridRowEnd: `span ${roomData.length}` }}
                    >
                        <p className="text-xs mb-2">
                            {totalPrice.duration}, {totalPrice.guests}
                        </p>
                        <p className="font-bold text-xl">{totalPrice.amount}</p>
                        <p className="text-xs mb-7">Đã bao gồm thuế và phí</p>
                        <button className="mb-3 w-full cursor-pointer text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Đặt các lựa chọn của bạn
                        </button>
                        <p className="text-xs text-gray-600">
                            Đừng lo — bạn sẽ không bị trừ đồng nào khi nhấn nút
                            này đâu!
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div>
                    {information.description.split("\u005C\u005C").map((item, index) => (
                        <div key={index} className="flex my-3 text-sm ">
                            {item}
                        </div>
                    ))}
                </div>
                <div className="text-xs text-gray-600">
                    Các khoảng cách nêu trong mô tả chỗ nghỉ được tính toán bằng
                    © OpenStreetMap
                </div>
            </div>
            <div className="mt-4">
                <div className="text-base font-bold mb-2">Các tiện nghi được ưa chuộng nhất</div>
                <ul className="flex flex-wrap gap-6 text-gray-700">
                {information.convenientLove.map((convenient, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <MdViewCozy className="text-green-600 w-5 h-5" />
                        <span className="text-sm">{convenient}</span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default RecommendHotel;
