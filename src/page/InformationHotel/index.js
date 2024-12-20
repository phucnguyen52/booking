import React, { useEffect, useState } from 'react';
import { getHotelDetail } from '../../service/hotelService';
import Cookies from 'js-cookie';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import ImageHotel from '../HotelDetail/ImageHotel';
const InformationHotel = () => {
    const hotelId = Cookies.get('hotel_id');
    const [hotelData, setHotelData] = useState(null);  
    useEffect(() => {
        const fetchHotelDetail = async () => {
          try {
            const data = await getHotelDetail(hotelId);
            console.log("dataaa", data)
            setHotelData(data);  
          } catch (error) {
            // setError(error); 
          } finally {
            // setLoading(false); 
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
    return (
        <div className='p-10 h-full overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
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
        </div>
    );
};

export default InformationHotel;