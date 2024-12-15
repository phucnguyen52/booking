import React from "react";
import Button from "../../components/Button";

const Note = () => {
    return (
        <div className="mb-5">
            
            <div className="border border-gray-200 rounded-md p-6 text-sm mt-5">
                <div className="mb-2">
                    Khách cần phải xuất trình giấy tờ tùy thân có ảnh và thẻ tín
                    dụng vào thời điểm nhận phòng. Vui lòng lưu ý tất cả các Yêu
                    cầu Đặc biệt đều tùy thuộc vào tình trạng phòng trống và phụ
                    phí có thể sẽ được tính thêm.
                </div>
                <div className="mb-2">
                    Vui lòng thông báo trước cho Huong Giang Bungalow về thời
                    gian đến dự kiến của quý khách. Khách có thể sử dụng ô Yêu
                    cầu Đặc biệt khi đặt phòng hoặc liên lạc trực tiếp với chỗ
                    nghỉ qua các thông tin liên hệ được ghi trong xác nhận đặt
                    phòng.
                </div>
                <div className="mb-2">
                    Khách được yêu cầu thanh toán qua chuyển khoản ngân hàng
                    trước khi tới nơi. Chỗ nghỉ sẽ liên hệ với bạn sau khi đặt
                    phòng để hướng dẫn chuyển khoản.
                </div>
                <div className="mb-2">
                    Do dịch virus corona (COVID-19), các biện pháp an toàn và vệ
                    sinh bổ sung hiện đang được thực hiện tại chỗ nghỉ này.
                </div>
            </div>
        </div>
    );
};

export default Note;
