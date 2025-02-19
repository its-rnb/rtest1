//HOC
//'Comp' taken as argmt as 'WrppdComp'
//define props with any other logic if req
//return new 'WrppdComp'(HOC) with props
const WithLog= (WrappedCmpnt)=> {
    return (props)=> {
        console.log('Component with log: ' +WrappedCmpnt.name)
        return <WrappedCmpnt {...props} />
    }
}

//Base comp with props passed as param
const BaseComp= (props)=> {
    return <div>{props.text}</div>
}

//Enhanced comp using HOC
//'Comp' cmpnnt passed as param in 'withLog' compnnt
//new 'WrppdComp'(HOC) with props returned by 'withLog' assigned to EnhancedComp
const EnhancedComp= WithLog(BaseComp)

//Main HOC for usage
//EnhancedComp with new WrppdComp accessed
//Hello returned as props.text
const MainComp= ()=> {
    return <EnhancedComp text='HOComp' />
}
export default MainComp