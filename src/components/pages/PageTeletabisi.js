import {Link} from "react-router-dom"

export default function PageTeletabisi(){
    return(
        <>
            <span>Ovdje su teletabisi</span>
            <p>Pages:</p>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/users">Users</Link>
        </>
    )
}