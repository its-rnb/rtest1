import { useState, useEffect } from "react";
import axios from "axios";

function ApiTest(){

    const[data, setData]= useState([])

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res=> setData(res.data))
      .then(er=> console.error(er))
    },[])

    return(
        <div className="api-table-main">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d)=> <tr><td>{d.id}</td><td>{d.title}</td></tr>)}
            </tbody>
          </table>
        </div>
)   
}


export default ApiTest