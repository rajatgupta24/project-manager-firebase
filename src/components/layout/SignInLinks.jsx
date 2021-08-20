import { Link } from "react-router-dom"

function SignInLinks() {
    return (
        <ul>
            <li>
                <Link to="/">New Project</Link>
            </li>
            <li>
                <Link to="/">Log Out</Link>
            </li>
            <li>
                <Link to="/">RG</Link>
            </li>
        </ul>
    )
}

export default SignInLinks;
