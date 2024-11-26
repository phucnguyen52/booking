import React, { useRef, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { PiEyeSlash, PiEye } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const [token, setToken] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [otpError, setOtpError] = useState("");
    const navigate = useNavigate();
    const otpRefs = useRef([]);
    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value) {
            if (index < otpRefs.current.length - 1) {
                otpRefs.current[index + 1].focus();
            }
        } else {
            if (index > 0) {
                otpRefs.current[index - 1].focus();
            }
        }
    };
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index]) {
            if (index > 0) {
                otpRefs.current[index - 1].focus();
            }
        }
    };
    const IsValidate = () => {
        let isproceedIdEmail = true;
        let isproceedName = true;
        let isproceedPhone = true;
        let isproceedPass = true;
        let isproceedCheckPass = true;
        let isproceedError = true;

        //check id và mail
        if (email === null || email === "") {
            isproceedIdEmail = false;
            toast.warning("Vui lòng nhập email của bạn");
            setEmailError("Vui lòng nhập email của bạn!");
        } else if (
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                email
            )
        ) {
            setEmailError("");
            isproceedIdEmail = true;
        } else {
            isproceedIdEmail = false;
            setEmailError(" Email không hợp lệ!");
            toast.warning("Email không hợp lệ!");
        }
        //check name
        if (name === null || name === "") {
            isproceedName = false;
            setNameError("Vui lòng nhập tên của bạn");
            toast.warning("Vui lòng nhập tên của bạn");
        }
        //check số điện thoại
        // if (!phone.trim()) {
        //     isproceedPhone = false
        //     setPhoneError('Vui lòng nhập SĐT của bạn')
        //     toast.warning('Vui lòng nhập SĐT của bạn')
        // } else if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone)) {
        //     isproceedPhone = true
        //     setPhoneError('')
        // } else {
        //     isproceedPhone = false
        //     setPhoneError('SĐT không hợp lệ')
        //     toast.warning('SĐT không hợp lệ')
        // }
        // check mật khẩu
        if (!password.trim()) {
            isproceedPass = false;
            setPasswordError("Vui lòng nhập mật khẩu của bạn!");
            toast.warning("Vui lòng nhập mật khẩu của bạn!");
        } else if (
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                password
            )
        ) {
            setPasswordError("");
            isproceedPass = true;
        } else {
            isproceedPass = false;
            toast.warning(
                "Mật khẩu không hợp lệ! Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt."
            );
            setPasswordError(
                "Mật khẩu không hợp lệ! Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt."
            );
        }
        if (!confirmPassword.trim()) {
            isproceedCheckPass = false;
            setConfirmPasswordError("Vui lòng nhập lại mật khẩu");
            toast.warning("Vui lòng nhập lại mật khẩu");
        } else if (password !== confirmPassword) {
            isproceedCheckPass = false;
            setConfirmPasswordError("Mật khẩu không khớp");
            toast.warning("Mật khẩu không khớp");
        } else {
            setConfirmPasswordError("");
            isproceedCheckPass = true;
        }

        return (
            isproceedIdEmail &&
            isproceedName &&
            isproceedPhone &&
            isproceedPass &&
            isproceedCheckPass &&
            isproceedError
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setNameError("");
        setPasswordError("");
        setConfirmPasswordError("");
        setEmailError("");
        setOtpError("");
        e.preventDefault();
        if (IsValidate()) {
            const requestBody = {
                fullName: name,
                email: email,
                password: password,
            };
            console.log(requestBody);
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/customer/signup",
                    requestBody
                );
                const data = response.data;
                if (response.status === 201) {
                    toast.success(data.message);
                    setToken(data.token);
                    setIsOtpSent(true);
                }
            } catch (error) {
                toast.error("Email đã tồn tại!");
                setEmailError("Email đã tồn tại!");
            }
        }
    };
    const handleVerifyOTP = async () => {
        const codes = otp.join("");
        if (codes.length === 6) {
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/customer/active",
                    {
                        token: token,
                        code: codes,
                    }
                );
                const data = response.data;
                if (data.success === true) {
                    toast.success("Đăng kí thành công.");
                    setIsOtpSent(false);
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    navigate("/auth/login");
                }
            } catch (error) {
                toast.error("Mã OTP sai");
                setOtpError("Mã xác thực sai. Vui lòng nhập lại mã xác thực!");
            }
        } else {
            toast.warning("Vui lòng nhập đầy đủ mã xác thực!");
            setOtpError("Vui lòng nhập đầy đủ mã xác thực!");
        }
    };
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [isFocusedConfirmPass, setIsFocusedConfirmPass] = useState(false);
    const handleFocusName = () => {
        setNameError("");
    };

    const handleFocusEmail = () => {
        setEmailError("");
    };

    const handleFocusPassword = () => {
        setPasswordError("");
    };

    const handleFocusConfirmPassword = () => {
        setConfirmPasswordError("");
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
            <div className="w-1/2 flex items-center justify-center flex-">
                <form className="max-w-[70%]" onSubmit={handleSubmit}>
                    <div className="mb-2 text-3xl font-bold">Đăng ký</div>
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
                    <div className="flex flex-col w-full">
                        <div>
                            <label
                                htmlFor="name"
                                className={`font-medium ${
                                    isFocused
                                        ? "text-black font-bold"
                                        : "text-gray-500"
                                } transition-colors`}
                            >
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                placeholder="Tên của bạn"
                                name="name"
                                id="name"
                                className={`${
                                    !nameError
                                        ? "focus:border-2 focus:border-solid focus:border-blue-500 focus:outline-none"
                                        : "border-2 border-solid border-red-500 outline-none"
                                } w-full mt-1 rounded-md border-2 border-solid border-gray-400 px-4 py-3 text-sm`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => {
                                    setIsFocused(true);
                                    handleFocusName();
                                }}
                                onBlur={() => setIsFocused(false)}
                            />
                            <div
                                className={`${
                                    nameError ? "" : "invisible py-5"
                                } ml-4 pt-1 text-sm text-rose-500`}
                            >
                                {nameError}
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="email"
                                className={`font-medium ${
                                    isFocusedEmail
                                        ? "text-black font-bold"
                                        : "text-gray-500"
                                } transition-colors`}
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="Email của bạn"
                                id="email"
                                name="email"
                                className={`${
                                    !emailError
                                        ? "focus:border-2 focus:border-solid focus:border-blue-500 focus:outline-none"
                                        : "border-2 border-solid border-red-500 outline-none"
                                } w-full mt-1 rounded-md border-2 border-solid border-gray-400 px-4 py-3 text-sm`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => {
                                    setIsFocusedEmail(true);
                                    handleFocusEmail();
                                }}
                                onBlur={() => setIsFocusedEmail(false)}
                            />
                            <div
                                className={`${
                                    emailError ? "" : "invisible py-5"
                                } ml-4 pt-1 text-sm text-rose-500`}
                            >
                                {emailError}
                            </div>
                        </div>
                        <label
                            htmlFor="password"
                            className={`mb-1 font-medium ${
                                isFocusedPass
                                    ? "text-black font-bold"
                                    : "text-gray-500"
                            } transition-colors`}
                        >
                            Mật khẩu
                        </label>
                        <div className="relative">
                            <input
                                type={
                                    isShowPassword === true
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Mật khẩu"
                                name="password"
                                id="password"
                                className={`${
                                    !passwordError
                                        ? "focus:border-2 focus:border-solid focus:border-blue-500 focus:outline-none"
                                        : "border-2 border-solid border-red-500 outline-none"
                                } w-full rounded-md border-2 border-solid border-gray-400 px-4 py-3 text-sm`}
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                onFocus={() => {
                                    setIsFocusedPass(true);
                                    handleFocusPassword();
                                }}
                                onBlur={() => setIsFocusedPass(false)}
                            />
                            <div
                                className={`${
                                    passwordError ? "" : "invisible py-5"
                                } ml-4 pt-1 text-sm text-rose-500`}
                            >
                                {passwordError}
                            </div>
                            {isShowPassword ? (
                                <PiEyeSlash
                                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer text-gray-400"
                                    onClick={() => setIsShowPassword(false)}
                                />
                            ) : (
                                <PiEye
                                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer text-gray-400"
                                    onClick={() => setIsShowPassword(true)}
                                />
                            )}
                        </div>
                        <label
                            htmlFor="confirmPassword"
                            className={`mb-1 font-medium ${
                                isFocusedConfirmPass
                                    ? "text-black font-bold"
                                    : "text-gray-500"
                            } transition-colors`}
                        >
                            Xác nhận mật khẩu
                        </label>
                        <div className="relative">
                            <input
                                type={
                                    isShowConfirmPassword === true
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Nhập lại mật khẩu"
                                name="confirmPassword"
                                id="confirmPassword"
                                className={`${
                                    !confirmPasswordError
                                        ? "focus:border-2 focus:border-solid focus:border-blue-500 focus:outline-none"
                                        : "border-2 border-solid border-red-500 outline-none"
                                } w-full rounded-md border-2 border-solid border-gray-400 px-4 py-3 text-sm`}
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                                onFocus={() => {
                                    setIsFocusedConfirmPass(true);
                                    handleFocusConfirmPassword();
                                }}
                                onBlur={() => setIsFocusedConfirmPass(false)}
                            />
                            <div
                                className={`${
                                    confirmPasswordError ? "" : "invisible py-5"
                                } ml-4 pt-1 text-sm text-rose-500`}
                            >
                                {confirmPasswordError}
                            </div>
                            {isShowConfirmPassword ? (
                                <PiEyeSlash
                                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer text-gray-400"
                                    onClick={() =>
                                        setIsShowConfirmPassword(false)
                                    }
                                />
                            ) : (
                                <PiEye
                                    className="absolute right-4 top-3 h-6 w-6 cursor-pointer text-gray-400"
                                    onClick={() =>
                                        setIsShowConfirmPassword(true)
                                    }
                                />
                            )}
                        </div>

                        <button
                            className="mt-3 mb-2 rounded-md bg-black px-4 py-3 text-sm text-white hover:bg-blue-600 hover:text-white hover:transition-all"
                            type="submit"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <Link
                        to={"/auth/login"}
                        className="cursor-pointer text-sm font-medium text-blue-700 hover:text-black"
                    >
                        Đăng nhập
                    </Link>
                    {isOtpSent && (
                        <>
                            <div
                                className={`fixed inset-0 z-10 overflow-y-auto ${
                                    isOtpSent ? "block" : "hidden"
                                }`}
                            >
                                <div className="flex min-h-screen items-center justify-center p-4">
                                    <div
                                        className="fixed inset-0 transition-opacity"
                                        aria-hidden="true"
                                    >
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                    </div>

                                    <div className="relative rounded-xl bg-white p-8 shadow-xl">
                                        <button
                                            type="button"
                                            className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg rounded-tr-xl bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                                            onClick={() => setIsOtpSent(false)}
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.586 10l5.707-5.707a1 1 0 10-1.414-1.414L9.172 8.586 3.465 2.879a1 1 0 00-1.414 1.414L7.758 10 2.051 15.707a1 1 0 101.414 1.414L9.172 11.414l5.707 5.707a1 1 0 001.414-1.414L10.586 10z"
                                                />
                                            </svg>
                                        </button>
                                        <h2 className="mb-4 text-center text-3xl font-semibold">
                                            Xác thực email
                                        </h2>
                                        <p className="mb-4 text-center text-gray-600">
                                            Chúng tôi đã gửi mã đến email{" "}
                                            <strong>{email}</strong>. <br />
                                            Vui lòng kiểm tra email của bạn!
                                        </p>

                                        <div className="text-center">
                                            <div className="mb-4 flex justify-center space-x-4">
                                                {[0, 1, 2, 3, 4, 5].map(
                                                    (index) => (
                                                        <input
                                                            key={index}
                                                            ref={(el) =>
                                                                (otpRefs.current[
                                                                    index
                                                                ] = el)
                                                            }
                                                            className="h-12 w-12 rounded-xl border border-gray-300 text-center focus:border-blue-700 focus:ring-blue-700"
                                                            type="text"
                                                            maxLength="1"
                                                            value={otp[index]}
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    index,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            onKeyDown={(e) =>
                                                                handleKeyDown(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className="flex flex-col items-center justify-between gap-4">
                                                {otpError && (
                                                    <div className="mt-1 text-sm text-rose-500">
                                                        {otpError}
                                                    </div>
                                                )}
                                                <button
                                                    className="rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-600"
                                                    onClick={handleVerifyOTP}
                                                >
                                                    Xác thực
                                                </button>

                                                <div className="text-sm">
                                                    <p className="mb-1">
                                                        Bạn chưa nhận được mã?
                                                    </p>
                                                    <button
                                                        className="text-blue-700 hover:underline"
                                                        onClick={handleSubmit}
                                                    >
                                                        Gửi lại mã
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Register;
