import axios from "axios";

export default {
    findByCategory: async (category_id) => {
    const result = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/categories/${category_id}`);
// console.log('đã lấy dc api findByCate', result.data)
return result
   

},
    findAllCategory: async () => {
        const result= await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/categories/`)
    // console.log('đã lấy dc findAllCategory from api', result.data) 
    return result
    }
}