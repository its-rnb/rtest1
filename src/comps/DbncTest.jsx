const DbncTest= ()=> {

    function dbcLog(){
        console.log("Debounce occured");
    }

    function debounce(fn, delay){

        let timer
        return(...args)=> {
            clearTimeout(timer);
            timer= setTimeout(()=> fn(args), delay)
        }
    }

    return (
        <div className="debounce-main">
            <h1>Debounce test</h1>
            <input placeholder="Enter text" onChange={debounce(dbcLog, 2000)}/>
        </div>
    )
}
export default DbncTest