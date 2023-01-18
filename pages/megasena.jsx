
import style from "../styles/megasena.module.css"
import MegasenaBall from "../components/MegasenaBall"
import { generateNumber } from "../function/mega"
import { useState } from "react"


export default function megasena (){


       const [numbers, setNumbers] = useState()

       function renderNumbers(){
        return numbers?.map(number=> <MegasenaBall key = {number} number = {number}/>)
       }

       function handClick(){
        setNumbers(generateNumber())
       }

    return(
        <>
        <div className={style.body}>
            <h1 className={style.h1}>Random surprise</h1>
            <div className={style.MegasenaBall}>
           {renderNumbers()}
            </div>
        <button onClick={handClick}>Click here to generate</button>
        </div>
        </>
    )
}