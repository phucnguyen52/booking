<div className="flex flex-row gap-12 mb-5">
                                        <div className="flex gap-2 items-center">
                                            <div className="font-medium">
                                                Thời gian đặt phòng:
                                            </div>
                                            <div>
                                                {format(
                                                    new Date(
                                                        order?.order_info?.booking_time
                                                    ),
                                                    "dd/MM/yyyy HH:mm "
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="font-medium">
                                                Thời gian nhận phòng:
                                            </div>
                                            <div>
                                                {format(
                                                    new Date(
                                                        order?.order_info?.check_in_time
                                                    ),
                                                    "dd/MM/yyyy HH:mm "
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="font-medium">
                                                Thời gian trả phòng:
                                            </div>
                                            <div>
                                                {format(
                                                    new Date(
                                                        order?.order_info?.check_out_time
                                                    ),
                                                    "dd/MM/yyyy HH:mm "
                                                )}
                                            </div>
                                        </div>
                                    </div>
<div className="overflow-x-auto bg-white rounded-lg">
                                        <table className="table-fixed min-w-full text-sm text-left text-gray-500">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                        style={{ width: "5%" }}
                                                    >
                                                        Mã
                                                    </th>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                        style={{ width: "22%" }}
                                                    >
                                                        Tên Phòng
                                                    </th>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700 text-center"
                                                        style={{ width: "5%" }}
                                                    >
                                                        Số Lượng
                                                    </th>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                        style={{ width: "14%" }}
                                                    >
                                                        Giá Phòng
                                                    </th>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                        style={{ width: "14%" }}
                                                    >
                                                        Giảm Giá
                                                    </th>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                        style={{ width: "15%" }}
                                                    >
                                                        Thành Tiền
                                                    </th>
                                                    <th
                                                        className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                        style={{ width: "12%" }}
                                                    >
                                                        Trạng Thái{" "}
                                                        {/* Cột trạng thái thanh toán */}
                                                    </th>
                                                    {order.order_info.status ===
                                                        "ĐÃ TRẢ" && (
                                                        <th
                                                            className="px-6 py-3 text-nowrap font-bold text-gray-700"
                                                            style={{
                                                                width: "13%",
                                                            }}
                                                        >
                                                            Thao Tác
                                                        </th>
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.order_info.rooms.map(
                                                    (room, roomIndex) => (
                                                        <React.Fragment
                                                            key={room.room_code}
                                                        >
                                                            <tr
                                                                className={`${
                                                                    roomIndex >
                                                                    0
                                                                        ? "border-t"
                                                                        : ""
                                                                } font-medium`}
                                                            >
                                                                <td className="px-6 py-4">
                                                                    {
                                                                        room.room_code
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {
                                                                        room.room_name
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4 text-center">
                                                                    {
                                                                        room.quantity
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {room.unit_price.toLocaleString()}{" "}
                                                                    VND
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {room.discount.toLocaleString()}{" "}
                                                                    VND
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {room.total_price.toLocaleString()}{" "}
                                                                    VND
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {room.payment_status.toLocaleString()}
                                                                </td>
                                                                {order
                                                                    .order_info
                                                                    .status ===
                                                                    "ĐÃ TRẢ" && (
                                                                    <td className="px-6 py-4">
                                                                        <Button
                                                                            color="blue"
                                                                            size="md"
                                                                            children="Đánh giá"
                                                                            textColor="white"
                                                                            handleClick={handleRating(
                                                                                room.room_code
                                                                            )}
                                                                        ></Button>
                                                                    </td>
                                                                )}
                                                            </tr>

                                                            {order.services
                                                                .filter(
                                                                    (service) =>
                                                                        service.room_code ===
                                                                        room.room_code
                                                                )
                                                                .map(
                                                                    (
                                                                        service
                                                                    ) => (
                                                                        <tr
                                                                            key={
                                                                                service.service_code
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    service.service_code
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    service.service_name
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4 text-center">
                                                                                {
                                                                                    service.quantity
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {service.unit_price.toLocaleString()}{" "}
                                                                                VND
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {service.discount.toLocaleString()}{" "}
                                                                                VND
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {service.total_price.toLocaleString()}{" "}
                                                                                VND
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {service.payment_status.toLocaleString()}
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )}
                                                        </React.Fragment>
                                                    )
                                                )}
                                                <tr className="font-bold bg-gray-100">
                                                    <td
                                                        colSpan={`${
                                                            order.order_info
                                                                .status ===
                                                            "ĐÃ TRẢ"
                                                                ? 7
                                                                : 6
                                                        }`}
                                                        className="px-6 py-2 text-right text-base"
                                                    >
                                                        <strong>
                                                            Tổng cộng:
                                                        </strong>
                                                    </td>
                                                    <td className="px-6 py-2 text-base text-nowrap">
                                                        {(
                                                            order.order_info.rooms.reduce(
                                                                (total, room) =>
                                                                    total +
                                                                    room.total_price,
                                                                0
                                                            ) +
                                                            order.services.reduce(
                                                                (
                                                                    total,
                                                                    service
                                                                ) =>
                                                                    total +
                                                                    service.total_price,
                                                                0
                                                            )
                                                        ).toLocaleString()}{" "}
                                                        VND
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div className="px-6 py-2 text-base flex">
                                            <div>
                                                Số Tiền Đã Thanh Toán:
                                            </div>
                                            {(
                                                order.order_info.rooms
                                                    .filter(
                                                        (room) =>
                                                            room.payment_status ===
                                                            "Đã thanh toán"
                                                    )
                                                    .reduce(
                                                        (total, room) =>
                                                            total +
                                                            room.total_price,
                                                        0
                                                    ) +
                                                order.services
                                                    .filter(
                                                        (service) =>
                                                            service.payment_status ===
                                                            "Đã thanh toán"
                                                    )
                                                    .reduce(
                                                        (total, service) =>
                                                            total +
                                                            service.total_price,
                                                        0
                                                    )
                                            ).toLocaleString()}{" "}
                                            VND
                                        </div>

                                        {/* Dòng tiền còn lại */}
                                        <div className="font-bold bg-gray-100 px-6 py-2 text-base">
                                            <strong>Số Tiền Còn Lại:</strong>
                                            {(
                                                order.order_info.rooms.reduce(
                                                    (total, room) =>
                                                        total +
                                                        room.total_price,
                                                    0
                                                ) +
                                                order.services.reduce(
                                                    (total, service) =>
                                                        total +
                                                        service.total_price,
                                                    0
                                                ) -
                                                order.order_info.rooms
                                                    .filter(
                                                        (room) =>
                                                            room.payment_status ===
                                                            "Đã thanh toán"
                                                    )
                                                    .reduce(
                                                        (total, room) =>
                                                            total +
                                                            room.total_price,
                                                        0
                                                    ) -
                                                order.services
                                                    .filter(
                                                        (service) =>
                                                            service.payment_status ===
                                                            "Đã thanh toán"
                                                    )
                                                    .reduce(
                                                        (total, service) =>
                                                            total +
                                                            service.total_price,
                                                        0
                                                    )
                                            ).toLocaleString()}{" "}
                                            VND
                                        </div>

                                        {/* Dòng tiền đã thanh toán cho phòng */}
                                        <div className="font-bold bg-gray-100 px-6 py-2 text-base">
                                            <strong>
                                                Tiền Đặt Phòng Đã Thanh Toán:
                                            </strong>
                                            {order.order_info.rooms
                                                .filter(
                                                    (room) =>
                                                        room.payment_status ===
                                                        "Đã thanh toán"
                                                )
                                                .reduce(
                                                    (total, room) =>
                                                        total +
                                                        room.total_price,
                                                    0
                                                )
                                                .toLocaleString()}{" "}
                                            VND
                                        </div>

                                        {/* Dòng tiền đã thanh toán cho dịch vụ */}
                                        <div className="font-bold bg-gray-100 px-6 py-2 text-base">
                                            <strong>
                                                Tiền Dịch Vụ Đã Thanh Toán:
                                            </strong>
                                            {order.services
                                                .filter(
                                                    (service) =>
                                                        service.payment_status ===
                                                        "Đã thanh toán"
                                                )
                                                .reduce(
                                                    (total, service) =>
                                                        total +
                                                        service.total_price,
                                                    0
                                                )
                                                .toLocaleString()}{" "}
                                            VND
                                        </div>

                                        {/* Dòng tiền cần thanh toán */}
                                        <div className="font-bold bg-gray-100 px-6 py-2 text-base">
                                            <strong>
                                                Tổng Tiền Cần Thanh Toán:
                                            </strong>
                                            {(
                                                order.order_info.rooms
                                                    .filter(
                                                        (room) =>
                                                            room.payment_status !==
                                                            "Đã thanh toán"
                                                    )
                                                    .reduce(
                                                        (total, room) =>
                                                            total +
                                                            room.total_price,
                                                        0
                                                    ) +
                                                order.services
                                                    .filter(
                                                        (service) =>
                                                            service.payment_status !==
                                                            "Đã thanh toán"
                                                    )
                                                    .reduce(
                                                        (total, service) =>
                                                            total +
                                                            service.total_price,
                                                        0
                                                    )
                                            ).toLocaleString()}{" "}
                                            VND
                                        </div>
                                    </div>