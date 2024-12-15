import apiConfig from "./axiosConfig";

export const getHotelDetail = async (hotelId) => {
   try {
     const response = await apiConfig.get(`/receptionist/hotel/${hotelId}`);
     return response.data;
   } catch (error) {
     console.error("Error fetching room details:", error);
     throw error;
   }
 };