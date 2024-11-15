import * as React from "react";

const Button = ({
    id,
    handleClick,
    children,
    type = "button",
    color,
    htmlType,
    className = "",
    size = "default",
    border = true,
    disabled = false,
    onClick,
    ...restProps
}) => {
    const borderClass = border ? "border" : "";
    
    const colorClass =
        `cursor-pointer text-white bg-${color}-600 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 focus:outline-none dark:focus:ring-${color}-800`;
    const sizeClass =
        size === "xs"
            ? "rounded-md bg-brand-500 p-2 text-xs font-medium"
            : size === "sm"
            ? "rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium"
            : size === "lg"
            ? "rounded-md bg-brand-500 px-5 py-3 text-base font-medium"
            : size === "xl"
            ? "rounded-lg bg-brand-500 px-6 py-4 text-lg font-medium"
            : size === "2xl"
            ? "rounded-lg bg-brand-500 px-10 py-8 text-xl font-medium"
            : size === "icon"
            ? "h-10 w-10"
            : size === "w-full"
            ? "h-10 w-full"
            : "h-10 px-4 py-2";
    return (
        <button
            type={type}
            className={`
        inline-flex items-center justify-center rounded-md
        ${borderClass} ${colorClass} ${sizeClass} ${className}
      `}
            disabled={disabled}
            onClick={handleClick}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
