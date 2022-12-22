import { useState } from "react"
import { setSyntheticLeadingComments } from "typescript"

export default function mouse(){
    const style = {backgroundColor: "black", color: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontSize: "20px"}


    const arrayX = useState()
    console.log(arrayX)

    // let x = arrayX[0]
    // const setX = arrayX[1]

    // const [y, setY] = useState(0)


    // function whenMove(ev){
    //     setX(ev.clientX)
    //     setY(ev.clientY)
    //}

    return(
        <div style={style} >

            <span>Eixo x: ?</span> 
            <span>Eixo y: ?</span>
        </div>
    )
}