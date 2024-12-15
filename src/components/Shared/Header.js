import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Datepicker from "react-tailwindcss-datepicker";
import { CiUser, CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GrAdd, GrSubtract } from "react-icons/gr";

const Header = () => {
    const [place, setPlace] = useState({});
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [detailRoom, setDetailRoom] = useState({
        adults: 2,
        children: 0,
        rooms: 1
    })
    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });
    let debounceTimer = useRef(null)
    const detailRoomRef = useRef(null);
    const suggestions = useRef(null);

    // Hàm lấy gợi ý địa điểm từ API
    const fetchLocationSuggestions = async (term) => {
        try {
            const response = await axios.get('https://nominatim.openstreetmap.org/search', {
                params: {
                    q: term,
                    countrycodes: 'VN',  // Chỉ tìm kiếm ở Việt Nam
                    format: 'json',
                    // accept_language: 'vi',  // Ưu tiên trả về tên địa danh bằng tiếng Việt
                    limit: 5,
                    // class: 'place'  // Chỉ lấy kết quả là địa danh
                }
            });

            const locations = response.data.map((place) => place.display_name);
            setLocationSuggestions(locations);
        } catch (error) {
            console.error("Error fetching suggestions: ", error);
        }
        // try {
        //     const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
        //         params: { namePrefix: term },
        //         headers: {
        //             'X-RapidAPI-Key': 'fa86074513msh4d3a5f226798626p17b382jsn97e0d66a626e',
        //             'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        //         }
        //     });
        //     const cities = response.data.data.map((city) => `${city.name}, ${city.country}`);
        //     setLocationSuggestions(cities);
        // } catch (error) {
        //     console.error("Error fetching suggestions: ", error);
        // }

        // try {
        //     const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation', {
        //         params: {
        //             query: term,
        //             languagecode: 'en-us'
        //         },
        //         headers: {
        //             'X-RapidAPI-Key': 'fa86074513msh4d3a5f226798626p17b382jsn97e0d66a626e',
        //             'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        //         }
        //     });
        //     const cities = response.data.products.map((city) => `${city.name}, ${city.country}`);
        //     setLocationSuggestions(cities);
        // } catch (error) {
        //     console.error("Error fetching suggestions: ", error);
        // }
    };
    useEffect(() => {
        const clickOutside = (event) => {
            if (detailRoomRef.current && !detailRoomRef.current.contains(event.target)) {
                setIsOpenDetail(false);

            }
            if (suggestions.current && !suggestions.current.contains(event.target)) {
                setLocationSuggestions([]);
            }
        };
        document.addEventListener('mousedown', clickOutside);
        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current); // Xóa timer nếu component unmount
            }
            document.removeEventListener('mousedown', clickOutside);
        };
    }, []);

    const handlePlace = (e) => {
        const value = e.target.value;
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        setPlace(prev => ({ ...prev, name: value }));

        if (value) {
            debounceTimer.current = setTimeout(() => {
                fetchLocationSuggestions(value);
            }, 500);
        } else {
            setLocationSuggestions([]);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", place, date, detailRoom);
    };
    return (
        <div>
            <div className="mx-32 grid grid-rows-1 grid-cols-11 gap-1 items-stretch justify-stretch mb-4 p-1  bg-yellow-500 rounded-lg">
                <div className="relative col-span-4 bg-white rounded-lg p-2" >
                    <div className="flex gap-2 w-full">
                        <span className="text-3xl flex justify-center items-center"><CiLocationOn /></span>
                        <input
                            type="text"
                            value={place.name}
                            name="place"
                            onChange={handlePlace}
                            placeholder="Search for travel destinations..."
                            className="w-full focus:outline-none font-semibold"
                        />
                    </div>

                    {locationSuggestions.length > 0 && (
                        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg" ref={suggestions}>
                            {locationSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-blue-100"
                                    onClick={() => {
                                        setPlace(prev => ({ ...prev, name: suggestion }));
                                        setLocationSuggestions([]);
                                    }}
                                >
                                    <b>{suggestion.slice(0, suggestion.indexOf(',')).trim()}</b>
                                    <div className="italic text-xs">{suggestion.slice(suggestion.indexOf(',') + 1).trim()}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="col-span-3 rounded-lg flex gap-2 bg-white p-2" >
                    <span className="text-3xl flex justify-center items-center"><CiCalendar /></span>
                    <Datepicker
                        value={date}
                        separator="—"
                        minDate={new Date()}
                        primaryColor={"blue"}
                        displayFormat="DD/MM/YYYY"
                        placeholder="Check-in date — Check-out date"
                        toggleClassName="hidden"
                        inputClassName="focus-visible:outline-none w-full h-full font-semibold"
                        onChange={newValue =>  setDate({
                            startDate: new Date(newValue.startDate.setHours(0, 0, 0, 0)),
                            endDate: new Date(newValue.endDate.setHours(0, 0, 0, 0))
                        })}
                    />
                </div>

                <div className="relative col-span-3 hover:cursor-pointer bg-white rounded-lg p-2" onClick={() => { if (!isOpenDetail) setIsOpenDetail((prev) => !prev) }}>
                    <div className="h-full flex justify-between items-center">
                        <span className="flex items-center gap-2">
                            <span className="text-3xl"><CiUser /></span>
                            <span className="font-semibold">{`${detailRoom.adults} adults · ${detailRoom.children} children · ${detailRoom.rooms} room`}</span>
                        </span>
                        <button className="text-xl focus:outline-none"><IoIosArrowDown /></button>
                    </div>

                    {/* Menu */}
                    {isOpenDetail && (
                        <div className="absolute left-0 w-full mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg cursor-default" ref={detailRoomRef}>
                            <div className="flex justify-between items-center">
                                <span>Adults</span>
                                <div className="flex items-center gap-6 border rounded-lg">
                                    <GrSubtract
                                        className="w-full h-full p-2 cursor-pointer"
                                        onClick={() => setDetailRoom(prev => ({ ...prev, adults: prev.adults > 0 ? prev.adults - 1 : 0 }))}
                                    />
                                    <span>{detailRoom.adults}</span>
                                    <GrAdd
                                        className="w-full h-full p-2 cursor-pointer"
                                        onClick={() => setDetailRoom(prev => ({ ...prev, adults: prev.adults + 1 }))}
                                    />
                                </div>

                            </div>

                            <div className="flex justify-between items-center">
                                <span>Children</span>
                                <div className="flex items-center gap-6 border rounded-lg">
                                    <GrSubtract
                                        className="w-full h-full p-2 cursor-pointer"
                                        onClick={() => setDetailRoom(prev => ({ ...prev, children: prev.children > 0 ? prev.children - 1 : 0 }))}
                                    />
                                    <span>{detailRoom.children}</span>
                                    <GrAdd
                                        className="w-full h-full p-2 cursor-pointer"
                                        onClick={() => setDetailRoom(prev => ({ ...prev, children: prev.children + 1 }))}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span>Rooms</span>
                                <div className="flex items-center gap-6 border rounded-lg">
                                    <GrSubtract
                                        className="w-full h-full p-2 cursor-pointer"
                                        onClick={() => setDetailRoom(prev => ({ ...prev, rooms: prev.rooms > 1 ? prev.rooms - 1 : 1 }))}
                                    />
                                    <span>{detailRoom.rooms}</span>
                                    <GrAdd
                                        className="w-full h-full p-2 cursor-pointer"
                                        onClick={() => setDetailRoom(prev => ({ ...prev, rooms: prev.rooms + 1 }))}
                                    />
                                </div>

                            </div>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleSearch}
                    className="text-nowrap bg-blue-500 text-white  rounded-lg hover:bg-blue-600"
                >
                    Tìm kiếm
                </button>
            </div>

        </div>
    );
};

export default Header;