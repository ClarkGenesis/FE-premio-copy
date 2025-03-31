import logo2 from '../../assets/photos/logo1.png'
import { Link } from 'react-router-dom';

function Sidemenu() {

    return (
        <>
            <aside className="app-sidebar" id="sidebar">
                <div className="main-sidebar-header">
                <a href=''>
                    <center>
                        <img src={logo2} className='transparent-shadow' style={{ maxHeight: '500px' }} />
                    </center>
                </a>
                </div>
                <div className='main-sidebar' id="sidebar-scroll">
                    <nav className="main-menu-container nav nav-pills flex-col sub-open ">
                        <div className='slide-left' id='slide-left'>
                        </div>
                        <ul className='main-menu pt-5'>
                            <li className='slide__category '><span className='category-name'>Main</span></li>
                            <li className='slide'>
                                <Link to="/user" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-red-200 hover:bg-green-700 transition duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-layout-text-window-reverse color'></i>
                                    <span className='side-menu__label text-blue-900'>
                                        Dashboard &ensp;
                                        <span className='translate-middle badge !rounded-full bg-danger'> 5+ </span>
                                    </span>
                                </Link>
                            </li>

                            <div className=' p-2'></div>
                            <li className='slide'>
                                <Link to="/motorcycles" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-red-200 hover:bg-green-300 transition duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-speedometer2'></i>
                                    <span className='side-menu__label'>
                                        Motorcycles &ensp;
                                        <span className='translate-middle badge !rounded-full bg-danger'> 4+ </span>
                                    </span>
                                </Link>
                            </li>

                            <div className='p-2'></div>
                            <li className='slide'>
                                <Link to="/my-pre-registrations" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-red-200 hover:bg-green-700 transition duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-journal-text'></i>
                                    <span className='side-menu__label'>
                                    Pre-Registrations
                                    </span>
                                </Link>
                            </li>

                            <div className='p-2'></div>
                            <li className='slide'>
                                <Link to="/support-help" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-red-200 hover:transition duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-question-circle'></i>
                                    <span className='side-menu__label'>
                                    Support & Help
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidemenu
