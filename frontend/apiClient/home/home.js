import axios from "axios";

export const getListOfItems = async ()=>{
  const res = await axios.get("http://localhost:5000/items");
  return res.data;
}