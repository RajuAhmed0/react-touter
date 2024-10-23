import { Link } from "react-router-dom";

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
            <Link to={"/home"}>Home</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/post"}>Posts</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>

        </div>

    );
};

export default Navbar;