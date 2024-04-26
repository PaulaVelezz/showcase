import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyles = ({ isActive }) => 
        isActive 
        ? 'px-2 py-1 border-t-2 border-r-2 border-lime-500' 
        : 'px-2 py-1 text-violet-950 hover:text-stone-100';

    return (
        <div className='nav flex justify-between p-5 mb-3 font-space text-stone-100 bg-zinc-950 text-base no-underline'>
            <div id='nav-logo' className='text-lg font-extrabold'>Paula Velez</div>

            <div id='nav-links' className='p-1 font-semibold'>
                <NavLink to='/' style={{marginRight: '10px'}} className={activeStyles}>Home</NavLink>
                <NavLink to='/about' className='mr-5'>About</NavLink>
                <NavLink to='/works' className='mr-5'>Works</NavLink>
                <NavLink to='/contact' className='mr-5'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Navbar;