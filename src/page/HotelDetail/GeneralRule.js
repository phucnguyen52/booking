import React from "react";
import Button from "../../components/Button";
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { MdFreeCancellation } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { MdOutlineTimerOff } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
const GeneralRule = () => {
    const data = [
        {
            label: "Nhận phòng",
            value: "Từ 14:00\nKhách được yêu cầu xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng lúc nhận phòng.\nTrước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến nơi.",
        },
        { label: "Trả phòng", value: "Đến 12:00" },
        {
            label: "Hủy đặt phòng/ Trả trước",
            value: "Các chính sách hủy và thanh toán trước sẽ khác nhau tùy vào từng loại chỗ nghỉ.\nVui lòng kiểm tra các điều kiện có thể được áp dụng cho mỗi lựa chọn của bạn.",
        },
        {
            label: "Trẻ em và giường",
            value: "Chính sách trẻ em\nPhù hợp cho tất cả trẻ em.\n\nĐể xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.\n\nChính sách nôi (cũi) và giường phụ\nChỗ nghỉ này không có nôi/cũi và giường phụ.",
        },
        {
            label: "Không giới hạn độ tuổi",
            value: "Không có yêu cầu về độ tuổi khi nhận phòng",
        },
        {
            label: "Vật nuôi",
            value: "Vật nuôi được phép. Không tính thêm phí.",
        },
    ];
    return (
        <div className="">
            
            <div className="border border-gray-200 rounded-md p-6 mt-5 text-sm">
                <div className="grid grid-cols-[25%_75%] gap-4 border-b border-gray-200 pb-4">
                    <div className="font-bold gap-2 flex items-center">
                        <CiLogin className="w-5 h-5" />
                        <div>Nhận phòng</div>
                    </div>
                    <div className="whitespace-pre-line text-sm">
                        <div className="mb-1">Từ 14:00.</div>
                        <div className="mb-1 text-gray-700">
                            Khách được yêu cầu xuất trình giấy tờ tùy thân có
                            ảnh và thẻ tín dụng lúc nhận phòng.
                        </div>
                        <div className="text-gray-700">
                            Trước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến
                            nơi.
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className="grid grid-cols-[25%_75%] gap-4 border-b border-gray-200 py-4">
                    <div className="font-bold gap-2 flex items-center">
                        <IoIosLogOut className="w-5 h-5" />
                        <div>Trả phòng</div>
                    </div>
                    <div className="whitespace-pre-line">Đến 12:00</div>
                </div>

                <div className="grid grid-cols-[25%_75%] gap-4 border-b border-gray-200 py-4">
                    <div className="font-bold gap-2 flex items-center">
                        <MdFreeCancellation className="w-5 h-5" />
                        <div>Hủy đặt phòng/ Trả trước</div>
                    </div>

                    <div className="whitespace-pre-line">
                        <div className="mb-1">
                            Các chính sách hủy và thanh toán trước sẽ khác nhau
                            tùy vào từng loại chỗ nghỉ.
                        </div>
                        <div>
                            {" "}
                            Vui lòng kiểm tra các điều kiện có thể được áp dụng
                            cho mỗi lựa chọn của bạn.
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[25%_75%] gap-4 border-b border-gray-200 py-4">
                    <div className="font-bold gap-2 flex items-center">
                        <FaChildren className="w-5 h-5" />
                        <div>Trẻ em và giường</div>
                    </div>

                    <div className="whitespace-pre-line">
                        <div className="font-bold text-base mb-2">Chính sách trẻ em</div>
                        <div className="mb-2"> Phù hợp cho tất cả trẻ em. </div>
                        <div className="w-[70%] mb-2">
                            Để xem thông tin giá và tình trạng phòng trống chính
                            xác, vui lòng thêm số lượng và độ tuổi của trẻ em
                            trong nhóm của bạn khi tìm kiếm.
                        </div>
                        <div className="font-bold text-base mb-2">Chính sách nôi (cũi) và giường phụ</div>
                        <div>Chỗ nghỉ này không
                        có nôi/cũi và giường phụ.</div>
                         
                    </div>
                </div>

                <div className="grid grid-cols-[25%_75%] gap-4 border-b border-gray-200 py-4">
                    <div className="font-bold gap-2 flex items-center">
                        <MdOutlineTimerOff className="w-5 h-5" />
                        <div>Không giới hạn độ tuổi</div>
                    </div>
                    <div className="whitespace-pre-line">
                        Không có yêu cầu về độ tuổi khi nhận phòng
                    </div>
                </div>

                <div className="grid grid-cols-[25%_75%] gap-4 py-4">
                    <div className="font-bold gap-2 flex items-center">
                        <MdOutlinePets className="w-5 h-5" />
                        <div>Vật nuôi</div>
                    </div>
                    <div className="whitespace-pre-line">
                        <div className="inline text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-2 py-1 text-center mr-2">
                            Miễn phí
                        </div>
                        Vật nuôi được phép. Không tính thêm phí.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralRule;
