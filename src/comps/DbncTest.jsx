const SearchFnc= ()=> {
    
    function hndlChange(e){
        console.log('api call...')
    }

    return (
        <div>
            <h1>Debounce test</h1>
            <p>Search</p>
            <input type="text" onChange={debounce(hndlChange, 1000)} title="search-field" />
        </div>
    )
}

function debounce(fn, delay){
    let timer
    return function(...args){
        clearTimeout(timer)
        timer= setTimeout(()=> fn(...args), delay)
    }
}

export default SearchFnc