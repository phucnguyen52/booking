import React, { useEffect, useState } from "react";
import { QR } from "../../utils/Constants";
import { useOutletContext } from "react-router-dom";

const Payment = () => {
   const { totalAmount } = useOutletContext();
   const [code, setCode] = useState('');
   const [timeLeft, setTimeLeft] = useState(60)

   const generateCode = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Tháng từ 0-11
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `${year}${month}${day}${hours}${minutes}${seconds}`;
   };
   useEffect(() => {
      setCode(generateCode());
      setTimeLeft(60)
      const interval = setInterval(() => {
         setTimeLeft((prev) => {
            if (prev <= 1) {
               setCode(generateCode());
               return 60;
            }
            return prev - 1;
         });
      }, 1000);

      return () => clearInterval(interval);
   }, [totalAmount])

   return (
      <div className="w-[90%]" >
         <h3 className="italic mx-auto">Vui lòng quét mã QR để thực hiện thanh toán</h3>
         <img
            src={`https://img.vietqr.io/image/${QR.BANK_ID}-${QR.ACCOUNT_NO}-${QR.TEMPLATE}.png?amount=${totalAmount}&addInfo=${encodeURIComponent(code)}&accountName=${encodeURIComponent(QR.ACCOUNT_NAME)}`}
            className="w-1/2 mx-auto"
         />
         <div>
            Tự động cập nhật sau
            <span className="text-2xl text-red-600 mx-2">
               {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
               {String(timeLeft % 60).padStart(2, "0")}
            </span>
         </div>

      </div>
   );
};

export default Payment;