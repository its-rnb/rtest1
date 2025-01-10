import React from "react";
import ChldComp from './ChldComp'

function PrntComp(){
    let name= 'Jack Danny'
    let age= 99

    return <ChldComp name= {name} age= {age} />
}

export default PrntComp