import apiConfig from "./axiosConfig"

export const getSchedule  = async(start, end) => {
   if(!start || !end) return
   try {
      const response = await apiConfig.get(`/receptionist/room_details?start='${start}'&end='${end}'`)
      return response.data.room
   } catch (error) {
      console.log("Error getSchedule: " + error)
      return []
   }
}
export const getBookingDetail  = async(id) => {
   if(!id) return
   try {
      const response = await apiConfig.get(`/receptionist/bookings/${id}`)
      console.log(response.data.room[0])
      return response.data.room[0]
   } catch (error) {
      console.log("Error getSchedule: " + error)
      return {}
   }
}


export const bookingService = {
   getSchedule,
   getBookingDetail,
}