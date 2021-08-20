import { Link } from "react-router-dom"

function SignOutLinks() {
    return (
        <ul>
            <li>
                <Link to="/">SignUP</Link>
            </li>
            <li>
                <Link to="/">Log In</Link>
            </li>
        </ul>
    )
}

export default SignOutLinks;
