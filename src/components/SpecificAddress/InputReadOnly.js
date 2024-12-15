import React from "react";

const InputReadOnly = ({ label, value }) => {
    return (
        <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="exactly-address">
                {label}
            </label>
            <input
                type="text"
                id="exactly-address"
                readOnly
                className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 outline-none cursor-not-allowed"
                value={value || ""}
            />
        </div>
    );
};

export default InputReadOnly;
