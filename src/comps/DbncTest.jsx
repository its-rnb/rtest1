const DbncTest= ()=> {

    function handleChange(){
        console.log('Debounce occurred')
    }

    function debounce(fn, delay){
        let timer
        return (...args)=>{
        clearTimeout(timer)
        timer= setTimeout(()=> fn(...args), delay)}
    }

    return(
        <div>
            <h1>Debounce Test</h1>
            <p>Search</p>
            <input onChange={debounce(handleChange, 1000)}/>
        </div>
    )
}
export default DbncTest