import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import roomsData from "./data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const AllRoom = () => {
    const [filter, setFilter] = useState(""); 
    const filteredRooms = filter
        ? roomsData.filter((room) => room.status === filter)
        : roomsData;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
    const paginatedRooms = filteredRooms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);
    return (
        <div className="min-h-screen container mx-auto p-4 relative">
            <h1 className="text-2xl font-bold my-6">Danh Sách Phòng</h1>
            <div className="mb-8 flex gap-2 font-semibold">
                <button
                    className={`px-4 py-2 rounded-3xl outline-none border border-gray-300 transition-all duration-300 ease-linear ${
                        filter === "" ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 text-white " : "bg-white text-black"
                    }`}
                    onClick={() => {
                        setFilter("");
                    }}
                >
                    Tất cả
                </button>
                {[
                    "Đang trống",
                    "Sắp nhận",
                    "Đang sử dụng",
                    "Sắp trả",
                    "Quá giờ trả",
                ].map((status) => (
                     
                    <button
                        key={status}
                        className={`px-4 py-2 rounded-3xl outline-none border border-gray-300 transition-all duration-300 ease-linear ${
                            filter === status
                                ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 text-white " : "bg-white text-black"
                        }`}
                        onClick={() => setFilter(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {paginatedRooms.map((room) => (
                    <RoomCard key={room.roomId} room={room} />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <div className="flex items-center gap-2">
                    <button
                        className={`p-2 rounded-full ${
                            currentPage === 1
                                ? "invisible"
                                : "hover:bg-gray-200"
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
        </div>
    );
};

export default AllRoom;