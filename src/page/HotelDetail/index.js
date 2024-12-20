import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import ImageHotel from "./ImageHotel";
import RecommendHotel from "./RecommendHotel";
import EmptyRoom from "./EmptyRoom";
import Rating from "./Rating";

import GeneralRule from "./GeneralRule";
import Note from "./Note";
import Button from "../../components/Button";
import Datepicker from "react-tailwindcss-datepicker";
import { CiUser, CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { getHotelDetail } from "../../service/hotelService";
const HotelDetail = () => {
    const hotelId = 1;
    const [hotelData, setHotelData] = useState(null);  
    const [loading, setLoading] = useState(true);     
    const [error, setError] = useState(null);    
    useEffect(() => {
        const fetchHotelDetail = async () => {
          try {
            const data = await getHotelDetail(hotelId);
            console.log("dataaa", data)
            setHotelData(data);  
          } catch (error) {
            setError(error); 
          } finally {
            setLoading(false); 
          }
        };
    
        fetchHotelDetail(); 
      }, [hotelId]);
    const images = `["https://pistachiohotel.com/UploadFile/Gallery/Overview/a3.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Lobby/a2.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Lobby/a3.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Overview/a1.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Lobby/a8.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Rooms/Deluxe/Deluxe-Double-2.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Rooms/Executive-Suite/Executive-Suite-1.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Rooms/Presidental-Suite/Presidental-Suite-9.jpg",
    "https://pistachiohotel.com/UploadFile/Gallery/Restaurant/a1.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
    "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg"
  ]`;
    const roomData = [
        {
            id: 1,
            name: "Phòng Tiêu Chuẩn Giường Đôi",
            adultCount: 2, // Số người lớn
            childCount: 0, // Số trẻ em
            bedDoubleCount: 1, // Số giường đôi lớn
            singleBedCount: 0, // Số giường đơn
            bedCount: 1, // Tổng số giường
            maxCount: 2, // Số người tối đa
            cancelDate: "8 tháng 11, 2024", // Ngày có thể hủy miễn phí
            remaining: 5, // Số phòng còn lại
            description: `
        1 × Phòng Tiêu Chuẩn Giường Đôi
        Giá cho: 
        Số người tối đa: 2
        1 phòng khách sạn   
        Giường: 1 giường đôi lớn 
        Hủy miễn phí trước 8 tháng 11, 2024
        
        Không cần thanh toán trước - thanh toán tại chỗ nghỉ
        Chỉ còn 5 phòng trên trang của chúng tôi
      `,
            price: "700.000",
            priceDetails: "Đã bao gồm thuế và phí",
        },
        {
            id: 2,
            name: "Bungalow Nhìn ra vườn",
            adultCount: 3, // Số người lớn
            childCount: 0, // Số trẻ em
            bedDoubleCount: 1, // Số giường đôi
            singleBedCount: 1, // Số giường đơn
            bedCount: 2, // Tổng số giường
            maxCount: 3, // Số người tối đa
            cancelDate: "8 tháng 11, 2024", // Ngày có thể hủy miễn phí
            remaining: 5, // Số phòng còn lại
            description: `
            1 × Bungalow Nhìn ra vườn
            Giá cho:
            Số người tối đa: 3
            Bungalow nguyên căn
            Giường: 1 giường đơn, 1 giường đôi
            Hủy miễn phí trước 8 tháng 11, 2024

            Không cần thanh toán trước - thanh toán tại chỗ nghỉ
            Chỉ còn 5 trên trang của chúng tôi
          `,
            price: "800.000",
            priceDetails: "Đã bao gồm thuế và phí",
        },
        //     {
        //         id: 3,
        //         name: "Phòng Tiêu Chuẩn Giường Đôi",
        //         adultCount: 2, // Số người lớn
        //         childCount: 0, // Số trẻ em
        //         bedDoubleCount: 1, // Số giường đôi lớn
        //         singleBedCount: 3, // Số giường đơn
        //         bedCount: 1, // Tổng số giường
        //         maxCount: 2, // Số người tối đa
        //         cancelDate: "8 tháng 11, 2024", // Ngày có thể hủy miễn phí
        //         remaining: 5, // Số phòng còn lại
        //         description: `
        //     1 × Phòng Tiêu Chuẩn Giường Đôi
        //     Giá cho:
        //     Số người tối đa: 2
        //     1 phòng khách sạn
        //     Giường: 1 giường đôi lớn
        //     Hủy miễn phí trước 8 tháng 11, 2024

        //     Không cần thanh toán trước - thanh toán tại chỗ nghỉ
        //     Chỉ còn 5 phòng trên trang của chúng tôi
        //   `,
        //         price: "700.000",
        //         priceDetails: "Đã bao gồm thuế và phí",
        //     },
    ];

    const totalPrice = {
        duration: "2 đêm",
        guests: "5 người lớn",
        amount: "1.500.000",
        amountDetails: "Đã bao gồm thuế và phí",
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const handleClick = () => {
        const element = document.getElementById("info-price");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    const emptyRoom = [
        {
            id: 1,
            name: "Biệt Thự 1 Phòng Ngủ",
            availability: 3,
            bedDetails: [
                {
                    type: "Giường đôi cực lớn",
                    quantity: 2,
                },
            ],
            roomType: "Biệt thự nguyên căn",
            size: "42 m²",
            features: [
                "Phòng tắm riêng",
                "TV màn hình phẳng",
                "Minibar",
                "WiFi miễn phí",
            ],
            bathroomAmenities: ["Nhà vệ sinh", "Khăn tắm"],
            additionalAmenities: [
                "Lối vào riêng",

                "Tủ hoặc phòng để quần áo",
                "Giấy vệ sinh",
            ],
            options: [
                {
                    guestCount: 4,
                    price: "2.106.000",
                    includesTaxesAndFees: true,
                    cancellationPolicy: {
                        freeCancellationUntil: "11 tháng 11, 2024",
                        noPrepayment: true,
                        discountsAvailable: true,
                    },
                },
                // {
                //     guestCount: 3,
                //     price: "2.063.880",
                //     includesTaxesAndFees: true,
                //     cancellationPolicy: {
                //         freeCancellationUntil: "11 tháng 11, 2024",
                //         noPrepayment: true,
                //         discountsAvailable: true,
                //     },
                // },
                // {
                //     guestCount: 2,
                //     price: "2.042.820",
                //     includesTaxesAndFees: true,
                //     cancellationPolicy: {
                //         freeCancellationUntil: "11 tháng 11, 2024",
                //         noPrepayment: true,
                //         discountsAvailable: true,
                //     },
                // },
            ],
        },
        {
            id: 2,
            name: "Biệt Thự 2 Phòng Ngủ",
            availability: 1,
            bedDetails: [
                {
                    type: "Giường đơn",
                    quantity: 2,
                },
                {
                    type: "Giường đôi cực lớn",
                    quantity: 1,
                },
            ],
            roomType: "Biệt thự nguyên căn",
            size: "78 m²",
            features: ["Ban công", "Nhìn ra vườn", "Điều hòa không khí"],
            bathroomAmenities: ["Nhà vệ sinh", "Khăn tắm", "Ra trải giường"],
            additionalAmenities: [
                "Ấm đun nước điện",
                "Bàn ghế ngoài trời",
                "Khu vực ăn uống ngoài trời",
                "Truyền hình cáp",
                "Giấy vệ sinh",
            ],
            options: [
                // {
                //     guestCount: 7,
                //     price: "4.059.450",
                //     includesTaxesAndFees: true,
                //     cancellationPolicy: {
                //         freeCancellationUntil: "11 tháng 11, 2024",
                //         noPrepayment: true,
                //         discountsAvailable: true,
                //     },
                // },
                {
                    guestCount: 8,
                    price: "4.185.000",
                    includesTaxesAndFees: true,
                    cancellationPolicy: {
                        freeCancellationUntil: "11 tháng 11, 2024",
                        noPrepayment: true,
                        discountsAvailable: true,
                    },
                },
            ],
        },
        // {
        //     id: 3,
        //     name: "Biệt Thự 3 Phòng Ngủ",
        //     availability: 2,
        //     bedDetails: [
        //         {
        //             type: "Giường đôi cực lớn",
        //             quantity: 6,
        //         },
        //     ],
        //     roomType: "Biệt thự nguyên căn",
        //     size: "100 m²",
        //     features: [
        //         "Ban công",
        //         "Nhìn ra vườn",
        //         "Điều hòa không khí",
        //         "Phòng tắm riêng",
        //         "TV màn hình phẳng",
        //         "Sân hiên",
        //         "Minibar",
        //         "WiFi miễn phí",
        //     ],
        //     bathroomAmenities: ["Nhà vệ sinh", "Khăn tắm", "Ra trải giường"],
        //     additionalAmenities: [
        //         "Khu vực tiếp khách",
        //         "Lối vào riêng",
        //         "TV",
        //         "Tủ lạnh",
        //         "Phòng thay quần áo",
        //         "Ấm đun nước điện",
        //         "Bàn ghế ngoài trời",
        //         "Khu vực ăn uống ngoài trời",
        //         "Truyền hình cáp",
        //         "Giấy vệ sinh",
        //     ],
        //     options: [
        //         {
        //             guestCount: 10,
        //             price: "5.500.000",
        //             includesTaxesAndFees: true,
        //             cancellationPolicy: {
        //                 freeCancellationUntil: "11 tháng 11, 2024",
        //                 noPrepayment: true,
        //                 discountsAvailable: true,
        //             },
        //         },
        //         {
        //             guestCount: 12,
        //             price: "5.900.000",
        //             includesTaxesAndFees: true,
        //             cancellationPolicy: {
        //                 freeCancellationUntil: "11 tháng 11, 2024",
        //                 noPrepayment: true,
        //                 discountsAvailable: true,
        //             },
        //         },
        //     ],
        // },
    ];
    const [rating, setRating] = useState();
    const handleRating = (value) => {
        setRating(value);
    };
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
            // console.log(detailRoomRef.current, event.target)
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
            <div
                className="flex justify-between items-center my-5"
                id="overview"
            >
                <div className="flex flex-col gap-2  w-[80%]">
                    <div className="text-2xl font-bold">
                        {hotelData?.hotel[0]?.name}
                    </div>
                    <div className="flex items-center">
                        <a href="">
                            <IoLocationSharp className="w-6 h-6 text-blue-600" />
                        </a>
                        <div className="flex text-sm space-x-1">
                            <div className="">
                            {hotelData?.hotel[0]?.address}
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
                <ImageHotel images={images}></ImageHotel>
            </div>
            <div className="mt-6">
                <div>
                    { hotelData?.hotel[0]?.description
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
            {/* <div className="mt-4">
                <div className="text-base font-bold mb-2">
                    Các tiện nghi được ưa chuộng nhất
                </div>
                <ul className="flex flex-wrap gap-6 text-gray-700">
                    {information.convenientLove.map((convenient, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <MdViewCozy className="text-green-600 w-5 h-5" />
                            <span className="text-sm">{convenient}</span>
                        </li>
                    ))}
                </ul>
            </div> */}
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
                        onChange={newValue =>  setDate({
                            startDate: new Date(newValue.startDate.setHours(0, 0, 0, 0)),
                            endDate: new Date(newValue.endDate.setHours(0, 0, 0, 0))
                        })}
                    />
                </div>

                <div className="relative col-span-2 hover:cursor-pointer bg-white rounded-lg p-2" onClick={() => { if (!isOpenDetail) setIsOpenDetail((prev) => !prev) }}>
                    <div className="h-full flex justify-between items-center">
                        <span className="flex items-center gap-2">
                            <span className="text-3xl"><CiUser /></span>
                            <span className="font-semibold">{`${detailRoom.adults} adults · ${detailRoom.children} children`}</span>
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
                    roomData={roomData}
                    totalPrice={totalPrice}
                ></RecommendHotel>
            </div>

            <div className="mt-5" id="info-price">
                <EmptyRoom emptyRoom={emptyRoom}></EmptyRoom>
            </div>

            <div id="reviews">
                <Rating id={1} onHandleRating={handleRating}></Rating>
            </div>
            <div id="convenient" className="mt-8">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        Các tiện nghi của  {hotelData?.hotel[0]?.name}
                    </div>
                </div>
                <div className="">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4 mt-4">
                        {hotelData?.hotel[0]?.amenity_type.map((item, index) => (
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
                {hotelData?.hotel[0]?.name} nhận yêu cầu đặc biệt - gửi yêu cầu
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
    );
};

export default HotelDetail;
