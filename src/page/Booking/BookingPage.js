import React, { useEffect, useRef, useState } from "react";
import CardItem from "./CardItem";
import { Slider } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { searchHotel } from "../../service/hotelService";
import HotelItem from "./HotelItem";
import { APP_ROUTER } from "../../utils/Constants";


// const hotels = [
//     {
//         nameHotel: "De Huong Duong Residences",
//         address: "40 Đường Lâm Hoành, Phước Mỹ, Sơn Trà, Da Nang, Vietnam",
//         starRating: 4,
//         amenityHotel: {
//             name: "Late Escape Deal",
//             detail: "This property is offering a discount on stays between 1 October 2024–7 January 2025"
//         },
//         room: [
//             {
//                 nameRoom: "Family Junior Suite",
//                 bed: { quantity: 2, nameBed: "large double bed" },
//                 quantity: 1
//             },
//             {
//                 nameRoom: "Deluxe Double Room",
//                 bed: { quantity: 2, nameBed: "large double bed" },
//                 quantity: 2
//             }
//         ],
//         totalAmount: 6000000,
//         discount: 5,
//         images: [
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg"
//         ]
//     },
//     {
//         nameHotel: "Lavender Boutique Hotel",
//         address: "85 Nguyễn Văn Linh, Hải Châu, Da Nang, Vietnam",
//         starRating: 3,
//         amenityHotel: {
//             name: "Breakfast Special",
//             detail: "Complimentary breakfast included with stay."
//         },
//         room: [
//             {
//                 nameRoom: "Standard Room",
//                 bed: { quantity: 1, nameBed: "double bed" },
//                 quantity: 1
//             },
//             {
//                 nameRoom: "Twin Room",
//                 bed: { quantity: 2, nameBed: "single bed" },
//                 quantity: 1
//             }
//         ],
//         totalAmount: 4000000,
//         discount: 15,
//         images: [
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg"
//         ]
//     },
//     {
//         nameHotel: "Sunshine Hotel & Spa",
//         address: "102 Võ Nguyên Giáp, Ngũ Hành Sơn, Da Nang, Vietnam",
//         starRating: 5,
//         amenityHotel: {
//             name: "Luxury Offer",
//             detail: "Includes spa access and late checkout."
//         },
//         room: [
//             {
//                 nameRoom: "Presidential Suite",
//                 bed: { quantity: 1, nameBed: "king bed" },
//                 quantity: 1
//             },
//             {
//                 nameRoom: "Deluxe Suite",
//                 bed: { quantity: 1, nameBed: "queen bed" },
//                 quantity: 2
//             }
//         ],
//         totalAmount: 245000000,
//         discount: 20,
//         images: [
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg"
//         ]
//     },
//     {
//         nameHotel: "Grand Beach Hotel",
//         address: "90 Lê Duẩn, Thanh Khê, Da Nang, Vietnam",
//         starRating: 4,
//         amenityHotel: {
//             name: "Beachside Relax",
//             detail: "Free access to private beach and shuttle service."
//         },
//         room: [
//             {
//                 nameRoom: "Beachfront Room",
//                 bed: { quantity: 1, nameBed: "king bed" },
//                 quantity: 1
//             },
//             {
//                 nameRoom: "Ocean View Room",
//                 bed: { quantity: 2, nameBed: "single bed" },
//                 quantity: 1
//             }
//         ],
//         totalAmount: 170000000,
//         discount: 12,
//         images: [
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg"
//         ]
//     },
//     {
//         nameHotel: "Green Garden Resort",
//         address: "200 Phạm Văn Đồng, Sơn Trà, Da Nang, Vietnam",
//         starRating: 3,
//         amenityHotel: {
//             name: "Eco Stay",
//             detail: "Stay in eco-friendly rooms with organic amenities."
//         },
//         room: [
//             {
//                 nameRoom: "Garden View Room",
//                 bed: { quantity: 1, nameBed: "queen bed" },
//                 quantity: 1
//             },
//             {
//                 nameRoom: "Family Room",
//                 bed: { quantity: 2, nameBed: "single bed" },
//                 quantity: 1
//             }
//         ],
//         totalAmount: 98000000,
//         discount: 10,
//         images: [
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713535579/DTU_CIDO_3/cf5_jxikjp.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581874/DTU_CIDO_3/uIMG_1035_copy_twjdif.jpg",
//             "https://res.cloudinary.com/dkhqruqbd/image/upload/v1713581887/DTU_CIDO_3/IMG_1067_copy_zxqar7.jpg"
//         ]
//     }
// ];

const BookingPage = () => {
    const [hotels, setHotels] = useState([])
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const placeParam = searchParams.get("place");
    const checkinParam = searchParams.get("checkin");
    const checkoutParam = searchParams.get("checkout");
    const adultsParam = searchParams.get("adults");
    const navigate = useNavigate()

    useEffect(() => {
        const searchObj = {
            search: placeParam,
            start: checkinParam,
            end: checkoutParam,
          };
        const fetchData = async () => {
            const data = await searchHotel(searchObj)
            if (data?.length > 0) setHotels(data)
        }
        fetchData()
    }, [placeParam, checkinParam, checkoutParam])

    const handleHotel = (id) => {
        const queryParams = new URLSearchParams({
            adult_count: adultsParam,
            checkin: checkinParam,
            checkout: checkoutParam,
        }).toString();
        navigate(`${APP_ROUTER.HOTELDETAIL}/${id}?${queryParams}`)
    }


    // console.log("hotels: " , hotels)
    // const [filteredHotels, setFilteredHotels] = useState(hotels)
    // const [filter, setFilter] = useState({
    //     price: [0, 1000000000],
    //     propertyType: {},

    // })
    return (
        <div className="container mx-auto flex gap-2">
            {/* FILTER */}
            {/* <div className="h-fit basis-1/4 shrink-0  border gap-0 rounded-md">
                <div className="p-4 border-b font-bold">LỌC THEO:</div>
                <div className="p-4 border-b">
                    <div className="font-bold mb-2">Ngân sách của bạn (mỗi đêm) </div>
                    <div>VND {filter.price[0].toLocaleString()} - VND {filter.price[1].toLocaleString()}</div>
                    <Slider
                        range
                        step={10}
                        value={filter.price}
                        min={0}
                        max={1000000}
                        onChange={(value) => setFilter({ ...filter, price: value })}
                        onChangeComplete={(value) => setFilter({ ...filter, price: value })}
                    />
                </div>

                <div className="p-4 border-b">
                    <div className="font-bold mb-4">Loại hình lưu trú </div>
                    {[{id:1, name:"Hotel"},{id:2, name:"Villas"}].map((item) => (
                        <label class="ms-2 text-gray-900 flex items-center gap-2 mb-1">
                            <input 
                            type="checkbox" 
                            name="propertyType" value={item.id} 
                            onChange={(e) => setFilter(prev=>({...prev, propertyType: {...prev.propertyType, [item.id]:e.target.checked}}))}
                            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 " 
                            />
                            {item.name}
                        </label>
                    ))}  
                </div>

                <div className="p-4 border-b">
                    <div className="font-bold mb-4">Đánh giá</div>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label class="ms-2 text-gray-900 flex items-center gap-2 mb-1">
                            <input 
                            type="checkbox" 
                            name="star" value={star} 
                            onChange={(e) => setFilter(prev=>({...prev, starRating: {...prev.starRating, [star]:e.target.checked}}))}
                            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 " 
                            />
                            {star} sao
                        </label>
                    ))}                    
                </div>
                <div className="p-4 border-b">
                    <div className="font-bold mb-4">Ưu tiên loại giường</div>
                    {[{id:1, name:"Giường trẻ con"},{id:2, name:"Giường đơn"},{id:3, name:"Giường đôi"}].map((item) => (
                        <label class="ms-2 text-gray-900 flex items-center gap-2 mb-1">
                            <input 
                            type="checkbox" 
                            name="typeBed" value={item.id} 
                            onChange={(e) => setFilter(prev=>({...prev, typeBed: {...prev.typeBed, [item.id]:e.target.checked}}))}
                            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 " 
                            />
                            {item.name}
                        </label>
                    ))}  
                </div>
                <div className="p-4 border-b">
                    <div className="font-bold mb-4">Tiện nghi phòng </div>
                    {[{id:1, name:"Điều hoà"},{id:2, name:"Máy giặt"},{id:3, name:"Tivi"}, ,{id:4, name:"Bàn làm việc"}].map((item) => (
                        <label class="ms-2 text-gray-900 flex items-center gap-2 mb-1">
                            <input 
                            type="checkbox" 
                            name="roomFacilities" value={item.id} 
                            onChange={(e) => setFilter(prev=>({...prev, roomFacilities: {...prev.roomFacilities, [item.id]:e.target.checked}}))}
                            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 " 
                            />
                            {item.name}
                        </label>
                    ))}  
                </div>

                <div className="p-4 border-b">
                    <div className="font-bold mb-4">Dịch vụ </div>
                    {[{id:1, name:"Wifi"},{id:1, name:"Bãi đậu xe"}].map((item) => (
                        <label class="ms-2 text-gray-900 flex items-center gap-2 mb-1">
                            <input 
                            type="checkbox" 
                            name="amenityType" value={item.id} 
                            onChange={(e) => setFilter(prev=>({...prev, amenityType: {...prev.amenityType, [item.id]:e.target.checked}}))}
                            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 " 
                            />
                            {item.name}
                        </label>
                    ))}  
                </div>
            </div> */}

            {/* {hotels?.length > 0 &&
                <div className="basis-3/4">
                    {hotels.map((hotel, index) => (
                        <CardItem
                            key={index}
                            nameHotel={hotel.nameHotel}
                            address={hotel.address}
                            starRating={hotel.starRating}
                            amenityHotel={hotel.amenityHotel}
                            room={hotel.room}
                            totalAmount={hotel.totalAmount}
                            discount={hotel.discount}
                            images={hotel.images}
                        />
                    ))}
                </div>
            } */}
            {hotels?.length > 0 ?
                <div className="w-full">
                    {hotels.map((hotel, index) => (
                        <HotelItem
                            key={index}
                            id={hotel.id}
                            nameHotel={hotel.hotel_name}
                            address={hotel.address + ' ' + hotel.city}
                            description={hotel.description}
                            images={JSON.parse(hotel.image)}
                            handleHotel={handleHotel}
                        />
                    ))}
                </div>
            :
            <div className="font-semibold text-xl text-center w-full py-4">
                Không có khách sạn phù hợp
            </div>
        }
        </div>
    );
}

export default BookingPage;
