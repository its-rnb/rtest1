import { useEffect, useState } from "react";
import axios from 'axios';

const AxTest1= ()=> {

    const [data, setData]= useState([])
    const url= ['https://datausa.io/api/data?drilldowns=Nation&measures=Population', 'https://dummyjson.com/users'];

    const getData= async()=> {

        try{
            const res= await axios.get(url[1])
            console.log(res)
            setData(res.data.users)
        }
        catch(er){
            console.log(er)
        }
    }

    useEffect(()=> {
        getData();
    }, [])

    return (
        <div>
            <h1>Axios Test 1</h1>
            <div>
                <ul>
                    {data.map((d, idx)=> <li key={idx}>{d.firstName}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default AxTest1