import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import axios from "axios";
import { useParams } from "react-router";


const BookingDetails = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    const {bookingId} = useParams()
    console.log("BookingDetails", bookingId)
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/receptionist/bookings/${bookingId}`,
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
    console.log("data", data);
    const outputData = {
        ...data,
        room: data.map((room) => {
       
            const roomDetailsGrouped = room.details.reduce((acc, detail) => {
                
                if (!acc[detail.room_name]) {
                    acc[detail.room_name] = {
                        room_name: detail.room_name,
                        detail: [],
                    };
                }

                const { room_name, ...rest } = detail;

                acc[detail.room_name].detail.push(rest);
                return acc;
            }, {});

            const groupedDetails = Object.values(roomDetailsGrouped);

            return {
                ...room,
                details: groupedDetails,
            };
        }),
    };
    

  
    
    const getFirstBookingDetailId = (data) => {
        if (Array.isArray(data) && data.length > 0) {
            const firstRoom = data[0];
            if (firstRoom.details && Array.isArray(firstRoom.details) && firstRoom.details.length > 0) {
                return firstRoom.details[0].booking_detail_id;
            }
        }
        return null;
    };

  
    const initialBookingDetailId = getFirstBookingDetailId(data);

    const [bookingDetailId, setBookingDetailId] = useState(initialBookingDetailId);
    useEffect(() => {
        const firstBookingDetailId = getFirstBookingDetailId(data);
        if (firstBookingDetailId !== null) {
            setBookingDetailId(firstBookingDetailId);
        }
    }, [data]);

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
