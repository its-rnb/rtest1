import { useState, useEffect } from "react";
import axios from "axios";

function ApiTest(){

    const [data, setData]= useState([])

    useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=> setData(res.data))
    .catch(er=> console.log(er))
    }, [])

    return(
        <div className="api=table">
        <table>
            <thead>
  <tr>
    <th>Id</th>
    <th>Title</th>
  </tr>
  </thead>
  <tbody>
  
    {
        data.map((d,i)=> <tr><td key={d.id}>{d.id}</td>  <td key={d.id}>{d.title}</td> </tr>)
    }
  
  <tr>
  </tr>
  </tbody>
</table>
        </div>
)   
}


export default ApiTest