import {React, useContext} from "react";
import {Database} from '../../context/index'

export default function WelcomeMessage({message,color}){
    const [stateObj,Myfunction,StringData] = useContext(Database);
    return(
        <>
        <h1 className={`bg-${color}`}>{message}</h1>
        {console.log(stateObj,StringData)}
        {StringData}
        </>
    )
}