import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import { BsThreeDots } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { toast } from "react-toastify";
const Content = () => {
    const [checkIn, setCheckIn] = useState("2024-11-14T05:39");
    const [checkOut, setCheckOut] = useState("2024-11-18T21:20");
    const currentDateTime = new Date().toISOString().slice(0, 16);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState("");
    const [selectedRoom, setSelectedRoom] = useState("");
    const [mode, setMode] = useState("day");
    const mockRooms = [
        { id: 1, name: "Phòng 101" },
        { id: 2, name: "Phòng 102" },
        { id: 3, name: "Phòng 103" },
        { id: 4, name: "Phòng 104" },
    ];
    const [items, setItems] = useState([
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
        {
            name: "Phòng 01 giường đôi cho 2 người (Giờ)",
            price: 180000,
            quantity: 10,
            total: 0,
        },
    ]);
    const handleCheckInChange = (e) => {
        const newTime = e.target.value;
        const now = new Date();
        const selectedTime = new Date(newTime);
        if (selectedTime >= now) {
            setCheckIn(newTime);
            updateItems();
            if (checkOut && selectedTime > new Date(checkOut)) {
                setCheckOut(newTime);
            }
        } else {
            toast.warning(
                "Thời gian trả phòng phải bé hơn thời gian trả  phòng và thơi gian hiện tại!"
            );
        }
    };
    const handleCheckOutChange = (e) => {
        const newTime = e.target.value;
        const selectedTime = new Date(newTime);
        const checkInTime = new Date(checkIn);

        if (selectedTime >= checkInTime) {
            setCheckOut(newTime);
            updateItems();
        } else {
            toast.warning(
                "Thời gian trả phòng phải lớn hơn hoặc bằng thời gian nhận phòng và thơi gian hiện tại!"
            );
        }
    };
    const getTotalHours = (checkIn, checkOut) => {
        const inTime = new Date(checkIn);
        const outTime = new Date(checkOut);
        const diffInMs = outTime - inTime;
        return Math.floor(diffInMs / (1000 * 60 * 60));
    };
    const calculateStayDuration = () => {
        const totalHours = getTotalHours(checkIn, checkOut);

        if (mode === "day") {
            const days = Math.floor(totalHours / 24);
            const remainingHours = totalHours % 24;
            return `${days} ngày ${remainingHours} giờ`;
        } else {
            const hours = totalHours;
            const minutes = Math.floor(
                ((new Date(checkOut) - new Date(checkIn)) % (1000 * 60 * 60)) /
                    (1000 * 60)
            );
            return `${hours} giờ ${minutes} phút`;
        }
    };
    const updateItems = () => {
        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.name.includes("Phòng")) {
                    return {
                        ...item,
                        quantity: 10,
                        total: calculateStayDuration() * item.price,
                    };
                }
                return item;
            })
        );
    };
    const total = items.reduce((sum, item) => sum + item.total, 0);
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };
    const saveNote = () => {
        setShowModal(false);
    };
    const handleRoomSelect = (event) => {
        setSelectedRoom(event.target.value);
    };
    const handlePriceChange = (index, newPrice) => {
        const updatedItems = items.map((item, i) => {
            if (i === index) {
                const updatedPrice = parseFloat(newPrice) || 0;
                return {
                    ...item,
                    price: updatedPrice,
                    total: updatedPrice * item.quantity,
                };
            }
            return item;
        });
        setItems(updatedItems);
    };
const handleClick = () => {

}
    return (
        <div className="w-[70%] h-full flex flex-col justify-between ">
            <div className=" bg-gray-100/40 h-[98%] border border-1 border-gray-300 rounded-xl ">
                <div className="p-4 min-h-[550px] border-b">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">
                                P.202 - Phòng 01 giường đôi cho 2 người
                            </h2>
                            <div
                                className="flex gap-1 items-center text-gray-600 "
                                onClick={toggleModal}
                            >
                                <LuPencilLine className="w-3 h-3" />
                                <span className="text-xs break-words">
                                    Nhập ghi chú ...
                                </span>
                            </div>
                            {showModal && (
                                <div
                                    onClick={toggleModal}
                                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
                                >
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className="relative bg-white rounded-lg p-4 w-[400px] shadow-md"
                                    >
                                        <div
                                            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                                            onClick={toggleModal}
                                        >
                                            <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                                                ✖
                                            </button>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-4">
                                            Ghi chú
                                        </h3>
                                        <div className="relative w-full mb-3">
                                            <textarea
                                                className="transition-all duration-300 w-full outline-none border text-sm border-gray-200 bg-gray-100 focus-within:bg-white rounded-lg p-4 pl-10 resize-none focus:border-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none focus:shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                rows="8"
                                                placeholder={
                                                    note === ""
                                                        ? "Nhập ghi chú..."
                                                        : ""
                                                }
                                                value={note}
                                                onChange={(e) =>
                                                    setNote(e.target.value)
                                                }
                                            />
                                            <LuPencilLine
                                                className="absolute left-4 top-4 text-gray-400"
                                                size={20}
                                            />
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <button
                                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                                onClick={toggleModal}
                                            >
                                                Bỏ qua
                                            </button>
                                            <button
                                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                onClick={saveNote}
                                            >
                                                Lưu
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative flex gap-2 items-center">
                            <Button size="xs" color='blue'>Trả phòng</Button>
                            <div
                                onClick={toggleMenu}
                                className="cursor-pointer hover:bg-gray-200 hover:rounded-full focus-within:bg-gray-600 w-8 h-8 flex items-center justify-center"
                            >
                                <BsThreeDots className="w-5 h-5 " />
                            </div>
                            {showMenu && (
                                <div
                                    className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-lg z-50 w-40"
                                    onBlur={handleClickOutside}
                                    ref={menuRef}
                                >
                                    <ul className="text-sm">
                                        <li className="p-2 hover:bg-gray-100 cursor-pointer">
                                            Đổi phòng
                                        </li>
                                        <li className="p-2 hover:bg-gray-100 cursor-pointer">
                                            Ghép đoàn
                                        </li>
                                        <li className="p-2 hover:bg-gray-100 cursor-pointer">
                                            Trở về trạng thái trước
                                        </li>
                                        <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-500">
                                            Xóa phòng
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="border rounded-md p-4 bg-gray-50 flex shadow-md items-end gap-2">
                            <div className="">
                                <label
                                    htmlFor="mode-select"
                                    className="text-xs text-gray-600 mb-1"
                                >
                                    Hình thức
                                </label>
                                <select
                                    id="mode-select"
                                    value={mode}
                                    onChange={(e) => setMode(e.target.value)}
                                    className="outline-none block min-w-32 px-4 py-2 border rounded-lg bg-white border-gray-300 focus:ring-green-600 focus:border-green-600 text-xs focus:shadow-[0_3px_10px_rgb(0,20,20,0.2)]"
                                >
                                    <option value="hour">Giờ</option>
                                    <option value="day">Ngày</option>
                                </select>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="room-selector"
                                    className="text-xs text-gray-600 mb-1"
                                >
                                    Phòng
                                </label>
                                <select
                                    id="room-selector"
                                    value={selectedRoom}
                                    onChange={handleRoomSelect}
                                    className="outline-none block min-w-32 px-4 py-2 border rounded-lg bg-white border-gray-300 focus:ring-green-600 focus:border-green-600 text-xs focus:shadow-[0_3px_10px_rgb(0,20,20,0.2)]"
                                >
                                    <option value="" disabled>
                                        Chọn phòng
                                    </option>
                                    {mockRooms.map((room) => (
                                        <option key={room.id} value={room.name}>
                                            {room.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-2 flex flex-col gap-4">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <p className="text-xs text-gray-600 mb-1">
                                            Nhận phòng
                                        </p>
                                        <input
                                            type="datetime-local"
                                            value={checkIn}
                                            onChange={handleCheckInChange}
                                            min={currentDateTime}
                                            className={`border rounded-md px-4 py-2 text-xs outline-none bg-white`}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600 mb-1">
                                            Trả phòng
                                        </p>
                                        <input
                                            type="datetime-local"
                                            value={checkOut}
                                            onChange={handleCheckOutChange}
                                            min={checkIn || currentDateTime}
                                            className={`border rounded-md px-4 py-2 text-xs outline-none bg-white`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-xs text-gray-600 mb-1">
                                    Lưu trú
                                </p>
                                <div className="border rounded-md px-5 py-2 outline-none text-xs bg-gray-100 min-w-32">
                                    {calculateStayDuration()}
                                </div>
                            </div>
                        </div>

                        <div className="max-h-96 overflow-y-auto rounded-md relative [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:bg-gray-300
                                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <table className="w-full shadow-md ">
                                <thead className="sticky top-0 z-10 bg-slate-50">
                                    <tr className="border-b text-sm">
                                        <th className="text-left p-2 font-semibold">
                                            STT
                                        </th>
                                        <th className="text-left py-4 font-semibold">
                                            Hạng mục
                                        </th>
                                        <th className="text-center py-4 font-semibold">
                                            Số lượng
                                        </th>
                                        <th className="text-right py-4 font-semibold">
                                            Đơn giá
                                        </th>
                                        <th className="text-right p-4 font-semibold ">
                                            Thành tiền
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="o">
                                    {items.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100 text-sm my-2"
                                        >
                                            <td className="px-4 py-2">
                                                {index + 1}
                                            </td>
                                            <td className="py-2 font-semibold">
                                                {item.name}
                                            </td>
                                            <td className="text-center py-2">
                                                {item.quantity}
                                            </td>
                                            <td className="text-right py-2">
                                                <input
                                                    type="number"
                                                    value={item.price}
                                                    onChange={(e) =>
                                                        handlePriceChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    min={1000}
                                                    required
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 w-28 text-right outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
                                                />
                                            </td>
                                            <td className="text-right py-2 px-4 font-semibold">
                                                {item.total.toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-b-xl bg-white shadow-current flex items-center justify-end gap-2 text-sm text-green-700 font-semibold">
                    <div className="">Tổng tiền</div>
                    <p className="px-5 py-3">{total.toLocaleString()}</p>
                </div>
            </div>
            <div className="mt-4 w-full p-4 h-[2%] border border-1 border-gray-300 rounded-xl flex justify-end items-center">
                <Button
                    color="green"
                    children="Thanh toán"
                    size="sm"
                    border={false}
                    id="info-price"
                    handleClick={handleClick}
                ></Button>
            </div>
        </div>
    );
};

export default Content;
