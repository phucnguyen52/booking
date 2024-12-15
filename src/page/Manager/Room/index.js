import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddRoomType from "./AddRoomType";
import AddRoom from "./AddRoom";
import axios from "axios";
const Room = () => {
    const [selectedTab, setSelectedTab] = useState("loaiPhong");
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    const [roomType, setRoomType] = useState([]);
    const fetchRoomType = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/receptionist/room",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                
                setRoomType(response.data.room);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        fetchRoomType();
        fetchRoom()
    }, []);
    const columns = [
        { key: "id", label: "Mã loại phòng" },
        { key: "room_name", label: "Tên loại phòng" },
        { key: "adult_count", label: "Số lượng người" },
        { key: "price_per_night", label: "Giá" },
        { key: "room_count", label: "Số lượng phòng" },
        {
            key: "chỉnh sửa",
            label: "Chỉnh sửa",
            render: (row) => (
                <button
                    // onClick={(event) => handleEditServices(event, row)}
                    className="z-10 text-center mx-auto p-2 hover:bg-slate-200 hover:rounded-md"
                >
                    <FaEdit className="h-6 w-6" />
                </button>
            ),
        },
        {
            key: "xóa",
            label: "Xóa",
            render: (row) => (
                <button
                    // onClick={(event) => handleDeleteServices(event, row)}
                    className="z-10 text-center mx-auto p-2 hover:bg-slate-200 hover:rounded-md"
                >
                    <MdDeleteForever className="h-6 w-6" />
                </button>
            ),
        },
    ];
    const [room, setRoom] = useState([]);
    const fetchRoom = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/receptionist/room_detail",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                setRoom(response.data.room);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    const columns1 = [
        { key: "room_number", label: "Số phòng" },
        { key: "room_name", label: "Loại phòng", isFilterable: true },
        { key: "price_per_night", label: "Giá phòng" },
        {
            key: "edit",
            label: "Chỉnh sửa",
            render: (row) => (
                <button
                    // onClick={(event) => handleEditServices(event, row)}
                    className="z-10 text-center mx-auto p-2 hover:bg-slate-200 hover:rounded-md"
                >
                    <FaEdit className="h-6 w-6" />
                </button>
            ),
        },
        {
            key: "delete",
            label: "Xóa",
            render: (row) => (
                <button
                    // onClick={(event) => handleDeleteServices(event, row)}
                    className="z-10 text-center mx-auto p-2 hover:bg-slate-200 hover:rounded-md"
                >
                    <MdDeleteForever className="h-6 w-6" />
                </button>
            ),
        },
    ];
    const [expandedRowType, setExpandedRowType] = useState([]);
    const [expandedRowRoom, setExpandedRowRoom] = useState([]);
    const handleRowClickType = (index) => {
        if (expandedRowType.includes(index)) {
            setExpandedRowType(
                expandedRowType.filter((rowIndex) => rowIndex !== index)
            );
        } else {
            setExpandedRowType([...expandedRowType, index]);
        }
    };
    const handleRowClickRoom = (index) => {
        if (expandedRowRoom.includes(index)) {
            setExpandedRowRoom(
                expandedRowRoom.filter((rowIndex) => rowIndex !== index)
            );
        } else {
            setExpandedRowRoom([...expandedRowRoom, index]);
        }
    };
    const handlePageChange = () => {
        setExpandedRowType([]);
        setExpandedRowRoom([]);
    };
    const renderExpandedType = (row) => {
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
    const renderExpandedRoom = (row) => {
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
    const handleIsFilters = () => {
        setExpandedRowType([]);
        setExpandedRowRoom([])
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
                        // handleFetch={fetchRoomType}
                        data={roomType}
                        expandedRow={expandedRowType}
                        onRowClick={handleRowClickType}
                        onPageChange={handlePageChange}
                        handleIsFilters={handleIsFilters}
                        renderExpandedRow={renderExpandedType}
                    />
                ) : (
                    <Table
                        title="Danh sách phòng"
                        contentButton="Thêm phòng"
                        handleAdd={handleAddRoom}
                        columns={columns1}
                        // handleFetch={fetchStores}
                        data={room}
                        expandedRow={expandedRowRoom}
                        onRowClick={handleRowClickRoom}
                        onPageChange={handlePageChange}
                        renderExpandedRow={renderExpandedRoom}
                        handleIsFilters={handleIsFilters}
                    />
                )}
                {isModalOpenAddType && (
                    <div
                        onClick={() => handleCloseModalAddType()}
                        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    >
                        <div
                            className="bg-white rounded-lg w-[60%] h-[90%]  relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AddRoomType
                                handleClose={handleCloseModalAddType}
                                handleFetch={fetchRoomType}
                            ></AddRoomType>
                        </div>
                    </div>
                )}
                {isModalOpenAddRoom && (
                    <div
                        onClick={() => handleCloseModalAddRoom()}
                        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    >
                        <div
                            className="bg-white rounded-lg w-[50%] h-[70%]  relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AddRoom
                                handleClose={handleCloseModalAddRoom}
                                handleFetch={fetchRoom}
                            ></AddRoom>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Room;
