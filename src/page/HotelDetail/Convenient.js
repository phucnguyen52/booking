import React from "react";
import Button from "../../components/Button";
import { MdViewCozy } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
const Convenient = () => {
    const information = {
        description: `Bạn có thể đủ điều kiện hưởng giảm giá Genius tại Huong Giang Bungalow. Để biết giảm giá Genius có áp dụng cho ngày bạn đã chọn hay không, hãy đăng nhập.\\\\Giảm giá Genius tại chỗ nghỉ này tùy thuộc vào ngày đặt phòng, ngày lưu trú và các ưu đãi có sẵn khác.\\\\Huong Giang Bungalow nằm tại thị trấn Dương Đông, chỉ cách bãi biển 100 m. Nơi nghỉ này sở hữu nhà hàng gọi món và cung cấp truy cập Wi-Fi miễn phí.\\\\Các bungalow tại đây được trang bị sân trong và sân hiên cho tầm nhìn ra quang cảnh khu vườn cùng truyền hình cáp màn hình phẳng, minibar và phòng tắm riêng với tiện nghi vòi sen, dép đi trong phòng và khăn tắm.\\\\Nơi nghỉ này có lễ tân 24 giờ. Quý khách có thể được hỗ trợ với dịch vụ giặt là, dịch vụ đưa/đón sân bay, dịch vụ ủi và cho thuê xe hơi. Chỗ đỗ xe riêng cũng được cung cấp miễn phí cho khách.\\\\Huong Giang cách Nhà hàng Chez Carole 1,1 km, cách Chùa Sư Muôn 1,7 km và cách Coco Bar 2,2 km.\\\\Các nhóm khách đặc biệt thích địa điểm này — họ cho điểm 8,5 khi đánh giá chuyến đi theo nhóm.`,
        convenientLove: [
            "Phòng không hút thuốc",
            "Chỗ đỗ xe miễn phí",
            "Dịch vụ phòng",
            "WiFi miễn phí",
            "Phòng gia đình",
            "Điều hòa nhiệt độ",
        ],
    };
    const mockData = {
       
        "Phòng tắm": [
            "Phòng tắm",
            "Giấy vệ sinh",
            "Khăn tắm",
           
           
            "Toilet chung",
            "Phòng tắm riêng",
            "Nhà vệ sinh",
            "Đồ vệ sinh cá nhân miễn phí",
            "Vòi sen",
        ],
        "Ngoài trời": [
            "Bàn ghế ngoài trời",
            "Khu vực ăn uống ngoài trời",
            
            "Sân trong",
            "Sân vườn",
        ],
        "Dịch vụ": [
            "Dịch vụ đưa đón",
            "Dịch vụ trợ giúp đặc biệt",
            "Cho thuê xe hơi",
            
            "Giặt ủi",
            "Dịch vụ phòng",
        ],
        "Tổng quát": [
            "Khu vực cho phép hút thuốc",
            "Điều hòa nhiệt độ",
            
            
            "Phòng gia đình",
          
            "Lối vào dành cho người khuyết tật",
            "Xe lăn có thể đi đến mọi nơi trong toàn bộ khuôn viên",
        ],
       
    };

    return (
        <div className="">
            <div className="mt-4">
                <div className="text-base font-bold mb-3">
                    Các tiện nghi được ưa chuộng nhất
                </div>
                <ul className="flex flex-wrap gap-6 text-gray-700">
                    {information.convenientLove.map((convenient, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <MdViewCozy className="text-green-600 w-5 h-5" />
                            <span className="text-sm">{convenient}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4 mt-6">
                {Object.entries(mockData).map(([category, items]) => (
                    <div key={category} className="break-inside-avoid mb-2">
                        <h3 className="text-base font-bold mb-2 flex items-center">
                            <GrTask className="mr-2 w-4 h-4" /> {category}{" "}
                        </h3>
                        <ul className="list-none pl-0 space-y-1">
                            {" "}
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-sm text-gray-700"
                                >
                                    <IoMdCheckmark className="mr-2 text-green-600 w-4 h-4" />{" "}
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Convenient;
