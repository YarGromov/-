import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counterReducer";

export const Counter = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }

    // const [value, setValue] = useState(0)
    //
    // useEffect(()=>{
    //     const valueAsString = localStorage.getItem('counterValue')
    //     if(valueAsString){
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // },[])
    //
    // useEffect(()=>{
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // },[value])


    return (
        <div>
            <h1 style={{color: "red"}}>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
};

