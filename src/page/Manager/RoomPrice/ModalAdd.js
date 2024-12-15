import { Toast } from "@mobiscroll/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ModalAdd = ({ onClose, onAddPrice }) => {
    const [formData, setFormData] = useState({
        priceName: "",
        price: "",
        formattedPrice: "",
        startDate: "",
        endDate: "",
        roomType: [],
        roomID: "",
    });
    const fetchRoomType = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/receptionist/room",
                {
                    withCredentials: true,
                }
            );

            if (response.data.status === true) {
                setFormData({
                    ...formData,
                    roomType: response.data.room,
                });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        fetchRoomType();
    }, []);
    const handleIconClick = (id) => {
        document.getElementById(id).showPicker();
    };

    const handlePriceChange = (e) => {
        let newValue = e.target.value;
        newValue = newValue.replace(/[^\d]/g, "");
        let formattedValue = newValue;
        if (newValue) {
            formattedValue = Number(newValue).toLocaleString("de-DE");
        }
        setFormData({
            ...formData,
            price: newValue,
            formattedPrice: formattedValue,
        });
    };

    const handleSubmit = () => {
        const newService = { ...formData }; // Lấy tất cả giá trị trong formData
        console.log(newService);
        for (let key in formData) {
            if (formData[key] === "") {
                toast.warning("Vui lòng nhập đầy đủ thông tin.");
                return;
            }
        }
        onAddPrice(newService);
    };

    const today = new Date().toISOString().split("T")[0];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleStartDateChange = (e) => {
        handleChange(e);
    };

    const handleEndDateChange = (e) => {
        const { value } = e.target;
        if (new Date(value) <= new Date(formData.startDate)) {
            toast.warning("Ngày kết thúc phải lớn hơn ngày bắt đầu!");
        } else {
            handleChange(e);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white p-6 rounded-lg shadow-lg w-1/3"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="background-transparent absolute right-[22px] top-[18px] text-sm font-bold uppercase text-black outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={onClose}
                >
                    <FaWindowClose className="h-8 w-8" />
                </button>
                <h2 className="text-xl font-bold mb-4">Thêm giá phòng</h2>
                <input
                    type="text"
                    name="priceName"
                    placeholder="Tên giá"
                    value={formData.priceName}
                    onChange={handleChange}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mb-3"
                />
                <div className="flex items-center">
                    <select
                        name="roomID"
                        value={formData.roomID}
                        onChange={handleChange}
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mb-3"
                    >
                        <option value="" className="text-gray-400">
                            Lựa chọn loại phòng
                        </option>
                        {formData &&
                            formData.roomType.map((roomClass) => (
                                <option key={roomClass.id} value={roomClass.id}>
                                    {roomClass.room_name}
                                </option>
                            ))}
                    </select>
                </div>
                <input
                    type="text"
                    name="formattedPrice"
                    placeholder="Giá (VNĐ)..."
                    value={formData.formattedPrice}
                    onChange={handlePriceChange}
                    className="mb-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />

                <div className="relative">
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleStartDateChange}
                        className=" w-[90%] text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none"
                        placeholder="Ngày bắt đầu"
                        id="startDate"
                        min={today}
                    />
                    <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={() => handleIconClick("startDate")}
                    >
                        <FaRegCalendarAlt className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
                <div className="relative mt-4">
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleEndDateChange}
                        className="w-[90%] text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none"
                        placeholder="Ngày bắt đầu"
                        id="endDate"
                        min={today}
                    />
                    <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={() => handleIconClick("endDate")}
                    >
                        <FaRegCalendarAlt className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSubmit}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Thêm
                    </button>
                    <button
                        onClick={onClose}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAdd;
