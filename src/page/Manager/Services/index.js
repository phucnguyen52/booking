import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import ModalAdd from "./ModalAdd";
import Table from "../../../components/Table";
import { toast } from "react-toastify";

const Services = () => {
    const [expandedRow, setExpandedRow] = useState([]);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        { key: "id", label: "Mã dịch vụ" },
        { key: "service_name", label: "Tên dịch vụ" },
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

    const fetchServices = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/receptionist/services",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                setData(response.data.services);
                
            }
        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        }
    };
    useEffect(() => {
        fetchServices();
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
    const handleAddService = async (newServices) => {
        console.log("2",newServices)
        const customService = {
            service_name: newServices.serviceName,  
            price: newServices.price                
          };
        try {
            const response = await axios.post(
                "http://localhost:8080/api/receptionist/services",
                customService,
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                toast.success("Thêm dịch thành công", { autoClose: 1000 });
                fetchServices();
                handleModalClose();
            }
        } catch (error) {
            console.error("Lỗi khi thêm dịch vụ:", error);
        }
    };
    return (
        <>
            <Table
                title="Danh sách dịch vụ"
                contentButton="Thêm dịch vụ"
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
                    onAddService={handleAddService}
                ></ModalAdd>
            )}
        </>
    );
};

export default Services;