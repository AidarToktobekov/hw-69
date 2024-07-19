import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchTaskShow } from "./findShowSlice";

const FindShow = () => {

  const param = useParams();
  console.log(param.id);
  const dispatch: AppDispatch = useDispatch();
  const show = useSelector((state: RootState) => state.show.show);
  useEffect(()=>{
    dispatch(fetchTaskShow(String(param.id)))
  },[])
  console.log(show);
    

  return (
    <>
    <div className="card" style={{width: '400px'}}>
      <img src="" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </>
  );

}



export default FindShow;