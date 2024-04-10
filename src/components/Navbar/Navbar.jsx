import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyles = ({ isActive }) => 
        isActive 
        ? 'px-2 py-1 text-violet-600 hover:text-violet-800' 
        : 'px-2 py-1 text-stone-200 hover:text-orange-600';

    return (
        <div className="flex justify-center">
            <nav id="nav" className="w-fit fixed flex justify-center items-center p-3 border border-stone-400 rounded-lg backdrop-filter backdrop-blur-md text-stone-200">   
                <div className="font-semibold">
                    <NavLink to='/' className={activeStyles} style={{marginRight: '0.5rem'}}> Home </NavLink>
                    <NavLink to='/about' className={activeStyles} style={{marginRight: '0.5rem'}}> About </NavLink>
                    <NavLink to='/works' className={activeStyles} style={{marginRight: '0.5rem'}}> Works </NavLink>
                    <NavLink to='/resume' className={activeStyles} style={{marginRight: '0.5rem'}}> Resume </NavLink>
                    <NavLink to='/contact' className={activeStyles} style={{marginRight: '0.5rem'}}> Contact </NavLink>
                </div>
            </nav>  
        </div>
    );
};

export default Navbar;