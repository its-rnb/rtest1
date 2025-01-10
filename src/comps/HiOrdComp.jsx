//HOC
//'Comp' taken as argmt as 'WrppdComp'
//define props with any other logic if req
//return new 'WrppdComp'(HOC) with props
const withLog= (WrppdComp)=> {
    return (props)=> {
        console.log('Component rendering...', WrppdComp.name)
        return <WrppdComp {...props} />
    }
}

//Base comp with props passed as param
const Comp= (props)=> {
    return <div>{props.text}</div>
}

//Enhanced comp using HOC
//'Comp' cmpnnt passed as param in 'withLog' compnnt
//new 'WrppdComp'(HOC) with props returned by 'withLog' assigned to EnhancedComp
const EnhancedComp= withLog(Comp)

//Main HOC for usage
//EnhancedComp with new WrppdComp accessed
//Hello returned as props.text
const HOComp= ()=> {
    return <EnhancedComp text= 'Hello' />
}

export default HOComp