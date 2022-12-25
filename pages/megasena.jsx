
import style from "../styles/megasena.module.css"
import MegasenaBall from "../components/MegasenaBall"
export default function megasena (){

    return(
        <>
        <div className={style.body}>
            <h1 className={style.h1}>Random surprise</h1>
            <div className={style.MegasenaBall}>
            <MegasenaBall />
            <MegasenaBall />
            <MegasenaBall />
            <MegasenaBall />
            <MegasenaBall />
            <MegasenaBall />
            </div>
            <button>Click here to generate</button>
        </div>
        </>
    )
}