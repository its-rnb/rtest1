import axios from "axios";
import { useState, useEffect } from "react";

function AxTest(){

    const[data, setData]= useState([])

    useEffect(()=> {
        axios.get('https://reqres.in/api/users?page=2')
        .then(res=> setData(res.data.data))
        .catch(er=> console.log(er))
    },[])

    return(
        <div className="main-atest">
            <h2>Axios test</h2>        
            <ol>
                { data.map((d,i)=> <li key={i}>{d.email}</li>) }
            </ol>
        </div>
    )
}

export default AxTest