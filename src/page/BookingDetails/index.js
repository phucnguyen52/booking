import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import axios from "axios";

const BookingDetails = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/receptionist/bookings/2",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                setData(response.data.room);
            }
        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const outputData = {
        ...data, // Sao chép status, message, và các trường khác
        room: data.map((room) => {
            // Nhóm các chi tiết theo room_name
            const roomDetailsGrouped = room.details.reduce((acc, detail) => {
                // Kiểm tra nếu tên phòng đã có trong accumulator chưa
                if (!acc[detail.room_name]) {
                    acc[detail.room_name] = {
                        room_name: detail.room_name,
                        detail: [],
                    };
                }

                // Loại bỏ room_name khỏi detail
                const { room_name, ...rest } = detail;

                // Thêm chi tiết vào nhóm phòng tương ứng
                acc[detail.room_name].detail.push(rest);
                return acc;
            }, {});

            // Chuyển các nhóm chi tiết thành mảng
            const groupedDetails = Object.values(roomDetailsGrouped);

            return {
                ...room,
                details: groupedDetails,
            };
        }),
    };
    console.log("out",outputData)
    const [bookingDetailId, setBookingDetailId] = useState(5);
    const handleSetId = (id) => {
        setBookingDetailId(id);
    };
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceSelection = (service) => {
        setSelectedService(service);
    };
    const [total, setTotal] = useState(0);
    const [remainingTotal, setRemainingTotal] = useState(0);
    const [roomTotals, setRoomTotals] = useState([]);
    const updateTotals = (totalAmount, remainingAmount,roomTotal) => {
      setTotal(totalAmount);
      setRemainingTotal(remainingAmount);
      setRoomTotals(roomTotal);
    };
    console.log('updateTotals', total, remainingTotal, roomTotals);
    return (
        <div className="flex max-h-screen p-3 gap-3 w-full">
            <Sidebar
                onAddItem={handleAddItem}
                data={outputData}
                handleSetId={handleSetId}
                onSelectService={handleServiceSelection}
                total={total} 
                remainingTotal={remainingTotal}
                roomTotals={roomTotals} 
            />
            <Content
                items={items}
                className="h-full"
                data={data}
                idBookingDetail={bookingDetailId}
                selectedService={selectedService}
                handleFetch={fetchData}
                onUpdateTotals={updateTotals}
            />
        </div>
    );
};

export default BookingDetails;
