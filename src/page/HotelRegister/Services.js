import React, { useEffect, useState } from "react";

const Services = ({ onFieldChange }) => {
    const servicesList = [
        "Nhà hàng",
        "Dịch vụ phòng",
        "Quầy bar",
        "Lễ tân 24 giờ",
        "Phòng xông hơi",
        "Trung tâm thể dục",
        "Sân vườn",
        "Sân thượng / hiên",
        "Phòng không hút thuốc",
        "Xe đưa đón sân bay",
        "Phòng gia đình",
        "Trung tâm Spa & chăm sóc sức khỏe",
        "Bồn tắm nóng/bể sục (Jacuzzi)",
        "WiFi miễn phí",
        "Điều hòa nhiệt độ",
        "Công viên nước",
        "Trạm sạc xe điện",
        "Hồ bơi",
        "Bãi biển",
    ];
    const [selectedServices, setSelectedServices] = useState([]);

    const handleCheckboxChange = (service) => {
      setSelectedServices(prevState => {
        const updatedServices = prevState.includes(service)
          ? prevState.filter(item => item !== service)
          : [...prevState, service];
        
        return updatedServices;
      });
    };
  
    useEffect(() => {
      onFieldChange("amenity_type",selectedServices);
    }, [selectedServices]);

    return (
        <div className="grid grid-cols-3 gap-4">
            {servicesList.map((service) => (
                <div className="inline-flex items-center" key={service}>
                    <label className="flex items-center cursor-pointer relative">
                        <input
                            type="checkbox"
                            id={service}
                            value={service}
                            onChange={() => handleCheckboxChange(service)}
                            checked={selectedServices.includes(service)}
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
                        />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </label>
                    <label htmlFor={service} className="ml-2 text-sm">{service}</label>
                </div>
            ))}
        </div>
    );
};

export default Services;
