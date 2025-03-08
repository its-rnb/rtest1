const Thrttl= ()=> {
    console.log("Mouse moved, throttling occured")
}

function throttle(fn, delay){

    let run=false;
    return (...args)=>{
        if(!run){
            fn(args);
            run=true;
            setTimeout(()=> {return run=false;}, delay);
        }
    }
}

window.addEventListener("mousemove", throttle(Thrttl, 2000));
export default Thrttl