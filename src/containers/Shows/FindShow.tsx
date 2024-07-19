import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchTaskShow, showLoading } from "./findShowSlice";
import Loader from "../../components/loader/Loader";

const FindShow = () => {

  const param = useParams();
  console.log(param.id);
  const dispatch: AppDispatch = useDispatch();
  const loader = useSelector(showLoading);
  const show = useSelector((state: RootState) => state.show.show);
  useEffect(()=>{
    dispatch(fetchTaskShow(String(param.id)));
  },[param.id])


  return (
    <>
    {loader ? <Loader/> :<div className="card mx-auto flex-row" style={{maxWidth: '800px'}}>
      <img src={show.image} className="card-img-top" style={{maxWidth: '400px'}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <span>Genres: {show.genres.map((genre , index)=>{
          if (index > 0) {       
            return(
              <span key={index}>, {genre}</span>
            )
          }
          else {       
            return(
              <span key={index}>{genre}</span>
            )
          }
        })}</span>
        <span className="d-block">Language: {show.language}</span>
        <span className="d-block">Runtime: {show.runtime}</span>
        <p className="card-textm mt-2" dangerouslySetInnerHTML={{ __html: show.summary}}></p>
        <a href={show.url} className="btn btn-dark">Watch</a>
      </div>
    </div>}
    </>
  );

}



export default FindShow;