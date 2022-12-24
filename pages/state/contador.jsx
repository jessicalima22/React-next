import { useState } from "react"

export default function contador(){
    const arrayAumentar = useState(0)
    let add = arrayAumentar[0]
    let setAdd = arrayAumentar[1]    
    

    function aumentar(){
        setAdd(add+1) 
    }

    function subtrair(){
        setAdd(add-1) 
    }

    return(
        <>
        <div>
            <h1> {add} </h1>
            <button onClick={aumentar}>+</button>
            <button onClick={subtrair}>-</button>
        </div>
        </>
    )
}