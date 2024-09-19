import { FunctionComponent } from "react";

interface NavbarProps {
user : string
lastLogin: string
}

const Navbar: FunctionComponent<NavbarProps> = ({user, lastLogin}) => {
    return (
    <div>
        <h4>Welcome {user}, last login {lastLogin}</h4>
        <a href="/" className="me-2 text-decoration-none" style={{backgroundColor: "yellow", color: "green"}}>Home</a>
            <a href="/contacts" className="text-decoration-none">Contacts</a>
    </div>
    );
}

export default Navbar;