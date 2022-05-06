import axios from "axios"

const usePost=async id=>{
    console.log(id)
    const {data}= await axios.post(`https://tranquil-falls-56090.herokuapp.com/service`,{id})
    console.log(data)
    return data
}
export default usePost