import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const Sidebar = ({ onAddItem }) => {
    const services = [
        {
            name: "Đánh golf",
            price: 3000000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Thuê xe máy",
            price: 150000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Massage",
            price: 700000,
            unit: "(Lần)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Trông trẻ",
            price: 500000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Bia Hà Nội",
            price: 25000,
            unit: "(Lon)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Buffet sáng",
            price: 300000,
            unit: "(Người)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Giặt là",
            price: 50000,
            unit: "(Bộ)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Cho thuê xe hơi",
            price: 1200000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Hướng dẫn viên du lịch",
            price: 800000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Đưa đón sân bay",
            price: 400000,
            unit: "(Lượt)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Yoga buổi sáng",
            price: 200000,
            unit: "(Lớp)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Hồ bơi",
            price: 150000,
            unit: "(Người)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Phòng gym",
            price: 200000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Quầy bar",
            price: 100000,
            unit: "(Ly)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Tour ngắm cảnh",
            price: 1200000,
            unit: "(Người)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Đánh golf",
            price: 3000000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Thuê xe máy",
            price: 150000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Massage",
            price: 700000,
            unit: "(Lần)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Trông trẻ",
            price: 500000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Bia Hà Nội",
            price: 25000,
            unit: "(Lon)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Buffet sáng",
            price: 300000,
            unit: "(Người)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Giặt là",
            price: 50000,
            unit: "(Bộ)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Cho thuê xe hơi",
            price: 1200000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Hướng dẫn viên du lịch",
            price: 800000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Đưa đón sân bay",
            price: 400000,
            unit: "(Lượt)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Yoga buổi sáng",
            price: 200000,
            unit: "(Lớp)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Hồ bơi",
            price: 150000,
            unit: "(Người)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Phòng gym",
            price: 200000,
            unit: "(Ngày)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Quầy bar",
            price: 100000,
            unit: "(Ly)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Tour ngắm cảnh",
            price: 1200000,
            unit: "(Người)",
            image: "https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const [currentStatus, setCurrentStatus] = useState(null);
    const handleStatusClick = (status) => {
        setCurrentStatus(status);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; 

    const totalPages = Math.ceil(services.length / itemsPerPage);

    const paginatedServices = services.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <div className="relative w-[30%] bg-gray-100/80 p-4 border border-1 border-gray-300 rounded-xl">
            <div className="flex gap-2 mb-4">
                <a
                    onClick={() => handleStatusClick(1)}
                    className={`font-semibold group text-black transition-all duration-300 ease-in-out focus:text-green-700 ${
                        currentStatus === 1 && "text-green-700"
                    }`}
                    href="#"
                >
                    <span className="bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-green-700 group-hover:bg-[length:100%_2px]">
                        Sản phẩm/Dịch vụ
                    </span>
                </a>
                <a
                    onClick={() => handleStatusClick(2)}
                    className={`font-semibold group text-black transition-all duration-300 ease-in-out focus:text-green-700 ${
                        currentStatus === 2 && "text-green-700"
                    }`}
                    href="#"
                >
                    <span className="bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-green-700 group-hover:bg-[length:100%_2px]">
                        Danh sách
                    </span>
                </a>
            </div>
            <div class="mb-5 bg-white flex px-4 py-3 border-b border-[#333] focus-within:border-green-500 focus-within:border-b-1 overflow-hidden max-w-md font-[sans-serif]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="18px"
                    class="fill-gray-600 mr-3"
                >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    class="w-full outline-none text-sm"
                />
            </div>
            <div className="">
                <div className="grid grid-cols-2 gap-4 flex-grow">
                    {paginatedServices.map((service, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-2 shadow-md flex items-center gap-2 bg-gray-50"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-12 h-12 rounded-md object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-xs">
                                    {service.name} {service.unit}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {service.price.toLocaleString()}₫
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 gap-2">
                <button
                    className={`p-2 rounded-full ${
                        currentPage === 1 ? "invisible" : "hover:bg-gray-200"
                    }`}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <GrFormPrevious className="text-gray-500 w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i + 1)}
                            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ease-linear ${
                                currentPage === i + 1
                                    ? "bg-green-600 w-3 h-3"
                                    : "bg-gray-300"
                            }`}
                        ></button>
                    ))}
                </div>
                <button
                    className={`p-2 rounded-full ${
                        currentPage === totalPages
                            ? "invisible"
                            : "hover:bg-gray-200"
                    }`}
                    onClick={() => goToPage(currentPage + 1)}
                >
                    <GrFormNext className="text-gray-500 w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
