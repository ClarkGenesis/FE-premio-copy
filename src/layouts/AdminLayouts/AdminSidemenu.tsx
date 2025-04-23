import logo3 from '../../assets/photos/logo1.png'
import { Link } from 'react-router-dom';

function Sidemenu() {

    return (
        <>
            <aside className="app-sidebar" id="sidebar">
                <div className="main-sidebar-header">
                    <a href=''>
                        <center>
                            <img src={logo3} className='transparent-shadow' style={{ maxHeight: '400px' }} />
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
                                <Link to="/admin" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-gray-200 hover:transition duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-layout-text-window-reverse color'></i>
                                    <span className='side-menu__label text-blue-900'>
                                        Dashboard &ensp;
                                    </span>
                                </Link>
                            </li>

                            <div className='p-2'></div>
                            <li className='slide'>
                                <Link to="/user-management" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-gray-200 hover:transition duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-journal-text'></i>
                                    <span className='side-menu__label'>
                                    User management
                                    </span>
                                </Link>
                            </li>

                            <div className='p-2'></div>
                            <li className='slide'>
                                <Link to="/application-request" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-gray-200 hover:transition duration-300 ease-in-out shadow-md">
                                    <i className='w-1 h-4 side-menu__icon bi bi-journal-text'></i>
                                    <span className='side-menu__label'>
                                    Application requests &ensp;
                                    </span>
                                </Link>
                            </li>

                            <div className=' p-2'></div>
                            <li className='slide'>
                                <Link to="/admin-motorcycles" className="side-menu__item flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-gray-200 hover:duration-300 ease-in-out shadow-md">
                                    <i className='w-6 h-4 side-menu__icon bi bi-speedometer2'></i>
                                    <span className='side-menu__label'>
                                        Motorcycles &ensp;
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

export default Sidemenu;
