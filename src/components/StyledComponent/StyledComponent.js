import "./drugiStylesheet.css"
import "./prviStylesheet.css"
import prvi from "./PrviModul.module.css"
import drugi from "./DrugiModul.module.css"

export default function StyledComponent(){
    return(
        <>
            <p className="problem">Problematican</p>
            <p className={prvi.problem}>Nije problematican</p>
            <p className={drugi.problem}>Nije problematican</p>
        </>
    )
}