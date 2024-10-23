import { NavLink } from "react-router-dom";
import "./Navbar.css"

{/* <div className='flex justify-center gap-6 bg-slate-300 py-4'>
    <Link to={"/home"}>Home</Link>
    <Link to={"/users"}>Users</Link>
    <Link to={"/post"}>Posts</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/contact"}>Contact</Link>

</div> */}


const Navbar = () => {

    return (
        <div className='flex justify-center gap-6 bg-slate-300 py-4'>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/post"}>Posts</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "text-green-600" : isActive ? "text-red-600" : ""
            } to={"/contact"}>Contact</NavLink>

        </div>

    );
};

export default Navbar;