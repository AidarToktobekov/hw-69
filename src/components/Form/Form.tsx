import { ChangeEvent, useEffect } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskShowsList } from "../../containers/Shows/tvShowsSlice";
import { NavLink } from "react-router-dom";

const Form = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const showList = useSelector((state: RootState) => state.showlist.showList);
    console.log(showList);
    
    
    useEffect(()=>{
        dispatch(fetchTaskShowsList(''));
    },[])


    const changeShow = (event: ChangeEvent<HTMLInputElement>)=>{
        dispatch(fetchTaskShowsList(event.target.value));
    }


    return(
        <>
            <div className="container my-3">
                <h3 className="mb-4">Search for TV Show:</h3>
                <div className="mb-3">
                    <input type="text" onChange={changeShow} className="form-control" placeholder="TV Show"/>
                    <ul className="list-group">
                        {showList.map((show, index)=>{
                            return(
                                <li key={index} className="list-group-item">
                                    <NavLink to={"/show/"+show.id}>
                                        {show.name}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Form;