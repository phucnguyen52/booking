import apiConfig from "./axiosConfig"

export const getSuggestRoom = async (checkin, checkout, num) =>{
   if(!(checkin||checkout||num)) return
   try {
      const response = await apiConfig.get(`/customer/room/1/suggest?start='${checkin}'&end='${checkout}'&num=${num}`)
      // console.log("suggest",response.data.room)
      return response.data.room
   } catch (error) {
      console.log("Error getSchedule: " + error)
      return {}
   }
}

export const getEmptyRoombyUser = async (checkin, checkout, num) =>{
   if(!(checkin||checkout||num)) return
   try {
      const response = await apiConfig.get(`/customer/room/1?start='${checkin}'&end='${checkout}'&num=${num}`)
      // console.log("empty",response.data.room[0].room_empty)
      return response.data.room[0].room_empty.map(i=> ({...i, available: i.count, count: 0}))
   } catch (error) {
      console.log("Error getSchedule: " + error)
      return {}
   }

}

export const roomService =  {
   getSuggestRoom,
   getEmptyRoombyUser,
}
   