import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { FaWindowClose } from "react-icons/fa";
import Select from "./Select";
import InputReadOnly from "./InputReadOnly";
import {
    apiGetPublicProvinces,
    apiGetPublicDistrict,
    apiGetPublicWard,
} from "../../services/address";
const SpecificAddress = ({ onAddressChange, province_name }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [numberAddress, setNumberAddress] = useState("");
    const [reset, setReset] = useState(false);
    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) {
                setProvinces(response?.data.results);
            }
        };
        fetchPublicProvince();
    }, []);
    useEffect(() => {
        setDistrict(null);
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province);
            if (response.status === 200) {
                setDistricts(response.data?.results);
            }
        };
        province && fetchPublicDistrict();
        !province ? setReset(true) : setReset(false);
        !province && setDistricts([]);
    }, [province]);
    useEffect(() => {
        setWard(null);
        const fetchPublicWard = async () => {
            const response = await apiGetPublicWard(district);
            if (response.status === 200) {
                setWards(response.data?.results);
            }
        };
        district && fetchPublicWard();
        !district ? setReset(true) : setReset(false);
        !district && setWards([]);
    }, [district]);
    useEffect(() => {
        const address = `${numberAddress ? `${numberAddress}, ` : ""}${
            ward
                ? `${wards?.find((item) => item.ward_id === ward)?.ward_name},`
                : ""
        } ${
            district
                ? `${
                      districts?.find((item) => item.district_id === district)
                          ?.district_name
                  },`
                : ""
        } ${
            province
                ? `${
                      provinces?.find((item) => item.province_id === province)
                          ?.province_name
                  }`
                : ""
        }`;
        onAddressChange(address);
    }, [province, district, ward, numberAddress, onAddressChange]);
    return (
        <>
            <div className="w-full">
                <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-4">
                        <Select
                            type="province"
                            value={province}
                            setValue={setProvince}
                            options={provinces}
                            label="Tỉnh/Thành phố"
                        />
                        <Select
                            reset={reset}
                            type="district"
                            value={district}
                            setValue={setDistrict}
                            options={districts}
                            label="Quận/Huyện"
                        />
                        <Select
                            reset={reset}
                            type="ward"
                            value={ward}
                            setValue={setWard}
                            options={wards}
                            label="Phường/Xã"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="address"
                        >
                            Tên đường, số nhà
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={numberAddress}
                            placeholder="Tên đường, số nhà"
                            className="w-full rounded-md border border-gray-300 p-2 outline-none"
                            onChange={(e) => setNumberAddress(e.target.value)}
                        />
                    </div>
                    <InputReadOnly
                        label="Địa chỉ cụ thể"
                        value={`${numberAddress ? `${numberAddress}, ` : ""}${
                            ward
                                ? `${
                                      wards?.find(
                                          (item) => item.ward_id === ward
                                      )?.ward_name
                                  },`
                                : ""
                        } ${
                            district
                                ? `${
                                      districts?.find(
                                          (item) =>
                                              item.district_id === district
                                      )?.district_name
                                  },`
                                : ""
                        } ${
                            province
                                ? provinces?.find(
                                      (item) => item.province_id === province
                                  )?.province_name
                                : ""
                        }`}
                    />
                </div>
            </div>
        </>
    );
};

export default SpecificAddress;
