const MouseMove= ()=> {
    console.log('mouse moved')
}

window.addEventListener('mousemove', throttle(MouseMove, 1000))

function throttle(fn, delay){
    
    let run= false
    return (...args)=>{
        if(!run){
            fn(...args)
            run= true;
            setTimeout(()=> {run= false}, delay)
        }
    }

}

export default MouseMove