import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { format } from 'date-fns'
const Rating = (props) => {
   const [data, setData] = useState();
   const { id, onHandleRating } = props;
   const point = data ? data.totalRecords !== 0 ? (Number(data.totalStars) / data.totalRecords).toFixed(1) : 0 : "";
   const fetchRating = async () => {
      try {
         const req = await fetch(`http://localhost:8080/api/customer/rating/${id}`)
         const res = await req.json()
         if (res.succes) {
            const count = res.rating[0].totalRecords;
            const total = +res.rating[0].totalStars;
            onHandleRating({
               count: count,
               point: count !== 0 ? (total / count).toFixed(2) : 0
            })
            setData(res.rating[0])
         }
      } catch (error) {
         console.log("Error fetch rating", error)
      }
   }
   useEffect(() => {
      fetchRating()
   }, [])
   return (
      <>
         {data &&
            <div className="mt-8">
               <div className="flex gap-10">
                  <div className="basis-1/4 p-8 bg-gray-100 rounded-3xl text-center h-fit">
                     <div className="font-bold text-2xl">ĐÁNH GIÁ CỦA KHÁCH HÀNG</div>
                     {data.totalRecords &&
                        <>
                           <div className="font-extrabold text-5xl my-4">{point}</div>
                           <div className="flex justify-around my-2">
                              <StarRating className="text-4xl" css="text-yellow-400 w-10 h-10" rating={point} />
                           </div>
                        </>
                     }
                     <div className="italic">{data.totalRecords} đánh giá</div>
                  </div>
                  <div className="basis-3/4 py-1">
                     {data.reviews &&
                        <div className="grid grid-cols-2 gap-y2">
                           {data.reviews.map((item, index) => (
                              <div key={index} className="border-b py-4 pr-4 pl-2 text-sm">
                                 <div className="flex justify-between items-center mb-4 pr-20">
                                    <div className="flex gap-3">
                                       <img className="w-10 h-10 rounded-full object-cover " src={item.userImage} alt="" />
                                       <div className="font-bold my-2">{item.userName}</div>
                                    </div>
                                    <StarRating className="text-lg" css="text-[#4c76b2] w-4 h-4" rating={item.reviewStars} />
                                 </div>

                                 <div className="italic text-gray-400 text-xs my-3">
                                    {/* {item.color} {item.size.trim()? `/ ${item.size}`: null} */}
                                 </div>
                                 <div className="my-4">{item.reviewComment}</div>
                                 <img src={item.reviewImage} alt="" className="h-32 w-32 object-cover" />
                                 <div className="text-gray-400 italic text-xs mt-1">{format(new Date(item.reviewDate), 'dd/MM/yyyy')}</div>
                              </div>
                           ))}
                        </div>
                     }
                  </div>
               </div>
            </div>
         }
      </>
   );
}
export default Rating