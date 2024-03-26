import { Link } from "react-router-dom"

function Nav ({headerName}) {
    
    return (
        <nav>
            <Link to="/" >홈</Link>
            <Link to="/todos" >할일</Link>
        </nav>
    )
}

export default Nav