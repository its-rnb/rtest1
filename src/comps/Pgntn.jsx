import { useState, useEffect } from "react";

function Pgntn(){

    const [prd, setPrd]= useState()
    const [page, setPage]= useState(1)

    const fData= async ()=> {
        const res= await fetch('https://dummyjson.com/products?limit=30')
        const data= await res.json()

        //Check if data and 'products' obj array not empty
        if(data && data.products) setPrd(data.products)
    }

    useEffect(()=> {
        fData();
    }, [])

    let pl= prd.length

    function pageHandler(selectedPage){
        if(selectedPage>=1 && selectedPage<=pl/10)setPage(selectedPage)
    }

    return (
    <div className="prd-list-page">
    {prd && pl ? (
        
        <div className="prd-list main">
        <div className="prd-list">
        <h3>Products</h3>
        <h4>Total: {pl ? pl : 0}</h4>
        <ol start={`${page-1}1`}>
            {prd.slice((page*10)-10, page*10).map(p=> 
            <li key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <span>{p.title}</span>
            </li>)}
        </ol>
        </div>

        <div className="prd-pagntn">
        <button disabled={page===1} onClick={()=> pageHandler(page-1)}>⬅</button>
            {[...Array(pl/10)].map((_,i)=> {
                return <button onClick={()=> pageHandler(i+1)} key={i+1}>{i+1}</button>
            })}
        <button disabled={page===(pl/10)} onClick={()=> pageHandler(page+1)}>➡</button>
        </div>
        </div>
    ) : ''}
    </div>
    )
}

export default Pgntn