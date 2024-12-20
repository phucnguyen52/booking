import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CountryDropdown from "../../components/CountryDropdown";
import SpecificAddress from "../../components/SpecificAddress";
import UploadImage from "../../components/UploadImage";
import Services from "./Services";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { setHotel, setRole } from "../../utils/AuthCheck";

const HotelRegister = () => {
    const [formData, setFormData] = useState({
        country: "Vietnam",
        address: "",
        image: "1",
        city: "",
        amenity_type: "",
        name: "",
        description: "",
    });

    const previousFormData = useRef(formData);

    const handleFieldChange = (fieldName, value) => {
        if (previousFormData.current[fieldName] !== value) {
            setFormData((prevState) => ({
                ...prevState,
                [fieldName]: value,
            }));
            previousFormData.current[fieldName] = value;
        }
    };
   
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        for (let key in formData) {
            if (formData[key] === "") {
                toast.warning("Vui lòng nhập đầy đủ thông tin.");
                return;
            }
        }
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:8080/api/receptionist/hotel",
                {
                    ...formData,
                },
                { withCredentials: true }
            );

            const data = response.data;

            if (data.status === true) {
                toast.success(data.message);
                setRole('admin')
                const hotelResponse = await axios.get(
                    "http://localhost:8080/api/receptionist/hotel",
                    { withCredentials: true }
                  );
                  const hotelData = hotelResponse.data;
                  if (hotelData.status === true && hotelData.hotel.length > 0) {
                    const firstHotelId = hotelData.hotel[0].id;
                    setHotel(firstHotelId);
                    navigate('/admin');
                  } else {
                    toast.warning("Không tìm thấy khách sạn nào.");
                  }
                
            }
        } catch (error) {
            toast.error("Thêm khách sạn không thành công!");
        }
    };
    return (
        <>
            <div className="px-32 py-10">
                <div className="text-3xl font-bold mb-3">
                    Đăng kí chỗ nghỉ của Quý vị
                </div>
                <div className="border rounded-md border-gray-300 p-5">
                    {" "}
                    <CountryDropdown
                        selectedCountry={formData.country}
                        onFieldChange={(fieldName, newValue) =>
                            handleFieldChange(fieldName, newValue)
                        }
                    ></CountryDropdown>
                    <SpecificAddress
                        onFieldChange={(fieldName, newValue) =>
                            handleFieldChange(fieldName, newValue)
                        }
                    ></SpecificAddress>
                </div>
                <div className="border rounded-md border-gray-300 p-5 mt-4">
                    <div className="mb-3">
                        <label
                            className="block text-base font-medium text-gray-700 mb-1"
                            htmlFor="address"
                        >
                            Tên khách sạn của bạn
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            placeholder="Tên khách sạn của bạn"
                            className="w-full rounded-md border border-gray-300 p-2 outline-none bg-white"
                            onChange={(e) =>
                                handleFieldChange("name", e.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="block text-base font-medium text-gray-700 mb-1"
                            htmlFor="address"
                        >
                            Mô tả
                        </label>
                        <textarea
                            cols="30"
                            rows="10"
                            name="description"
                            id="description"
                            value={formData.description}
                            placeholder="Mô tả"
                            className="w-full rounded-md border border-gray-300 p-2 outline-none bg-white resize-none"
                            onChange={(e) =>
                                handleFieldChange("description", e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div className="block base font-medium text-gray-700 mb-1">
                        Hình ảnh
                    </div>
                    <UploadImage
                        column={5}
                        onFieldChange={(fieldName, newValue) =>
                            handleFieldChange(fieldName, newValue)
                        }
                    ></UploadImage>
                    <div className="block base font-medium text-gray-700 mb-3">
                        Khách hàng có thể sử dụng gì tại khách sạn của bạn?
                    </div>
                    <Services
                        onFieldChange={(fieldName, newValue) =>
                            handleFieldChange(fieldName, newValue)
                        }
                    ></Services>
                    <div className="mt-3 flex justify-end">
                        <Button
                            color="blue"
                            textColor="white"
                            children="Xác nhận"
                            size="md"
                            handleClick={handleSubmit}
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelRegister;
