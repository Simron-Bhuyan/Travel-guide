import Axios from "axios"; // helps in making our calls

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
   
        try { // request
            const {data: {
                    data
                }} = await Axios.get(URL, {
                method: 'GET',
                url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng
                },
                headers: {
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    'X-RapidAPI-Key': 'f1a3eee3c5mshd7fea95d13139d6p1f1e88jsn6b3ac6701689'
                }
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    
}
