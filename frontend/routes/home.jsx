import { useSelector } from "react-redux"
import HomeItems from "../components/HomeItems"
// import { useEffect, useState } from "react";
// import { getListOfItems } from "../apiClient/home/home";
const Home = () => {
  // const [items, setItems] = useState([]);
  // useEffect(()=>{
  //   getListOfItems().then((res)=>{
  //     setItems(res?.items[0])
  //   })
  // },[])
  const items = useSelector((store)=>store.items);
  // console.log(items);
  return (
    <main>
        <div className="items-container">
          {
            items.map((item)=>(
              <HomeItems key={item.id} item={item}/>
            ))
          }
          
        </div>
    </main>
  )
}

export default Home