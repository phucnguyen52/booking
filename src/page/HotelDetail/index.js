import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import ImageHotel from "./ImageHotel";
import RecommendHotel from "./RecommendHotel";
import EmptyRoom from "./EmptyRoom";
import Rating from "./Rating";
import GeneralRule from "./GeneralRule";
import Note from "./Note";
import Datepicker from "react-tailwindcss-datepicker";
import { getHotelDetail } from "../../service/hotelService";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosHeartEmpty, IoMdCheckmark, IoIosArrowDown } from "react-icons/io";
import { CiUser, CiCalendar, } from "react-icons/ci";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { BsTag } from "react-icons/bs";
import { roomService } from "../../service/roomService";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
const HotelDetail = () => {
    const hotelId = 1;
    const [hotelData, setHotelData] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [detailSearch, setDetailSearch] = useState({
        checkin: searchParams.get('checkin'),
        checkout: searchParams.get('checkout'),
        adult_count: Number(searchParams.get('adult_count'))
    })
    const [emptyRoom, setEmptyRoom] = useState([]);
    const [suggestedRooms, setSuggestedRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [date, setDate] = useState({
        startDate: new Date(detailSearch.checkin),
        endDate: new Date(detailSearch.checkout)
    });
    useEffect(() => {
        fetchHotelDetail();
        fetchEmpty();
        fetchRoomSuggest();
    }, [hotelId]);
    const fetchEmpty = async () => {
        const data = await roomService.getEmptyRoombyUser(detailSearch.checkin, detailSearch.checkout, detailSearch.adult_count, hotelId)
        if (data) setEmptyRoom(data)
    }
    const fetchRoomSuggest = async () => {
        const data = await roomService.getSuggestRoom(detailSearch.checkin, detailSearch.checkout, detailSearch.adult_count)
        if (data) setSuggestedRooms(data[0])
    }
    const fetchHotelDetail = async () => {
        try {
            const data = await getHotelDetail(hotelId);
            setHotelData(data.hotel[0]);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    console.log("suggest", suggestedRooms)


    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };


    const detailRoomRef = useRef(null);
    useEffect(() => {
        const clickOutside = (event) => {
            if (detailRoomRef.current && !detailRoomRef.current.contains(event.target)) {
                setIsOpenDetail(false);

            }
        };
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        await fetchEmpty()
        await fetchRoomSuggest()
    };
    return (
        <div className="w-9/12 mx-auto">
            <div className="flex justify-between text-sm w-full">
                <button
                    onClick={() => scrollToSection("overview")}
                    className="p-4 hover:bg-gray-100 border-b-2 border-b-blue-500 w-full"
                >
                    <div className="font-medium text-nowrap">Tổng quan</div>
                </button>

                <button
                    onClick={() => scrollToSection("info-price")}
                    className="p-4 hover:bg-gray-100 w-full"
                >
                    <div className="font-medium text-nowrap">
                        Thông tin & giá
                    </div>
                </button>

                <button
                    onClick={() => scrollToSection("convenient")}
                    className="p-4 hover:bg-gray-100 w-full"
                >
                    <div className="font-medium text-nowrap">Tiện nghi</div>
                </button>

                <button
                    onClick={() => scrollToSection("generalRule")}
                    className="p-4 hover:bg-gray-100 w-full"
                >
                    <div className="font-medium text-nowrap">Quy tắc chung</div>
                </button>

                <button
                    onClick={() => scrollToSection("notes")}
                    className="p-4 hover:bg-gray-100 w-full"
                >
                    <div className="font-medium text-nowrap">Ghi chú</div>
                </button>

                <button
                    onClick={() => scrollToSection("reviews")}
                    className="p-4 hover:bg-gray-100 w-full"
                >
                    <div className="font-medium text-nowrap">
                        Đánh giá của khách
                    </div>
                    <div className="font-medium text-nowrap">(3)</div>
                </button>
            </div>
            <hr />



            {hotelData && emptyRoom && (
                <div>
                    <div
                        className="flex justify-between items-center my-5"
                        id="overview"
                    >
                        <div className="flex flex-col gap-2  w-[80%]">
                            <div className="text-2xl font-bold">
                                {hotelData.name}
                            </div>
                            <div className="flex items-center">
                                <a href="">
                                    <IoLocationSharp className="w-6 h-6 text-blue-600" />
                                </a>
                                <div className="flex text-sm space-x-1">
                                    <div className="">
                                        {hotelData.address}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-[20%] flex flex-col gap-2">
                            <div className="flex items-center justify-end gap-2">
                                <button className="cursor-pointer">
                                    <IoIosHeartEmpty className="w-6 h-6 text-blue-700 cursor-pointer" />
                                </button>
                                <button className="cursor-pointer">
                                    <GoShareAndroid className="w-6 h-6 text-blue-700" />
                                </button>
                                {/* <button className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Đặt ngay
                        </button> */}
                            </div>
                            <button className="text-blue-700 flex gap-2 cursor-pointer">
                                <BsTag className="w-6 h-6" />
                                <div className="text-sm font-semibold">
                                    Chúng Tôi Luôn Khớp Giá!
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <ImageHotel images={hotelData.image || []}></ImageHotel>
                    </div>
                    <div className="mt-6">
                        <div>
                            {hotelData.description
                                .split("\u005C\u005C")
                                .map((item, index) => (
                                    <div key={index} className="flex my-3 text-sm ">
                                        {item}
                                    </div>
                                ))}
                        </div>
                        <div className="text-xs text-gray-600">
                            Các khoảng cách nêu trong mô tả chỗ nghỉ được tính toán bằng
                            © OpenStreetMap
                        </div>
                    </div>


{/* Tìm kiếm */}
<div>
                        <div className="mt-5 grid grid-rows-1 grid-cols-5 gap-1 items-stretch justify-stretch mb-4 p-1  bg-yellow-500 rounded-lg">

                            <div className="col-span-2 rounded-lg flex gap-2 bg-white p-2" >
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
                                    onChange={newValue => {
                                        setDate({
                                            startDate: new Date(newValue.startDate.setHours(0, 0, 0, 0)),
                                            endDate: new Date(newValue.endDate.setHours(0, 0, 0, 0))
                                        })
                                        setDetailSearch({
                                            ...detailSearch,
                                            checkin: dayjs(newValue.startDate).startOf('day').format('YYYY-MM-DD'),
                                            checkout: dayjs(newValue.endDate).startOf('day').format('YYYY-MM-DD'),
                                        })
                                    }}
                                />
                            </div>

                            <div className="relative col-span-2 hover:cursor-pointer bg-white rounded-lg p-2" onClick={() => { if (!isOpenDetail) setIsOpenDetail((prev) => !prev) }}>
                                <div className="h-full flex justify-between items-center">
                                    <span className="flex items-center gap-2">
                                        <span className="text-3xl"><CiUser /></span>
                                        <span className="font-semibold">{`${detailSearch.adult_count} adults`}</span>
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
                                                    onClick={() => setDetailSearch(prev => ({ ...prev, adult_count: prev.adult_count > 0 ? prev.adult_count - 1 : 0 }))}
                                                />
                                                <span>{detailSearch.adult_count}</span>
                                                <GrAdd
                                                    className="w-full h-full p-2 cursor-pointer"
                                                    onClick={() => setDetailSearch(prev => ({ ...prev, adult_count: prev.adult_count + 1 }))}
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
                                Lọc
                            </button>
                        </div>
                    </div>



                    <div>
                        <RecommendHotel
                            adult_count={detailSearch.adult_count}
                            roomData={suggestedRooms}
                            checkin={detailSearch.checkin}
                            checkout={detailSearch.checkout}
                        ></RecommendHotel>
                    </div>


                    
                    <div className="mt-5" id="info-price">
                        <EmptyRoom emptyRoom={emptyRoom} setEmptyRoom={setEmptyRoom}></EmptyRoom>
                    </div>

                    <div id="convenient" className="mt-8">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold">
                                Các tiện nghi của  {hotelData.name}
                            </div>
                        </div>
                        <div className="">
                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4 mt-4">
                                {hotelData.amenity_type.map((item, index) => (
                                    <div key={index} className="flex items-center text-sm text-gray-700">
                                        <IoMdCheckmark className="mr-2 text-green-600 w-4 h-4" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id="generalRule" className="mt-10">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold">Quy tắc chung</div>
                            {/* <Button
                        color="blue"
                        children="Xem phòng trống"
                        size="sm"
                        textColor="white"
                        border={false}
                        id="info-price"
                        handleClick={handleClick}
                    ></Button> */}
                        </div>
                        <div className="text-base text-gray-700">
                            {hotelData.name} nhận yêu cầu đặc biệt - gửi yêu cầu
                            trong bước kế tiếp!
                        </div>
                        <GeneralRule></GeneralRule>
                    </div>
                    <div id="notes" className="mt-10">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold">Ghi chú</div>
                            {/* <Button
                        color="blue"
                        children="Xem phòng trống"
                        size="sm"
                        textColor="white"
                        border={false}
                        id="info-price"
                        handleClick={handleClick}
                    ></Button> */}
                        </div>
                        <div className="text-base text-gray-700">
                            Thông tin quan trọng về chỗ nghỉ này
                        </div>
                        <Note></Note>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelDetail;
