import React, { useEffect, useState } from "react";

import { AiFillPrinter } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
// import phieuNhapData from "./data"; // Dữ liệu phiếu nhập
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/Table";

const ListOrder = () => {
    const [expandedRow, setExpandedRow] = useState([]);

    const columns = [
        { key: "booking_id", label: "Mã đặt phòng" },
        { key: "status", label: "Trạng thái", isFilterable: true},
        { key: "booking_time", label: "Thời gian đặt" },
        { key: "check_in_time", label: "Thời gian nhận" },
        { key: "check_out_time", label: "Thời gian trả" },
        { key: "room_name", label: "Tên phòng" },
        { key: "customer_name", label: "Khách hàng", isFilterable: true },
        { key: "branch", label: "Chi nhánh" },
        { key: "total_price", label: "Tổng tiền hàng" },
        { key: "total_discounted_price", label: "Tổng sau giảm giá" },
        { key: "amount_paid", label: "Khách đã trả" },
        { key: "amount_due", label: "Còn cần trả" },
        {
            key: "button",
            label: "In",
            render: (row) => (
                <button
                    onClick={() => handlePrint(row)}
                    className="z-10 text-center mx-auto"
                >
                    <AiFillPrinter className="h-4 w-4" />
                </button>
            ),
        },
    ];
    const today = new Date().toISOString().split("T")[0];
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const defaultStartDate = sevenDaysAgo.toISOString().split("T")[0];
    const [startDate, setStartDate] = useState(defaultStartDate); // Ngày bắt đầu
    const [endDate, setEndDate] = useState(today);
    const data1 = [
        {
            booking_id: "DP000001",
            status: "Đã đặt",
            booking_time: "2024-04-19T13:52:00.000Z",
            check_in_time: "2024-04-24T13:52:00.000Z",
            check_out_time: "2024-04-26T13:52:00.000Z",
            room_name: "Phòng Suite",
            customer_name: "Phạm Minh D",
            branch: "Chi nhánh 1",
            total_price: "2,088,442 VND",
            total_discounted_price: "1,331,788 VND",
            amount_paid: "1,107,731 VND",
            amount_due: "224,057 VND",
        },
        {
            booking_id: "DP000002",
            status: "Đã đặt",
            booking_time: "2024-06-12T23:59:00.000Z",
            check_in_time: "2024-06-15T23:59:00.000Z",
            check_out_time: "2024-06-17T23:59:00.000Z",
            room_name: "Phòng 203",
            customer_name: "Trần Thị B",
            branch: "Chi nhánh 3",
            total_price: "4,600,220 VND",
            total_discounted_price: "4,483,420 VND",
            amount_paid: "619,335 VND",
            amount_due: "3,864,085 VND",
        },
        {
            booking_id: "DP000003",
            status: "Đã hủy",
            booking_time: "2024-03-15T05:46:00.000Z",
            check_in_time: "2024-03-16T05:46:00.000Z",
            check_out_time: "2024-03-22T05:46:00.000Z",
            room_name: "Phòng Suite",
            customer_name: "Võ Thị E",
            branch: "Chi nhánh 2",
            total_price: "3,899,743 VND",
            total_discounted_price: "3,726,278 VND",
            amount_paid: "291,184 VND",
            amount_due: "3,435,094 VND",
        },
        {
            booking_id: "DP000004",
            status: "Hoàn thành",
            booking_time: "2024-06-25T16:47:00.000Z",
            check_in_time: "2024-06-26T16:47:00.000Z",
            check_out_time: "2024-06-27T16:47:00.000Z",
            room_name: "Phòng 305",
            customer_name: "Lê Văn C",
            branch: "Chi nhánh 2",
            total_price: "3,677,295 VND",
            total_discounted_price: "3,147,950 VND",
            amount_paid: "1,856,786 VND",
            amount_due: "1,291,164 VND",
        },
        {
            booking_id: "DP000005",
            status: "Hoàn thành",
            booking_time: "2024-10-22T12:30:00.000Z",
            check_in_time: "2024-10-25T12:30:00.000Z",
            check_out_time: "2024-10-28T12:30:00.000Z",
            room_name: "Phòng Suite",
            customer_name: "Võ Thị E",
            branch: "Chi nhánh 3",
            total_price: "1,490,457 VND",
            total_discounted_price: "1,126,101 VND",
            amount_paid: "700,547 VND",
            amount_due: "425,554 VND",
        },
        {
            booking_id: "DP000006",
            status: "Đã hủy",
            booking_time: "2024-11-02T06:50:00.000Z",
            check_in_time: "2024-11-06T06:50:00.000Z",
            check_out_time: "2024-11-08T06:50:00.000Z",
            room_name: "Phòng 101",
            customer_name: "Phạm Minh D",
            branch: "Chi nhánh 2",
            total_price: "3,465,599 VND",
            total_discounted_price: "2,801,620 VND",
            amount_paid: "1,715,869 VND",
            amount_due: "1,085,751 VND",
        },
        {
            booking_id: "DP000007",
            status: "Đã đặt",
            booking_time: "2024-06-07T20:09:00.000Z",
            check_in_time: "2024-06-12T20:09:00.000Z",
            check_out_time: "2024-06-15T20:09:00.000Z",
            room_name: "Phòng VIP",
            customer_name: "Trần Thị B",
            branch: "Chi nhánh 2",
            total_price: "4,890,762 VND",
            total_discounted_price: "4,134,280 VND",
            amount_paid: "2,465,904 VND",
            amount_due: "1,668,376 VND",
        },
        {
            booking_id: "DP000008",
            status: "Đang xử lý",
            booking_time: "2024-08-26T23:43:00.000Z",
            check_in_time: "2024-08-31T23:43:00.000Z",
            check_out_time: "2024-09-03T23:43:00.000Z",
            room_name: "Phòng 101",
            customer_name: "Phạm Minh D",
            branch: "Chi nhánh 3",
            total_price: "2,094,671 VND",
            total_discounted_price: "1,708,758 VND",
            amount_paid: "1,166,898 VND",
            amount_due: "541,860 VND",
        },
        {
            booking_id: "DP000009",
            status: "Đang xử lý",
            booking_time: "2024-08-18T02:52:00.000Z",
            check_in_time: "2024-08-21T02:52:00.000Z",
            check_out_time: "2024-08-23T02:52:00.000Z",
            room_name: "Phòng 305",
            customer_name: "Nguyễn Văn A",
            branch: "Chi nhánh 1",
            total_price: "1,810,329 VND",
            total_discounted_price: "1,790,785 VND",
            amount_paid: "1,644,369 VND",
            amount_due: "146,416 VND",
        },
        {
            booking_id: "DP000010",
            status: "Đã đặt",
            booking_time: "2024-10-15T16:43:00.000Z",
            check_in_time: "2024-10-18T16:43:00.000Z",
            check_out_time: "2024-10-24T16:43:00.000Z",
            room_name: "Phòng 305",
            customer_name: "Lê Văn C",
            branch: "Chi nhánh 2",
            total_price: "4,953,817 VND",
            total_discounted_price: "4,123,926 VND",
            amount_paid: "1,749,447 VND",
            amount_due: "2,374,479 VND",
        },
    ];
    const [data, setData] = useState([]);
    const fetchStores = async (startDate, endDate) => {
        if (startDate && endDate) {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/admin/store?start='${startDate}'&end='${endDate}'`,
                    {
                        withCredentials: true,
                    }
                );

                if (response.status === 200) {
                    setData(response.data.store);
                    console.log("đã set", response.data.product);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    useEffect(() => {
        fetchStores(startDate, endDate);
    }, [startDate, endDate]);
    const handleDateChange = (newStartDate, newEndDate) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
    };
    const handleRowClick = (index) => {
        if (expandedRow.includes(index)) {
            setExpandedRow(
                expandedRow.filter((rowIndex) => rowIndex !== index)
            );
        } else {
            setExpandedRow([...expandedRow, index]);
        }
    };

    const handleIsFilters = () => {
        setExpandedRow([]);
    };

    const handlePrint = (row) => {
        console.log("In phiếu nhập:", row.maPhieu);
    };

    const handlePageChange = () => {
        setExpandedRow([]);
    };

    const renderExpandedRow = (row) => {
        console.log("hàng", row);
        // return (
        //     <div
        //         className={`transition-all duration-300 ml-20 ${
        //             expandedRow === null
        //                 ? "animate-fade-out"
        //                 : "animate-fade-in-down"
        //         }`}
        //     >
        //         <h3 className="font-bold mb-2">Chi tiết phiếu nhập</h3>
        //         <div className="flex gap-5 items-center">
        //             <div className="overflow-x-auto">
        //                 <table className="min-w-[700px] border border-gray-300">
        //                     <thead>
        //                         <tr>
        //                             <th className="py-2 px-4 border-b">
        //                                 Tên hàng hoá
        //                             </th>
        //                             <th className="py-2 px-4 border-b">
        //                                 Màu sắc
        //                             </th>
        //                             <th className="py-2 px-4 border-b">Size</th>
        //                             <th className="py-2 px-4 border-b">
        //                                 Số lượng
        //                             </th>
        //                             <th className="py-2 px-4 border-b">
        //                                 Giá nhập
        //                             </th>
        //                             <th className="py-2 px-4 border-b">
        //                                 Thành tiền
        //                             </th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {row.products.map((product, productIndex) =>
        //                             product.details.map(
        //                                 (detail, detailIndex) => {
        //                                     // Chỉ hiển thị tên sản phẩm nếu đây là dòng đầu tiên của sản phẩm đó
        //                                     const showProductName =
        //                                         detailIndex === 0;

        //                                     return (
        //                                         <tr
        //                                             key={`${product.product_id}-${detailIndex}`}
        //                                         >
        //                                             {showProductName && (
        //                                                 <td
        //                                                     className="py-2 px-4 border-b"
        //                                                     rowSpan={
        //                                                         product.details
        //                                                             .length
        //                                                     }
        //                                                 >
        //                                                     {
        //                                                         product.product_name
        //                                                     }
        //                                                 </td>
        //                                             )}
        //                                             <td className="py-2 px-4 border-b text-center">
        //                                                 {detail.color}
        //                                             </td>
        //                                             <td className="py-2 px-4 border-b text-center">
        //                                                 {detail.size ? (
        //                                                     detail.size
        //                                                 ) : (
        //                                                     <div className="italic">
        //                                                         (Không có size)
        //                                                     </div>
        //                                                 )}
        //                                             </td>
        //                                             <td className="py-2 px-4 border-b text-center">
        //                                                 {detail.stock}
        //                                             </td>
        //                                             <td className="py-2 px-4 border-b text-right">
        //                                                 {Math.round(
        //                                                     detail.price
        //                                                 ).toLocaleString(
        //                                                     "vi-VN"
        //                                                 )}
        //                                                 .000
        //                                             </td>
        //                                             <td className="py-2 px-4 border-b text-right">
        //                                                 {Math.round(
        //                                                     detail.total_price
        //                                                 ).toLocaleString(
        //                                                     "vi-VN"
        //                                                 )}
        //                                                 .000
        //                                             </td>
        //                                         </tr>
        //                                     );
        //                                 }
        //                             )
        //                         )}
        //                     </tbody>
        //                 </table>
        //             </div>
        //             <div className="w-[25%] p-2">
        //                 <div className="flex gap-2 items-center">
        //                     <div>
        //                         <MdAddCircleOutline className="w-6 h-6" />
        //                     </div>
        //                     <div>Tổng số lượng: {row.total_stock} </div>
        //                 </div>
        //                 <div className="flex gap-2 items-center my-3">
        //                     <div>
        //                         <MdFormatListBulletedAdd className="w-6 h-6" />
        //                     </div>
        //                     <div>
        //                         Tổng tiền:{" "}
        //                         {Math.round(row.total_price).toLocaleString(
        //                             "vi-VN"
        //                         )}
        //                         .000
        //                     </div>
        //                 </div>
        //                 {/* <div className="flex gap-2 items-center">
        //                     <div>
        //                         <GiConfirmed className="w-6 h-6" />
        //                     </div>
        //                     <div className="flex gap-1">
        //                         Trạng thái:{" "}
        //                         <div className="text-blue-700">
        //                             {row.trangThai}
        //                         </div>
        //                     </div>
        //                 </div>
        //                 {row.trangThai === "Đang chờ xác nhận" ? (
        //                     <div className="mt-3 flex justify-center">
        //                         <button
        //                             type="button"
        //                             className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        //                         >
        //                             Xác nhận
        //                         </button>
        //                     </div>
        //                 ) : null} */}
        //             </div>
        //         </div>
        //     </div>
        // );
    };
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate("/store-receipt");
    };
    return (
        <>
            <Table
                title="Đặt phòng"
                // contentButton="Thêm phiếu nhập"
                // handleAdd={handleAdd}
                columns={columns}
                labelFilter="Lọc"
                handleFetch={fetchStores}
                data={data1}
                expandedRow={expandedRow}
                onRowClick={handleRowClick}
                onPageChange={handlePageChange}
                renderExpandedRow={renderExpandedRow}
                handleIsFilters={handleIsFilters}
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
            />
        </>
    );
};

export default ListOrder;
