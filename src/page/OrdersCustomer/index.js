import axios from "axios";
import React, { useState, useEffect } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { GiEmptyHourglass } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { RiListUnordered } from "react-icons/ri";
import Button from "../../components/Button";
const OrdersCustomer = () => {
    const data = [
        {
            order_info: {
                hotel_name: "Khách sạn Đỗ Bá",
                booking_time: "2024-11-30T08:00:00",
                check_in_time: "2024-11-30T14:00:00",
                check_out_time: "2024-12-01T12:00:00",
                status: "ĐÃ ĐẶT TRƯỚC",
                rooms: [
                    {
                        room_code: "R001",
                        room_name: "Phòng Deluxe",
                        quantity: 1,
                        unit_price: 1000000,
                        discount: 100000,
                        total_price: 900000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R002",
                        room_name: "Phòng Standard",
                        quantity: 2,
                        unit_price: 700000,
                        discount: 50000,
                        total_price: 1350000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S001",
                    room_code: "R001",
                    service_name: "Bữa sáng",
                    quantity: 1,
                    unit_price: 100000,
                    discount: 20000,
                    total_price: 80000,
                    payment_status: "Chưa thanh toán",
                },
                {
                    service_code: "S002",
                    room_code: "R002",
                    service_name: "Dịch vụ giặt ủi",
                    quantity: 2,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 90000,
                    payment_status: "Chưa thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Mường Thanh",
                booking_time: "2024-11-29T14:15:00",
                check_in_time: "2024-11-29T15:00:00",
                check_out_time: "2024-11-30T11:00:00",
                status: "ĐÃ TRẢ",
                rooms: [
                    {
                        room_code: "R003",
                        room_name: "Phòng Suite",
                        quantity: 1,
                        unit_price: 1500000,
                        discount: 150000,
                        total_price: 1350000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R004",
                        room_name: "Phòng Executive",
                        quantity: 1,
                        unit_price: 1200000,
                        discount: 100000,
                        total_price: 1100000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S003",
                    room_code: "R003",
                    service_name: "Dịch vụ spa",
                    quantity: 1,
                    unit_price: 300000,
                    discount: 50000,
                    total_price: 250000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S004",
                    room_code: "R004",
                    service_name: "Chuyến xe đưa đón sân bay",
                    quantity: 1,
                    unit_price: 150000,
                    discount: 20000,
                    total_price: 130000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Đỗ Phước",
                booking_time: "2024-11-28T10:30:00",
                check_in_time: "2024-11-28T14:00:00",
                check_out_time: "2024-11-29T12:00:00",
                status: "ĐÃ TRẢ",
                rooms: [
                    {
                        room_code: "R005",
                        room_name: "Phòng Junior",
                        quantity: 2,
                        unit_price: 800000,
                        discount: 50000,
                        total_price: 1500000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R006",
                        room_name: "Phòng Luxury",
                        quantity: 1,
                        unit_price: 1800000,
                        discount: 200000,
                        total_price: 1600000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S005",
                    room_code: "R005",
                    service_name: "Bữa sáng",
                    quantity: 2,
                    unit_price: 100000,
                    discount: 15000,
                    total_price: 170000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S006",
                    room_code: "R006",
                    service_name: "Dịch vụ spa",
                    quantity: 1,
                    unit_price: 350000,
                    discount: 30000,
                    total_price: 320000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn cao cấp",
                booking_time: "2024-11-27T19:00:00",
                check_in_time: "2024-11-27T20:00:00",
                check_out_time: "2024-11-28T11:00:00",
                status: "ĐÃ ĐẶT TRƯỚC",
                rooms: [
                    {
                        room_code: "R007",
                        room_name: "Phòng Executive",
                        quantity: 1,
                        unit_price: 1500000,
                        discount: 200000,
                        total_price: 1300000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R008",
                        room_name: "Phòng Ocean View",
                        quantity: 1,
                        unit_price: 2000000,
                        discount: 250000,
                        total_price: 1750000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S007",
                    room_code: "R007",
                    service_name: "Dịch vụ giặt ủi",
                    quantity: 2,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 90000,
                    payment_status: "Chưa thanh toán",
                },
                {
                    service_code: "S008",
                    room_code: "R008",
                    service_name: "Chuyến xe đưa đón sân bay",
                    quantity: 1,
                    unit_price: 150000,
                    discount: 0,
                    total_price: 150000,
                    payment_status: "Chưa thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Du lịch Á Châu",
                booking_time: "2024-11-26T09:30:00",
                check_in_time: "2024-11-26T14:00:00",
                check_out_time: "2024-11-27T12:00:00",
                status: "ĐANG SỬ DỤNG",
                rooms: [
                    {
                        room_code: "R009",
                        room_name: "Phòng Garden View",
                        quantity: 1,
                        unit_price: 900000,
                        discount: 50000,
                        total_price: 850000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R010",
                        room_name: "Phòng Penthouse",
                        quantity: 1,
                        unit_price: 2500000,
                        discount: 300000,
                        total_price: 2200000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S009",
                    room_code: "R009",
                    service_name: "Bữa sáng",
                    quantity: 1,
                    unit_price: 100000,
                    discount: 20000,
                    total_price: 80000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S010",
                    room_code: "R010",
                    service_name: "Dịch vụ xông hơi",
                    quantity: 2,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 90000,
                    payment_status: "Chưa thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Đỗ Phủ",
                booking_time: "2024-11-25T15:30:00",
                check_in_time: "2024-11-25T16:00:00",
                check_out_time: "2024-11-26T10:00:00",
                status: "ĐÃ TRẢ",
                rooms: [
                    {
                        room_code: "R011",
                        room_name: "Phòng Superior",
                        quantity: 3,
                        unit_price: 950000,
                        discount: 100000,
                        total_price: 2850000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S011",
                    room_code: "R011",
                    service_name: "Dịch vụ xông hơi",
                    quantity: 3,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 135000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S012",
                    room_code: "R011",
                    service_name: "Bữa sáng",
                    quantity: 3,
                    unit_price: 100000,
                    discount: 15000,
                    total_price: 255000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Đỗ Bá",
                booking_time: "2024-11-24T14:00:00",
                check_in_time: "2024-11-24T18:00:00",
                check_out_time: "2024-11-25T10:00:00",
                status: "ĐÃ ĐẶT TRƯỚC",
                rooms: [
                    {
                        room_code: "R012",
                        room_name: "Phòng Luxury",
                        quantity: 1,
                        unit_price: 1800000,
                        discount: 200000,
                        total_price: 1600000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R013",
                        room_name: "Phòng Suite",
                        quantity: 2,
                        unit_price: 1500000,
                        discount: 150000,
                        total_price: 2700000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S013",
                    room_code: "R012",
                    service_name: "Dịch vụ spa",
                    quantity: 1,
                    unit_price: 350000,
                    discount: 50000,
                    total_price: 300000,
                    payment_status: "Chưa thanh toán",
                },
                {
                    service_code: "S014",
                    room_code: "R013",
                    service_name: "Dịch vụ giặt ủi",
                    quantity: 3,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 135000,
                    payment_status: "Chưa thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Resort",
                booking_time: "2024-11-23T13:00:00",
                check_in_time: "2024-11-23T15:00:00",
                check_out_time: "2024-11-24T11:00:00",
                status: "ĐÃ TRẢ",
                rooms: [
                    {
                        room_code: "R014",
                        room_name: "Phòng Standard",
                        quantity: 2,
                        unit_price: 700000,
                        discount: 50000,
                        total_price: 1350000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R015",
                        room_name: "Phòng Garden View",
                        quantity: 1,
                        unit_price: 900000,
                        discount: 50000,
                        total_price: 850000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S015",
                    room_code: "R014",
                    service_name: "Dịch vụ giặt ủi",
                    quantity: 3,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 135000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S016",
                    room_code: "R015",
                    service_name: "Chuyến xe đưa đón sân bay",
                    quantity: 1,
                    unit_price: 150000,
                    discount: 20000,
                    total_price: 130000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Thuận Phước",
                booking_time: "2024-11-22T12:00:00",
                check_in_time: "2024-11-22T14:00:00",
                check_out_time: "2024-11-23T10:00:00",
                status: "ĐANG SỬ DỤNG",
                rooms: [
                    {
                        room_code: "R016",
                        room_name: "Phòng Deluxe",
                        quantity: 1,
                        unit_price: 1000000,
                        discount: 100000,
                        total_price: 900000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R017",
                        room_name: "Phòng Suite",
                        quantity: 1,
                        unit_price: 1500000,
                        discount: 150000,
                        total_price: 1350000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S017",
                    room_code: "R016",
                    service_name: "Bữa sáng",
                    quantity: 1,
                    unit_price: 100000,
                    discount: 20000,
                    total_price: 80000,
                    payment_status: "Chưa thanh toán",
                },
                {
                    service_code: "S018",
                    room_code: "R017",
                    service_name: "Dịch vụ xông hơi",
                    quantity: 2,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 90000,
                    payment_status: "Chưa thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn MuayThai",
                booking_time: "2024-11-21T18:30:00",
                check_in_time: "2024-11-21T20:00:00",
                check_out_time: "2024-11-22T12:00:00",
                status: "ĐÃ TRẢ",
                rooms: [
                    {
                        room_code: "R018",
                        room_name: "Phòng Luxury",
                        quantity: 2,
                        unit_price: 1800000,
                        discount: 200000,
                        total_price: 3200000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S019",
                    room_code: "R018",
                    service_name: "Dịch vụ giặt ủi",
                    quantity: 2,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 90000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S020",
                    room_code: "R018",
                    service_name: "Dịch vụ spa",
                    quantity: 1,
                    unit_price: 300000,
                    discount: 50000,
                    total_price: 250000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn Bá Kiên",
                booking_time: "2024-11-20T09:00:00",
                check_in_time: "2024-11-20T15:00:00",
                check_out_time: "2024-11-21T11:00:00",
                status: "ĐÃ ĐẶT TRƯỚC",
                rooms: [
                    {
                        room_code: "R019",
                        room_name: "Phòng Junior",
                        quantity: 1,
                        unit_price: 800000,
                        discount: 50000,
                        total_price: 750000,
                        payment_status: "Chưa thanh toán",
                    },
                    {
                        room_code: "R020",
                        room_name: "Phòng Penthouse",
                        quantity: 1,
                        unit_price: 2500000,
                        discount: 300000,
                        total_price: 2200000,
                        payment_status: "Chưa thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S021",
                    room_code: "R019",
                    service_name: "Bữa sáng",
                    quantity: 1,
                    unit_price: 100000,
                    discount: 20000,
                    total_price: 80000,
                    payment_status: "Chưa thanh toán",
                },
                {
                    service_code: "S022",
                    room_code: "R020",
                    service_name: "Chuyến xe đưa đón sân bay",
                    quantity: 1,
                    unit_price: 150000,
                    discount: 0,
                    total_price: 150000,
                    payment_status: "Chưa thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn 5 sao",
                booking_time: "2024-11-19T17:45:00",
                check_in_time: "2024-11-19T19:00:00",
                check_out_time: "2024-11-20T10:00:00",
                status: "ĐANG SỬ DỤNG",
                rooms: [
                    {
                        room_code: "R021",
                        room_name: "Phòng Ocean View",
                        quantity: 2,
                        unit_price: 2000000,
                        discount: 250000,
                        total_price: 3500000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S023",
                    room_code: "R021",
                    service_name: "Dịch vụ giặt ủi",
                    quantity: 3,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 135000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S024",
                    room_code: "R021",
                    service_name: "Dịch vụ xông hơi",
                    quantity: 2,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 90000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
        {
            order_info: {
                hotel_name: "Khách sạn 4 sao Đỗ Bá",
                booking_time: "2024-11-18T08:30:00",
                check_in_time: "2024-11-18T14:00:00",
                check_out_time: "2024-11-19T12:00:00",
                status: "ĐÃ TRẢ",
                rooms: [
                    {
                        room_code: "R022",
                        room_name: "Phòng Deluxe",
                        quantity: 1,
                        unit_price: 1000000,
                        discount: 100000,
                        total_price: 900000,
                        payment_status: "Đã thanh toán",
                    },
                    {
                        room_code: "R023",
                        room_name: "Phòng Standard",
                        quantity: 1,
                        unit_price: 700000,
                        discount: 50000,
                        total_price: 650000,
                        payment_status: "Đã thanh toán",
                    },
                ],
            },
            services: [
                {
                    service_code: "S025",
                    room_code: "R022",
                    service_name: "Dịch vụ xông hơi",
                    quantity: 1,
                    unit_price: 50000,
                    discount: 5000,
                    total_price: 45000,
                    payment_status: "Đã thanh toán",
                },
                {
                    service_code: "S026",
                    room_code: "R023",
                    service_name: "Chuyến xe đưa đón sân bay",
                    quantity: 1,
                    unit_price: 150000,
                    discount: 0,
                    total_price: 150000,
                    payment_status: "Đã thanh toán",
                },
            ],
        },
    ];
    const [orders, setOrders] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/customer/booking",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                setOrders(response.data.booking);
            }
        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const [dataOrders, setDataOrders] = useState([]);
    const [groupedOrders, setGroupedOrders] = useState([]);
    const [currentStatus, setCurrentStatus] = useState("pending");
    const [showModal, setShowModal] = useState(false);
    const [showRateModal, setShowRateModal] = useState(false);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState("");

    const [selectedOrderDetailId, setSelectedOrderDetailId] = useState(null);
    const ratingDescriptions = [
        "Tệ",
        "Không hài lòng",
        "Bình thường",
        "Hài lòng",
        "Tuyệt vời",
    ];
    const [ratingDescription, setRatingDescription] = useState("");
    const filterOrdersByStatus = (status) => {
        return orders.filter(order => order.booking_status.trim() === status);
    };
    
   
    const fetchOrdersByStatus = (status) => {
        const filteredOrders = filterOrdersByStatus(status);
        console.log("dữ liệu",filteredOrders)
        setDataOrders(filteredOrders);
    };
    
  
    const handleStatusClick = (status) => {
        setCurrentStatus(status); 
        fetchOrdersByStatus(status); 
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        if (orders.length > 0) {
            fetchOrdersByStatus("pending");
        }
    }, [orders]);
    const calculateTotalPriceByOrderId = () => {
        const totalPriceByOrderId = {};
        groupedOrders.forEach((order) => {
            const orderId = order.id;
            let totalPrice = 0;
            order.OrderDetail.forEach((detail) => {
                const price = detail.price;
                const quantity = detail.quantity;
                totalPrice += price * quantity; // Multiply price by quantity
            });
            totalPriceByOrderId[orderId] = totalPrice;
        });
        return totalPriceByOrderId;
    };
    const totalPriceByOrderId = calculateTotalPriceByOrderId();
    const [orderIdToCancel, setOrderIdToCancel] = useState(null);
    const handleCancelOrder = (orderId) => {
        setShowModal(true);
        setOrderIdToCancel(orderId);
    };
    const cancelOrder = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:8080/api/customer/order/${orderIdToCancel}`
            );
            if (response.data.succes) {
                fetchOrdersByStatus(currentStatus);
                setShowModal(false);
                toast.success("Hủy đơn hàng thành công", {
                    autoClose: 1000,
                });
            }
        } catch (error) {
            console.error("Xóa đơn hàng không thành công", error);
            setShowModal(false);
        }
    };
    const handleRateProduct = (OrderDetailId) => {
        setSelectedOrderDetailId(OrderDetailId);
        setShowRateModal(true);
    };
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleBeforeUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("images", file);
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8080/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setImageUrl(data[0]);
        } catch (error) {
            console.error("Tải ảnh không thành công", error);
        }
        setIsLoading(false);
    };
    const handleRate = async (status) => {
        if (!rating || !comment || !selectedOrderDetailId) {
            toast.warning("Vui lòng nhập và chọn đầy đủ thông tin", {
                autoClose: 1000,
            });
        } else {
            const requestBody = {
                startPoint: rating,
                comment: comment,
                OrderDetailId: selectedOrderDetailId,
                image: imageUrl,
            };

            try {
                const response = await axios.post(
                    "http://localhost:8080/api/customer/rating",
                    requestBody
                );
                const data = response.data;
                if (data.succes) {
                    setRating(null);
                    setComment("");
                    setImageUrl("");
                    setHover(null);
                    setShowRateModal(false);
                    setRatingDescription(false);
                    fetchOrdersByStatus(status);
                    toast.success("Đánh giá sản phẩm thành công", {
                        autoClose: 1000,
                    });
                }
            } catch (error) {
                toast.warning("Bạn đã đánh giá sản phẩm này", {
                    autoClose: 1000,
                });
            }
        }
    };
    const handleRating = (roomCode) => {
        
    };
    return (
        <div className="">
            <div className="flex flex-row items-center justify-center">
                <RiListUnordered className="mr-2 h-6 w-6" />
                <div className="my-5 text-2xl font-bold">ĐƠN ĐẶT PHÒNG</div>
            </div>
            <hr className="mb-3 flex" />
            <div className="flex justify-around">
                <a
                    onClick={() => handleStatusClick("pending")}
                    className={`group text-black transition-all duration-300 ease-in-out focus:text-pink-500 ${
                        currentStatus === "pending" && "text-pink-500"
                    }`}
                    href="#"
                >
                    <span className="bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-pink-500 group-hover:bg-[length:100%_2px]">
                        ĐÃ ĐẶT TRƯỚC
                    </span>
                </a>
                <a
                    onClick={() => handleStatusClick("booked")}
                    className={`group text-black transition-all duration-300 ease-in-out focus:text-pink-500 ${
                        currentStatus === "booked" && "text-pink-500"
                    }`}
                    href="#"
                >
                    <span className="bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-pink-500 group-hover:bg-[length:100%_2px]">
                        ĐANG SỬ DỤNG
                    </span>
                </a>

                <a
                    onClick={() => handleStatusClick("completed")}
                    className={`group text-black transition-all duration-300 ease-in-out focus:text-pink-500 ${
                        currentStatus === "completed" && "text-pink-500"
                    }`}
                    href="#"
                >
                    <span className="bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-pink-500 group-hover:bg-[length:100%_2px]">
                        ĐÃ TRẢ
                    </span>
                </a>
                <a
                    onClick={() => handleStatusClick("cancelled")}
                    className={`group text-black transition-all duration-300 ease-in-out focus:text-pink-500 ${
                        currentStatus === "cancelled" && "text-pink-500"
                    }`}
                    href="#"
                >
                    <span className="bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-pink-500 group-hover:bg-[length:100%_2px]">
                        ĐÃ HỦY
                    </span>
                </a>
            </div>
            <hr className="my-3 flex" />
            <div>
                {currentStatus && dataOrders && (
                    <div>
                        {dataOrders.length > 0 ? (
                            dataOrders.map((order, orderIndex) => (
                                <div
                                    key={orderIndex}
                                    className="mb-8 p-4 border rounded-md shadow-md text-base"
                                >
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="font-medium">
                                            Tên khách sạn/Nhà nghỉ:
                                        </div>
                                        <div className="text-blue-800 font-medium">
                                            {order?.name_hotel}
                                        </div>
                                    </div>
                                    
                                    {/*  */}
                                    
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center p-40">
                                <GiEmptyHourglass className="my-2 h-10 w-10" />
                                <div className="text-center text-xl text-gray-500">
                                    Chưa có đơn đặt phòng
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrdersCustomer;
