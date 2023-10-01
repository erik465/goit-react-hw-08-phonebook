import { StyledFilter } from "./ContactFilter.styled"
import { useDispatch } from "react-redux";
import { changeFilter } from "redux/filters/filtersSlice";

export const ContactFilter = () =>{
    const dispatch = useDispatch()

    const onInputChange = (e) =>{
        console.log(e.target.value)
        dispatch(changeFilter(e.target.value))
    };

    return(
        <StyledFilter>
            <p>Filter: </p>
            <input type="text" placeholder="Filter" onChange={onInputChange}/>
        </StyledFilter>
    )
}