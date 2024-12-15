import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { PiEyeSlash, PiEye } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        isShowPassword: false,
        errors: "",
        isFocusedEmail: false,
        isFocusedPass: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            emailError: "",
            passwordError: "",
            errors: "",
        });
        console.log(formData);
        if (validate()) {
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/customer/login",
                    {
                        email: formData.email,
                        password: formData.password,
                    }
                );

                if (
                    response &&
                    response.data 
                   
                ) {
              
                    Cookies.set("token", response.data.token);
                    toast.success("Đăng nhập thành công", {
                        autoClose: 500,
                    });
                    navigate("/home");
                } else {
                    console.error("Đăng nhập không thành công");
                    toast.error("Bạn không phải là người dùng");
                }
            } catch (error) {
                setFormData({
                    ...formData,
                    errors: error.response.data.message,
                });
                toast.error(error.response.data.message);
            }
        }
    };

    const validate = () => {
        let resultEmail = true;
        let resultPassword = true;
        if (!formData.email.trim()) {
            resultEmail = false;
            setFormData((prevFormData) => ({
                ...prevFormData,
                emailError: "Vui lòng nhập email của bạn!",
            }));
        } else if (
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                formData.email
            )
        ) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                emailError: "",
            }));
            resultEmail = true;
        } else {
            resultEmail = false;
            setFormData((prevFormData) => ({
                ...prevFormData,
                emailError: "Email không hợp lệ!",
            }));
        }
        if (!formData.password.trim()) {
            resultPassword = false;
            setFormData((prevFormData) => ({
                ...prevFormData,
                passwordError: "Vui lòng nhập mật khẩu của bạn!",
            }));
        } else if (
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                formData.password
            )
        ) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                passwordError: "",
            }));
            resultPassword = true;
        } else {
            resultPassword = false;
            setFormData((prevFormData) => ({
                ...prevFormData,
                passwordError:
                    "Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt.",
            }));
        }

        return resultEmail && resultPassword;
    };

    const handleFocusEmail = () => {
        setFormData({ ...formData, emailError: "" });
    };

    const handleFocusPassword = () => {
        setFormData({ ...formData, passwordError: "" });
    };

    return (
        <div className="flex w-full h-full">
            <div className="w-1/2 bg-blue-500 min-h-screen flex justify-center items-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6350/6350271.png"
                    alt=""
                    className="w-2/3 h-auto"
                />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-[70%]">
                    <div className="mb-4 text-3xl font-bold">
                        Đăng nhập hoặc tạo tài khoản
                    </div>
                    <div className="mb-4 text-sm text-gray-600">
                        Bạn có thể đăng nhập tài khoản của mình để truy cập các
                        dịch vụ của chúng tôi.
                    </div>
                    <div className="mb-4 text-sm font-bold">
                        Đăng nhập hoặc đăng ký (miễn phí)
                    </div>
                    <div className="flex">
                        <a
                            href="#!"
                            className="mr-2 rounded border border-solid border-gray-400 p-2 hover:scale-110 transition-transform duration-200"
                        >
                            <FcGoogle className="h-8 w-8" />
                        </a>
                    </div>
                    <div className="relative">
                        <div className="ml-10 p-4 text-sm before:absolute before:left-0 before:top-7 before:block before:h-px before:w-[9%] before:flex-1 before:bg-gray-400 before:content-[''] after:absolute after:right-0 after:top-7 after:block after:h-px after:w-[80%] after:flex-1 after:bg-gray-400 after:content-['']">
                            Hoặc
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className={`mb-1 font-medium ${
                                formData.isFocusedEmail
                                    ? "text-black font-bold"
                                    : "text-gray-500"
                            } transition-colors`}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Email của bạn"
                            name="email"
                            className={`${
                                !formData.emailError
                                    ? "focus:border-2 focus:border-solid focus:border-blue-500 focus:outline-none"
                                    : "border-2 border-solid border-red-500 outline-none"
                            } rounded-md border-2 border-solid border-gray-400 px-4 py-3 text-sm`}
                            value={formData.email}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    email: event.target.value,
                                })
                            }
                            onFocus={() => {
                                setFormData({
                                    ...formData,
                                    isFocusedEmail: true,
                                });
                                handleFocusEmail();
                            }}
                            onBlur={() =>
                                setFormData({
                                    ...formData,
                                    isFocusedEmail: false,
                                })
                            }
                        />
                        <div
                            className={`${
                                formData.emailError ? "" : "invisible py-4"
                            } ml-4 pt-1 text-xs text-rose-500`}
                        >
                            {formData.emailError}
                        </div>

                        <label
                            htmlFor="password"
                            className={`mb-1 font-medium ${
                                formData.isFocusedPass
                                    ? "text-black font-bold"
                                    : "text-gray-500"
                            } transition-colors`}
                        >
                            Mật khẩu
                        </label>
                        <div className="relative">
                            <input
                                type={
                                    formData.isShowPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Mật khẩu"
                                name="password"
                                id="password"
                                className={`${
                                    !formData.passwordError
                                        ? "focus:border-2 focus:border-solid focus:border-blue-500 focus:outline-none"
                                        : "border-2 border-solid border-red-500 outline-none"
                                } w-full rounded-md border-2 border-solid border-gray-400 px-4 py-3 text-sm`}
                                value={formData.password}
                                onChange={(event) =>
                                    setFormData({
                                        ...formData,
                                        password: event.target.value,
                                    })
                                }
                                onFocus={() => {
                                    setFormData({
                                        ...formData,
                                        isFocusedPass: true,
                                    });
                                    handleFocusPassword();
                                }}
                                onBlur={() =>
                                    setFormData({
                                        ...formData,
                                        isFocusedPass: false,
                                    })
                                }
                            />
                            <div
                                className={`${
                                    formData.passwordError
                                        ? ""
                                        : "invisible py-4"
                                } ml-4 pt-1 text-xs text-rose-500`}
                            >
                                {formData.passwordError}
                            </div>
                            {formData.isShowPassword ? (
                                <PiEyeSlash
                                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer text-gray-400"
                                    onClick={() =>
                                        setFormData({
                                            ...formData,
                                            isShowPassword: false,
                                        })
                                    }
                                />
                            ) : (
                                <PiEye
                                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer text-gray-400"
                                    onClick={() =>
                                        setFormData({
                                            ...formData,
                                            isShowPassword: true,
                                        })
                                    }
                                />
                            )}
                        </div>

                        <button
                            type="submit"
                            className="mt-2 rounded-md bg-black px-4 py-3 text-sm text-white hover:bg-blue-600 hover:text-white hover:transition-all"
                        >
                            Đăng nhập
                        </button>
                        {formData.errors && (
                            <div className="ml-4 pt-1 text-xs text-rose-500">
                                {formData.errors}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between mt-3">
                        <Link
                            to="/auth/register"
                            className="cursor-pointer text-sm font-medium text-blue-700 hover:text-black"
                        >
                            Đăng ký tài khoản mới
                        </Link>
                        <div className="cursor-pointer text-sm font-medium text-blue-700 hover:text-black">
                            Quên mật khẩu
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
