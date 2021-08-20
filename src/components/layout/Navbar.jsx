import { Link } from "react-router-dom"
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

function Navbar() {
    return (
        <nav>
            <Link to="/">iManager</Link>
            <SignInLinks />
            <SignOutLinks />
        </nav>
    )
}

export default Navbar;
