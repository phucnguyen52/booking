import React, { useEffect, useState } from "react";
import { BsImageFill } from "react-icons/bs";
const UploadImage = ({column, onFieldChange}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState([]);
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
            setImageUrl((prevUrls) => {
                const newImageUrls = [...prevUrls, data];
                // Gọi onFieldChange sau khi imageUrl thay đổi
                onFieldChange(newImageUrls);
                return newImageUrls;
            });
        } catch (error) {
            console.error("Tải ảnh không thành công", error);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        
        if (imageUrl.length > 0) {
            onFieldChange('image',imageUrl);
        }
    }, [imageUrl, onFieldChange]);
    return (
        <div className="w-full">
            <div className="my-4">
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
                                        .getElementById("image-upload")
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
                    <div className={`mt-4 grid grid-cols-${column} gap-2 w-full p-2`}>
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
    );
};

export default UploadImage;
