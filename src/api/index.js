import axios from "axios"; // helps in making our calls
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// const options = {
  
   
//     params: {
//         bl_latitude: '11.847676',
//         tr_latitude: '12.838442',
//         bl_longitude: '109.095887',
//         tr_longitude: '109.149359',
//     },
//     headers: {
//         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//         'X-RapidAPI-Key': 'f1a3eee3c5mshd7fea95d13139d6p1f1e88jsn6b3ac6701689'
//     }
// }
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = {
//     // method: 'GET',
//     // url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//     params: {
//       bl_latitude: '11.847676',
//       tr_latitude: '12.838442',
//       bl_longitude: '109.095887',
//       tr_longitude: '109.149359',
//     //   restaurant_tagcategory_standalone: '10591',
//     //   restaurant_tagcategory: '10591',
//     //   limit: '30',
//     //   currency: 'USD',
//     //   open_now: 'false',
//     //   lunit: 'km',
//     //   lang: 'en_US'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'ae3e768ea8msh7201a98a498dbf1p129cecjsnfdde24d95489',
//       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {   
//       console.error(error);
//   });
export const getPlacesData = async (sw,ne) => {
   //since we are using axios so the method will be automatically called to GET
        try { // request
            const {data: {
                    data
                }} = await axios.get(URL,{
                  // method: 'GET',
                  // url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
                  params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: '109.149359',
                  //   restaurant_tagcategory_standalone: '10591',
                  //   restaurant_tagcategory: '10591',
                  //   limit: '30',
                  //   currency: 'USD',
                  //   open_now: 'false',
                  //   lunit: 'km',
                  //   lang: 'en_US'
                  },
                  headers: {
                    'X-RapidAPI-Key': 'ae3e768ea8msh7201a98a498dbf1p129cecjsnfdde24d95489',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                  }
                } );
            return data;
        } catch (error) {
            console.log(error);
        }
    
}
