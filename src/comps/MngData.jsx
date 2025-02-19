import { useEffect, useState } from "react";
import axios from "axios";

const MngData= ()=> {

    const [data, setData]= useState([])

    async function mngData(){

        try{
            const data= axios.get('').post('')
            console.log(data)
        }
        catch(er){
            console.log(er)
        }
        
    }

    function loadData(){
        return new Promise((resolve, reject)=> {
            console.log("loading...")
            const mdata= mngData()

            if(mdata){
                resolve('Data load success')
            }
            else{
                reject('Data load failed')
            }
        })
    }
    
    useEffect(()=> {
        loadData()
    }, [])

    return(
        <div>
            <h1>Custom data</h1>
        </div>
    )
}

export default MngData