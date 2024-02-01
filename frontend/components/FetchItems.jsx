import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { itemActions } from "../store/ItemsSlice";
import axios from "axios";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  

  const fetchStatus = useSelector(store => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if(fetchStatus.fetchDone) {
      return;
    }

    // const controller = new AbortController();
    // const signal = controller.signal;

    // console.log("FETCH STARTED")

    // fetch("http://localhost:5000/items",{signal})
    // .then((res)=>{
    //   console.log(res);
    //   res.body.json()
    // })
    // .then(({items})=>{
    //   dispatch(itemActions.addInitialItems(items[0]))
    //   console.log(items);
    // })
    dispatch(fetchStatusActions.markFetchingStarted())
    axios.get("http://localhost:5000/items").then((res)=>{
      // console.log(res);
      // console.log(items);
      dispatch(fetchStatusActions.markFetchDone())
      dispatch(fetchStatusActions.markFetchingDone())
      dispatch(itemActions.addInitialItems(res.data?.items[0]))
    },[fetchStatus])
    

    // console.log("FETCH ENDED")
    // return () => {
    //   console.log("Cleaning up UseEffect")
    //   controller.abort();
    // };
  }, [fetchStatus]);

  return (
    <>
    
    </>
  )
}

export default FetchItems