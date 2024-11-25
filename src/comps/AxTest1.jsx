import { useEffect, useState } from "react";
import axios from "axios";

const AxTest1= ()=> {

    const apiURL='https://datausa.io/api/data?drilldowns=Nation&measures=Population';

    const [data, setData]= useState([]);

    const getData= async()=> {

        try {
            const res= await axios.get(apiURL);
            console.log(res);
            setData(res.data.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        getData();
    }, [])

    return(
        <div className="main-atest1">
            <h2>Axios test 1</h2>
            {
                data.map((d,i)=> <li key={i}>{d.Year}</li>)
            }
        </div>
    )
}

export default AxTest1;