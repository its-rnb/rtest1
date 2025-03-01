const DbncTest= ()=> {

    function dbLog(){
        console.log("Debounce occured")
    }

    function debounce(fn, delay){

        let timer
        return (...args)=>{
            clearTimeout(timer)
            timer= setTimeout(()=> fn(args), delay)
        }
    }
    return (
        <div>
            <h1> Debounce Test</h1>
            <span>Search: <input placeholder="Enter text" onChange={debounce(dbLog, 2500)} /></span>
        </div>
    )
}
export default DbncTest