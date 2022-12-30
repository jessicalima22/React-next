
import style from "../styles/megasena.module.css"
export default function MegasenaBall (props){
    
    return(
        <>
            <span className={style.span}>{props.number}</span>
        </>

    )
}