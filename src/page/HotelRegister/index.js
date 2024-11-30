import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CountryDropdown from "../../components/CountryDropdown";
import SpecificAddress from "../../components/SpecificAddress";

const HotelRegister = () => {
    const [formData, setFormData] = useState({
        selectedCountry: "Vietnam",
        address: "",
    });

    const handleCountryChange = (countryName) => {
        setFormData((prevState) => ({
            ...prevState,
            selectedCountry: countryName,
        }));
        console.log(countryName);
    };
    const handleAddressChange = (newAddress) => {
        setFormData((prevState) => ({
            ...prevState,
            address: newAddress,
        }));
    };
    return (
        <>
            <div>
                <div className="text-3xl font-bold">
                    Đăng kí chỗ nghỉ của Quý vị
                </div>
                <div className="border rounded-md border-gray-300 p-5">
                    {" "}
                    <CountryDropdown
                        selectedCountry={formData.selectedCountry}
                        onCountryChange={handleCountryChange}
                        
                    ></CountryDropdown>
                    
                    <SpecificAddress
                        onAddressChange={handleAddressChange}
                    ></SpecificAddress>
                </div>
            </div>
        </>
    );
};

export default HotelRegister;
