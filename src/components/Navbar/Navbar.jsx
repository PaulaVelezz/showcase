import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const ScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const activeStyles = ({ isActive }) => isActive ? 'px-2 py-1 border-t-2 border-r-2 border-lime-500 rounded-lg' : 'px-2 py-1 text-stone-100 hover:border-t-2 hover:border-r-2 border-lime-500 rounded-lg';

    return (
        <div className='nav flex justify-between p-5  font-space text-stone-100 bg-zinc-950 text-base no-underline'>
            <div id='nav-logo' className='text-3xl font-T1Korium font-bold'>
                <Link to='/'>Paula Velez</Link>
            </div>

            <div id='nav-links' className='p-1 font-semibold'>
                <Link to='/' style={{marginRight: '20px'}} className={activeStyles({ isActive: location.pathname === '/' })} onClick={() => ScrollToSection('home')}>Home</Link>
                <Link to='#services' style={{marginRight: '20px'}} className={activeStyles ({ isActive: location.pathname === '#services' })} onClick={() => ScrollToSection('services')}>Services</Link>
                <Link to='#works' style={{marginRight: '20px'}} className={activeStyles ({ isActive: location.pathname === '#works' })} onClick={() => ScrollToSection('works')}>Works</Link>
                <Link to='/contact' style={{marginRight: '20px'}} className={activeStyles ({ isActive: location.pathname === '/contact' })}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;