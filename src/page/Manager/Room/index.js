import React, { useState } from "react";
import Table from "../../../components/Table";
import { AiFillPrinter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddRoomType from "./AddRoomType";
import AddRoom from "./AddRoom";
const Room = () => {
    const [selectedTab, setSelectedTab] = useState("loaiPhong"); // Tab mặc định
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    const columns = [
        { key: "category_id", label: "Mã hạng phòng" },
        { key: "category_name", label: "Tên hạng phòng" },
        { key: "room_count", label: "SL phòng" },
        { key: "hourly_price", label: "Giá giờ" },
        { key: "daily_price", label: "Giá cả ngày" },
        { key: "overnight_price", label: "Giá qua đêm" },
        { key: "status", label: "Trạng thái", isFilterable: true },
        { key: "branch", label: "Chi nhánh" },
        {
            key: "button",
            label: "Hành động",
            render: (row) => (
                <button
                    // onClick={() => handleAction(row)}
                    className="z-10 text-center mx-auto"
                >
                    <AiFillPrinter className="h-4 w-4" />
                </button>
            ),
        },
    ];
    const columns1 = [
        { key: "room_name", label: "Tên phòng" },
        { key: "category_name", label: "Hạng phòng", isFilterable: true },
        { key: "area", label: "Khu vực" },
        { key: "hourly_price", label: "Giá giờ" },
        { key: "daily_price", label: "Giá cả ngày" },
        { key: "overnight_price", label: "Giá qua đêm" },
        { key: "status", label: "Trạng thái", isFilterable: true },
        { key: "note", label: "Ghi chú" },
        { key: "branch", label: "Chi nhánh" },
    ];
    const data2 = [
        {
            category_id: "C001",
            category_name: "Double Bedroom",
            room_count: 3,
            hourly_price: "180,000 VND",
            daily_price: "720,000 VND",
            overnight_price: "720,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C002",
            category_name: "Single Bedroom",
            room_count: 3,
            hourly_price: "150,000 VND",
            daily_price: "600,000 VND",
            overnight_price: "600,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C003",
            category_name: "Triple Bedroom",
            room_count: 3,
            hourly_price: "250,000 VND",
            daily_price: "1,000,000 VND",
            overnight_price: "1,000,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C004",
            category_name: "Twin Bedroom",
            room_count: 3,
            hourly_price: "200,000 VND",
            daily_price: "800,000 VND",
            overnight_price: "800,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C005",
            category_name: "Suite Room",
            room_count: 5,
            hourly_price: "500,000 VND",
            daily_price: "2,000,000 VND",
            overnight_price: "2,000,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C006",
            category_name: "Deluxe Room",
            room_count: 4,
            hourly_price: "400,000 VND",
            daily_price: "1,600,000 VND",
            overnight_price: "1,600,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh 1",
        },
        {
            category_id: "C007",
            category_name: "Family Room",
            room_count: 3,
            hourly_price: "350,000 VND",
            daily_price: "1,400,000 VND",
            overnight_price: "1,400,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh 2",
        },
        {
            category_id: "C008",
            category_name: "Presidential Suite",
            room_count: 2,
            hourly_price: "1,000,000 VND",
            daily_price: "4,000,000 VND",
            overnight_price: "4,000,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C009",
            category_name: "Studio Room",
            room_count: 5,
            hourly_price: "300,000 VND",
            daily_price: "1,200,000 VND",
            overnight_price: "1,200,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh 3",
        },
        {
            category_id: "C010",
            category_name: "Standard Room",
            room_count: 6,
            hourly_price: "250,000 VND",
            daily_price: "1,000,000 VND",
            overnight_price: "1,000,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C011",
            category_name: "Luxury Room",
            room_count: 2,
            hourly_price: "600,000 VND",
            daily_price: "2,400,000 VND",
            overnight_price: "2,400,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C012",
            category_name: "Economy Room",
            room_count: 10,
            hourly_price: "120,000 VND",
            daily_price: "480,000 VND",
            overnight_price: "480,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh 1",
        },
        {
            category_id: "C013",
            category_name: "Queen Room",
            room_count: 3,
            hourly_price: "450,000 VND",
            daily_price: "1,800,000 VND",
            overnight_price: "1,800,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C014",
            category_name: "King Room",
            room_count: 4,
            hourly_price: "700,000 VND",
            daily_price: "2,800,000 VND",
            overnight_price: "2,800,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
        {
            category_id: "C015",
            category_name: "Penthouse Room",
            room_count: 1,
            hourly_price: "1,500,000 VND",
            daily_price: "6,000,000 VND",
            overnight_price: "6,000,000 VND",
            status: "Đang kinh doanh",
            branch: "Chi nhánh trung tâm",
        },
    ];
    const data3 = [
        {
            room_name: "P.503",
            category_name: "Phòng 02 giường đơn",
            area: "Tầng 2",
            hourly_price: "200,000 VND",
            daily_price: "800,000 VND",
            overnight_price: "800,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.502",
            category_name: "Phòng 02 giường đơn",
            area: "Tầng 2",
            hourly_price: "200,000 VND",
            daily_price: "800,000 VND",
            overnight_price: "800,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.501",
            category_name: "Phòng 02 giường đơn",
            area: "Tầng 2",
            hourly_price: "200,000 VND",
            daily_price: "800,000 VND",
            overnight_price: "800,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.403",
            category_name: "Phòng 01 giường đôi và 1 giường đơn cho 3 người",
            area: "Tầng 2",
            hourly_price: "250,000 VND",
            daily_price: "1,000,000 VND",
            overnight_price: "1,000,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.402",
            category_name: "Phòng 01 giường đôi và 1 giường đơn cho 3 người",
            area: "Tầng 2",
            hourly_price: "250,000 VND",
            daily_price: "1,000,000 VND",
            overnight_price: "1,000,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.401",
            category_name: "Phòng 01 giường đôi và 1 giường đơn cho 3 người",
            area: "Tầng 2",
            hourly_price: "250,000 VND",
            daily_price: "1,000,000 VND",
            overnight_price: "1,000,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.303",
            category_name: "Phòng 01 giường đơn",
            area: "Tầng 2",
            hourly_price: "150,000 VND",
            daily_price: "600,000 VND",
            overnight_price: "600,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.302",
            category_name: "Phòng 01 giường đơn",
            area: "Tầng 2",
            hourly_price: "150,000 VND",
            daily_price: "600,000 VND",
            overnight_price: "600,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.301",
            category_name: "Phòng 01 giường đơn",
            area: "Tầng 2",
            hourly_price: "150,000 VND",
            daily_price: "600,000 VND",
            overnight_price: "600,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.203",
            category_name: "Phòng 01 giường đôi cho 2 người",
            area: "Tầng 2",
            hourly_price: "180,000 VND",
            daily_price: "720,000 VND",
            overnight_price: "720,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.202",
            category_name: "Phòng 01 giường đôi cho 2 người",
            area: "Tầng 2",
            hourly_price: "180,000 VND",
            daily_price: "720,000 VND",
            overnight_price: "720,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
        {
            room_name: "P.201",
            category_name: "Phòng 01 giường đôi cho 2 người",
            area: "Tầng 2",
            hourly_price: "180,000 VND",
            daily_price: "720,000 VND",
            overnight_price: "720,000 VND",
            status: "Đang hoạt động",
            note: "",
            branch: "Chi nhánh trung tâm",
        },
    ];
    const [expandedRow, setExpandedRow] = useState([]);
    const [expandedRowList, setExpandedRowList] = useState([]);
    const handleRowClick = (index) => {
        if (expandedRow.includes(index)) {
            setExpandedRow(
                expandedRow.filter((rowIndex) => rowIndex !== index)
            );
        } else {
            setExpandedRow([...expandedRow, index]);
        }
    };
    const handleRowClickList = (index) => {
        if (expandedRowList.includes(index)) {
            setExpandedRowList(
                expandedRowList.filter((rowIndex) => rowIndex !== index)
            );
        } else {
            setExpandedRowList([...expandedRowList, index]);
        }
    };
    const handlePrint = (row) => {
        console.log("In phiếu nhập:", row.maPhieu);
    };
    const handlePageChange = () => {
        setExpandedRow([]);
        setExpandedRowList([]);
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
    const renderExpandedRowClick = (row) => {
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

    const [isModalOpenAddType, setIsModalOpenAddType] = useState(false);
    const [isModalOpenAddRoom, setIsModalOpenAddRoom] = useState(false);
    const handleAddType = () => {
        setIsModalOpenAddType(true);
    };

    const handleCloseModalAddType = () => {
        setIsModalOpenAddType(false);
    };
    const handleAddRoom = () => {
        setIsModalOpenAddRoom(true);
    };
    const handleCloseModalAddRoom = () => {
        setIsModalOpenAddRoom(false);
    };
    return (
        <div>
            <div className="flex flex-col mb-4">
                <div className="flex mb-4 gap-2">
                    <button
                        onClick={() => handleTabClick("loaiPhong")}
                        className={`px-4 py-2 rounded font-semibold ${
                            selectedTab === "loaiPhong"
                                ? "bg-cyan-600 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        Loại phòng
                    </button>
                    <button
                        onClick={() => handleTabClick("danhSachPhong")}
                        className={`px-4 py-2 rounded font-semibold ${
                            selectedTab === "danhSachPhong"
                                ? "bg-cyan-600 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        Danh sách phòng
                    </button>
                </div>
                {selectedTab === "loaiPhong" ? (
                    <Table
                        title="Loại phòng"
                        contentButton="Thêm loại phòng"
                        handleAdd={handleAddType}
                        columns={columns}
                        // handleFetch={fetchStores}
                        data={data2}
                        expandedRow={expandedRow}
                        onRowClick={handleRowClick}
                        onPageChange={handlePageChange}
                        renderExpandedRow={renderExpandedRow}
                    />
                ) : (
                    <Table
                        title="Danh sách phòng"
                        contentButton="Thêm phòng"
                        handleAdd={handleAddRoom}
                        columns={columns1}
                        // handleFetch={fetchStores}
                        data={data3}
                        expandedRow={expandedRowList}
                        onRowClick={handleRowClickList}
                        onPageChange={handlePageChange}
                        renderExpandedRow={renderExpandedRow}
                    />
                )}
                {isModalOpenAddType && (
                    <div
                        onClick={()=> handleCloseModalAddType()}
                        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    >
                        <div className="bg-white rounded-lg w-[80%] h-[90%]  relative" onClick={(e)=> (e.stopPropagation())}>
                            <AddRoomType
                                handleClose={handleCloseModalAddType}
                            ></AddRoomType>
                        </div>
                    </div>
                )}
                {isModalOpenAddRoom && (
                    <div
                        onClick={()=> handleCloseModalAddRoom()}
                        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    >
                        <div className="bg-white rounded-lg w-[50%] h-[90%]  relative" onClick={(e)=> (e.stopPropagation())}>
                            <AddRoom
                                handleClose={handleCloseModalAddRoom}
                            ></AddRoom>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Room;
