import React, { useState } from "react";
import Button from "../../../components/Button";
import { BsImageFill } from "react-icons/bs";
const AddRoom = ({ handleClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState([]);
    const [formData, setFormData] = useState({
        roomName: "",
        area: "",
        roomClass: "",
        note: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const room = [
        { id: 1, name: "Tầng 1" },
        { id: 2, name: "Tầng 2" },
        { id: 3, name: "Tầng 3" },
        { id: 4, name: "Tầng 4" },
        { id: 5, name: "Tầng 5" },
    ];
    const roomClasses = [
        { id: 1, name: "Hạng tiêu chuẩn", priceDay: 500000 },
        { id: 2, name: "Hạng cao cấp", priceDay: 800000 },
        { id: 3, name: "Hạng VIP", priceDay: 1500000 },
        { id: 4, name: "Hạng Suite", priceDay: 2000000 },
    ];
    const handleBeforeUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("images", file);
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8080/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setImageUrl((prevUrls) => [...prevUrls, data]);
        } catch (error) {
            console.error("Tải ảnh không thành công", error);
        }
        setIsLoading(false);
    };

    const onSubmit = () => {
        const finalData = {
            ...formData,
            imageUrl,
        };
        console.log(finalData);
    };

    return (
        <div className="relative h-full">
            <div
                className=" rounded-lg h-[90%] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
                <div className="flex items-center justify-between p-5">
                    <div className="text-2xl font-bold text-center">
                        Thêm phòng mới
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-10 py-5 bg-white w-full">
                    <div className="flex gap-8 w-full">
                        <div className="w-1/2 flex flex-col justify-between">
                            <div className="mb-4 flex items-center">
                                <label className="text-sm font-medium text-gray-700 text-nowrap w-44">
                                    Tên phòng
                                </label>
                                <input
                                    type="text"
                                    name="roomName"
                                    placeholder="Nhập tên phòng"
                                    className="rounded-t-lg p-2 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-[2px] border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 focus:border-b-2 peer"
                                    value={formData.roomName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="text-sm font-medium text-gray-700 text-nowrap w-44">
                                    Khu vực
                                </label>
                                <select
                                    name="area" // Gắn tên trường là "area"
                                    value={formData.area} // Giá trị từ formData
                                    onChange={handleChange}
                                    className="focus:outline-none px-1 py-3 block w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-[2px] border-gray-400 dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:ring-0 focus:border-green-600 focus:border-b-2 peer"
                                >
                                    <option
                                        value=""
                                        className="bg-white text-gray-300"
                                    >
                                        Lựa chọn
                                    </option>
                                    {/* Hiển thị danh sách tầng */}
                                    {room.map((option) => (
                                        <option
                                            key={option.id}
                                            value={option.name}
                                            className="bg-white"
                                        >
                                            {option.name}{" "}
                                            {/* Hiển thị tên tầng */}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4 flex items-center">
                                <label className="text-sm font-medium text-gray-700 text-nowrap w-44">
                                    Hạng phòng
                                </label>
                                <select
                                    name="roomClass" // Gắn giá trị hạng phòng vào formData.roomClass
                                    value={formData.roomClass}
                                    onChange={handleChange}
                                    className="focus:outline-none px-1 py-3 block w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-[2px] border-gray-400 dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:ring-0 focus:border-green-600 focus:border-b-2 peer"
                                >
                                    <option value="">Lựa chọn</option>
                                    {roomClasses.map((roomClass) => (
                                        <option
                                            key={roomClass.id}
                                            value={roomClass.name}
                                        >
                                            {roomClass.name}
                                          
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="text-sm font-medium text-gray-700 text-nowrap w-44">
                                    Ghi chú
                                </label>

                                <textarea
                                    name="note"
                                    id="note"
                                    placeholder="Ghi chú..."
                                    cols="30"
                                    rows="1"
                                    value={formData.note}
                                    className="resize-none rounded-t-lg p-2 text-sm text-gray-900 w-full dark:bg-gray-700 border-0 border-b-[2px] border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 focus:border-b-2 peer overflow-hidden"
                                    onChange={(e) => {
                                        handleChange(e); // Gọi hàm xử lý khi thay đổi giá trị
                                        e.target.style.height = "auto"; // Đặt chiều cao về tự động để tính toán lại
                                        e.target.style.height = `${e.target.scrollHeight}px`; // Cập nhật chiều cao dựa trên nội dung
                                    }}
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex-1 w-1/2">
                            <div className="bg-gray-100 p-4 rounded-md mt-2 text-sm text-gray-700 h-full">
                                <h4 className="text-sm font-medium text-gray-700 mb-3">
                                    Phòng sẽ được áp dụng theo giá của hạng
                                    phòng:
                                </h4>
                                <ul className="list-disc ml-4">
                                    <li className="mb-3">Giá cả ngày</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="rounded-md w-full border">
                            <h3 className="font-medium text-gray-700 mb-4 bg-gray-100 p-3">
                                Hình ảnh
                            </h3>
                            <div className="mt-6 mb-4">
                                <div className="flex items-center justify-center">
                                    {isLoading ? (
                                        <div
                                            role="status"
                                            className="flex items-center justify-center"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="h-8 w-8 animate-spin fill-black text-gray-200 dark:text-gray-600"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleBeforeUpload}
                                                style={{
                                                    position: "absolute",
                                                    left: "-9999px",
                                                }}
                                                id="image-upload"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "image-upload"
                                                        )
                                                        .click()
                                                }
                                                disabled={isLoading}
                                                className="flex items-center justify-center rounded bg-gray-300 px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-400"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mr-2 inline w-6 fill-black"
                                                    viewBox="0 0 32 32"
                                                >
                                                    <path
                                                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                                        data-original="#000000"
                                                    />
                                                    <path
                                                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                                        data-original="#000000"
                                                    />
                                                </svg>
                                                Chọn ảnh
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {imageUrl.length > 0 ? (
                                    <div className="mt-4 grid grid-cols-3 gap-2 w-full p-2">
                                        {imageUrl.map((url, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-center p-1 border border-1 border-gray-200 rounded-md"
                                            >
                                                <img
                                                    src={url}
                                                    alt={`Uploaded ${index}`}
                                                    className="h-[160px] w-[240px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="mt-4 flex justify-center">
                                        <div className="h-[150px] w-[150px] border-2 border-dashed flex items-center justify-center">
                                            <BsImageFill className="h-[100px] w-[100px] text-gray-300 " />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-b-lg absolute bottom-0 left-0 w-full bg-white border-t border-gray-300 flex flex-end justify-end gap-2 px-10 py-3">
                <Button
                    color="green"
                    textColor="text-white"
                    children="Lưu và thêm mới"
                    size="lg"
                    handleClick={onSubmit}
                />
                <Button
                    color="gray"
                    textColor="text-gray-700"
                    children="Hủy"
                    size="lg"
                    handleClick={handleClose}
                />
            </div>
        </div>
    );
};

export default AddRoom;
