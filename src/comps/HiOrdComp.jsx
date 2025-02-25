//HOC
//'Comp' taken as argmt as 'WrppdComp'
//define props with any other logic if req
//return new 'WrppdComp'(HOC) with props
const WithLog= (WrappedComp)=> {
    return (props)=> {
        console.log('Component with log: ' +WrappedComp.name)
        return <WrappedComp {...props}/>
    }
}

//Base comp with props passed as param
const BaseComp= (props)=> {
    return <h1>{props.text}</h1>
}

//Enhanced comp using HOC
//'Comp' cmpnnt passed as param in 'withLog' compnnt
//new 'WrppdComp'(HOC) with props returned by 'withLog' assigned to EnhancedComp
const EnhancedComp= WithLog(BaseComp)

//Main HOC for usage
//EnhancedComp with new WrppdComp accessed
//Hello returned as props.text
const MainHOC= ()=> {
    return <EnhancedComp text="High Order Comp" />
}
export default MainHOC