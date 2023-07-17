import {Link} from "react-router-dom"

export default function PageUsers(){
    return(
        <>
            <span>Ovdje su useri</span>
            <p>Pages:</p>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/teletabisi">Teletabisi</Link>
        </>
    )
}