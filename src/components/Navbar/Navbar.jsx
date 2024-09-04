import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const ScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    
    const activeStyles = ({ isActive }) => isActive ? 'px-2 py-1 border-t-2 border-r-2 border-lime-500 rounded-lg' : 'px-2 py-1 text-stone-100 hover:border-t-2 hover:border-r-2 border-lime-500 rounded-lg';

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="p-4 font-space bg-zinc-950 text-stone-100">
            <div className="flex justify-between items-center">
                <div className="text-3xl font-T1Korium font-bold">
                    <Link to="/">Paula Velez</Link>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {showMenu ? 'CLOSE' : 'MENU'}
                    </button>
                </div>

                <ul className="hidden md:flex space-x-6">
                    <Link to='/' className={activeStyles({ isActive: location.pathname === '/' })} onClick={() => ScrollToSection('home')}>Home</Link>
                    <Link to='#services' className={activeStyles ({ isActive: location.pathname === '#services' })} onClick={() => ScrollToSection('services')}>Services</Link>
                    <Link to='#works' className={activeStyles ({ isActive: location.pathname === '#works' })} onClick={() => ScrollToSection('works')}>Works</Link>
                    <Link to='/contact' style={{border: '1px solid #6d28d9', padding: '0.4rem 1.1rem', borderRadius: '8px', backgroundColor: '#6c28d958'}} className={({ isActive: location.pathname === '/contact' })}>Contact Me</Link>
                </ul>
            </div>

            {/* mobile */}

            {showMenu ? (
                <div className="flex flex-col md:hidden gap-4 p-4 border-b border-l border-r border-dashed rounded-md border-zinc-500">
                    <Link to='/' onClick={() => ScrollToSection('home')} className="hover:text-lime-500 ml-4">Home</Link>
                    <Link to='#services' onClick={() => ScrollToSection('services')} className="hover:text-lime-500 ml-4">Services</Link>
                    <Link to='#works' onClick={() => ScrollToSection('works')} className="hover:text-lime-500 ml-4">Works</Link>
                    <Link to='/contact' style={{border: '1px solid #6d28d9', padding: '0.4rem 1.1rem', borderRadius: '8px', backgroundColor: '#6c28d958'}} className={({ isActive: location.pathname === '/contact' })}>Contact Me</Link>
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;