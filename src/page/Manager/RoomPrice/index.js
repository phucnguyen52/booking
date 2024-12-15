import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import ModalAdd from "./ModalAdd";

import { toast } from "react-toastify";
import Table from "./Table";
const RoomPrice = () => {
    const [expandedRow, setExpandedRow] = useState([]);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        { key: "pricing_id", label: "Mã dịch vụ" },
        { key: "name", label: "Tên chương trình giá", isFilterable: true },
        { key: "room_name", label: "Tên loại phòng"},
        { key: "start_date", label: "Ngày bắt đầu" },
        { key: "end_date", label: "Ngày kết thúc" },
        { key: "price", label: "Giá (VNĐ)" },
        {
            key: "button",
            label: "Chỉnh sửa",
            render: (row) => (
                <button
                    onClick={(event) => handleEditServices(event, row)}
                    className="z-10 text-center mx-auto p-2 hover:bg-slate-200 hover:rounded-md"
                >
                    <FaEdit className="h-6 w-6" />
                </button>
            ),
        },
        {
            key: "button",
            label: "Xóa",
            render: (row) => (
                <button
                    onClick={(event) => handleDeleteServices(event, row)}
                    className="z-10 text-center mx-auto p-2 hover:bg-slate-200 hover:rounded-md"
                >
                    <MdDeleteForever className="h-6 w-6" />
                </button>
            ),
        },
    ];

    const fetchPrices = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/receptionist/pricing",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                setData(response.data.pricing);
                
            }
        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        }
    };
    useEffect(() => {
        fetchPrices();
    }, []);
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
    const handleEditServices = async (event, row) => {
        event.stopPropagation();
        // try {
        //     const newPassword = "123456";

        //     const response = await axios.put(
        //         `http://localhost:8080/api/customer/${row.id}`,
        //         { password: newPassword },
        //         {
        //             withCredentials: true,
        //         }
        //     );

        //     if (response.status === 200) {
        //         toast.success("Đặt lại mật khẩu thành công", {
        //             autoClose: 1000,
        //         });
        //     } else {
        //         console.log(
        //             "Không thể đặt lại mật khẩu cho người dùng:",
        //             row.fullName
        //         );
        //     }
        // } catch (error) {
        //     console.error("Lỗi khi sửa mật khẩu:", error);
        // }
    };
    const handleDeleteServices = async (event, row) => {
        event.stopPropagation();
        // try {
        //     const newPassword = "123456";

        //     const response = await axios.put(
        //         `http://localhost:8080/api/customer/${row.id}`,
        //         { password: newPassword },
        //         {
        //             withCredentials: true,
        //         }
        //     );

        //     if (response.status === 200) {
        //         toast.success("Đặt lại mật khẩu thành công", {
        //             autoClose: 1000,
        //         });
        //     } else {
        //         console.log(
        //             "Không thể đặt lại mật khẩu cho người dùng:",
        //             row.fullName
        //         );
        //     }
        // } catch (error) {
        //     console.error("Lỗi khi sửa mật khẩu:", error);
        // }
    };
    const handlePageChange = () => {
        setExpandedRow([]);
    };

    // const renderExpandedRow = (row) => {
    //     return (
    //         <div className="transition-all duration-300">
    //             <h3 className="font-bold mb-2">Chi tiết dịch vụ</h3>
    //             <p>Email: {row.email}</p>
    //         </div>
    //     );
    // };
    const handleAdd = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleAddPrice = async (newPrices) => {
        console.log("2",newPrices)
        const customPrices = {
            name: newPrices.priceName,  
            RoomId: newPrices.roomID,
            price: newPrices.price,
            start_date: newPrices.startDate,
            end_date: newPrices.endDate              
          };
          console.log(customPrices)
        try {
            const response = await axios.post(
                "http://localhost:8080/api/receptionist/pricing",
                customPrices,
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                toast.success(response.data.message, { autoClose: 1000 });
                fetchPrices();
                handleModalClose();
            }
        } catch (error) {
            console.error("Lỗi khi thêm giá:", error);
        }
    };
    return (
        <>
            <Table
                title="Danh sách bảng giá"
                contentButton="Thêm giá"
                columns={columns}
                data={data}
                handleAdd={handleAdd}
                // expandedRow={expandedRow}
                onRowClick={handleRowClick}
                onPageChange={handlePageChange}
                // renderExpandedRow={renderExpandedRow}
                handleIsFilters={handleIsFilters}
            
            />
            {isModalOpen && (
                <ModalAdd
                    onClose={handleModalClose}
                    onAddPrice={handleAddPrice}
                ></ModalAdd>
            )}
        </>
    );
};

export default RoomPrice;