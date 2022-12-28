
import style from "../styles/megasena.module.css"
import MegasenaBall from "../components/MegasenaBall"
import {generateNumber} from "../function/mega"
import { useState } from "react"





export default function megasena (props){

  
      
       const [numbers, setNumbers] = useState(generateNumber())
      console.log(setNumbers)
     
    

    return(
        <>
        <div className={style.body}>
            <h1 className={style.h1}>Random surprise</h1>
            <div className={style.MegasenaBall}>
            <MegasenaBall ></MegasenaBall>
            <MegasenaBall>jut</MegasenaBall>
            <MegasenaBall>58</MegasenaBall>
            <MegasenaBall>58</MegasenaBall>
            <MegasenaBall>58</MegasenaBall>
            <MegasenaBall>58</MegasenaBall>
            <MegasenaBall>58</MegasenaBall>
            </div>
            <button onClick={generateNumber}>Click here to generate</button>
        </div>
        </>
    )
}