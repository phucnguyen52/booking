import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
const ModalAdd = ({ onClose, onAddService }) => {
    const [serviceName, setServiceName] = useState("");
    const [price, setPrice] = useState("");
    const [formattedPrice, setFormattedPrice] = useState("");
    const handlePriceChange = (e) => {
        let newValue = e.target.value;
        newValue = newValue.replace(/[^\d]/g, ""); 
        let formattedValue = newValue;
        if (newValue) {
            formattedValue = Number(newValue).toLocaleString('de-DE'); 
        }
        const rawValue = newValue;  
        setPrice(rawValue);  
        setFormattedPrice(formattedValue); 
    };
    const handleSubmit = () => {
        const newServices = { serviceName, price};
       
        onAddService(newServices);
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
                <h2 className="text-xl font-bold mb-4">Thêm dịch vụ mới</h2>
                <input
                    type="text"
                    placeholder="Tên dịch vụ"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mb-3"
                />
                <input
                type="text"
                placeholder="Giá (VNĐ)..."
                value={formattedPrice}  
                onChange={handlePriceChange}
                className="mb-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
                
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
