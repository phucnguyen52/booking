import React, { useState } from "react";

const ImageHotel = ({ images }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const imageArray = JSON.parse(images); 
    return (
        <div>
            <div className="grid w-full gap-x-2 gap-y-1">
                {imageArray.length === 1 && (
                    <div className="col-span-3 aspect-[3/2] overflow-hidden rounded-lg">
                        <img
                            src={imageArray[0]}
                            alt="Hotel Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                {imageArray.length === 2 && (
                    <div className="col-span-3 grid grid-cols-2 gap-x-2">
                        {imageArray.slice(0, 2).map((image, index) => (
                            <div
                                key={index}
                                className="aspect-[3/2] overflow-hidden rounded-lg"
                            >
                                <img
                                    src={image}
                                    alt={`Hotel Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}
                {imageArray.length === 3 && (
                    <div className="grid grid-cols-3 gap-x-2">
                        <div className="col-span-1 grid grid-rows-2 gap-y-2">
                            {imageArray.slice(0, 2).map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-[3/2] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Hotel Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="col-span-2 row-span-2 aspect-[3/2] overflow-hidden rounded-lg">
                            <img
                                src={imageArray[2]}
                                alt="Hotel Main Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}

                {imageArray.length === 4 && (
                    <div className="grid grid-cols-2 gap-2">
                        {imageArray.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-[3/2] overflow-hidden rounded-lg"
                            >
                                <img
                                    src={image}
                                    alt={`Hotel Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {imageArray.length >= 5 && imageArray.length <= 7 && (
                    <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                        <div className="col-span-1 grid grid-rows-2 gap-y-2">
                            {imageArray.slice(0, 2).map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-[3/2] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Hotel Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2 row-span-2 aspect-[3/2] overflow-hidden rounded-lg">
                            <img
                                src={imageArray[2]}
                                alt="Hotel Main Image"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="col-span-3 flex gap-x-2">
                            {imageArray.slice(3).map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-1 aspect-[3/2] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Hotel Extra Image ${index + 4}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {imageArray.length > 7 && (
                    <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                        <div className="col-span-1 grid grid-rows-2 gap-y-2">
                            {imageArray.slice(0, 2).map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-[3/2] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Hotel Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2 row-span-2 aspect-[3/2] overflow-hidden rounded-lg">
                            <img
                                src={imageArray[2]}
                                alt="Hotel Main Image"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="col-span-3 grid grid-cols-5 gap-x-2">
                            {imageArray.slice(3, 7).map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-[3/2] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Hotel Extra Image ${index + 4}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <button
                                className="relative aspect-[3/2] overflow-hidden rounded-lg"
                                onClick={() => setModalOpen(true)}
                            >
                                <img
                                    src={imageArray[7]}
                                    alt="Additional Hotel Images"
                                    className="w-full h-full object-cover opacity-50"
                                />

                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-medium text-lg">
                                    + {imageArray.length - 7} hình
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div
                    onClick={() => setModalOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-[90%] h-[90%] bg-white rounded-lg p-4"
                    >
                        <div className="flex justify-center items-center pb-3">
                            <div className="flex justify-center items-center gap-3">
                                <div className="text-xl font-bold">
                                    Huong Giang Bungalow
                                </div>
                                <button className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Đặt ngay
                                </button>
                            </div>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-blue-800"
                            >
                                &times;
                            </button>
                        </div>
                        <hr />

                        {/* full image */}
                        <div
                            className="overflow-y-auto mt-4 pr-4 [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:bg-gray-300
                                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                            style={{ maxHeight: "77vh" }}
                        >
                            <div className="grid grid-cols-4 gap-2">
                                {imageArray.map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-[3/2] overflow-hidden rounded-lg"
                                    >
                                        <img
                                            src={image}
                                            alt={`Hotel Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageHotel;
