import Breadcrumb from "../../../components/UserBreadcrums"
import Header from "../../../layouts/UserLayouts/UserHeader"
import Sidemenu from "../../../layouts/UserLayouts/UserSidemenu"
import Yamaha_Mio_Gear_125 from "../../../assets/photos/motors/mio_gear125.png"
import Yamaha_xsr from "../../../assets/photos/motors/yamaha-yzf.png"
import { Link } from "react-router-dom";

function YamahaZ() {
    return (
        <>
        <Header />
            <Sidemenu />
            <div className="main-content app-content">
                <div className="container-fluid">
                    <Breadcrumb
                        title="Yamaha YZF-R15M"
                        links={[{ text: "Motorcycles", link: "/motorcycles" }]}
                        active="Yamaha YZF-R15M"/> 
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden main-content-card">
                            <div className="box-body p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1 border-2 border-gray-400">
                                        <img src={Yamaha_xsr} alt="Kawasaki Dominar 400" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="col-span-1">
                                    <h1 className="mt-8 mb-6">Yamaha YZF-R15M</h1>
                                    <h4 className="mt-2 mb-2">₱203,000.00</h4>
                                    <p className="text-red">Price may vary upon branch visit.</p>
                                    <h4 className="mt-4 mb-2">Features</h4>
                                    <ul>
                                        <li>• Y-Connect</li>
                                        <li>• Powerful Engine with VVA</li>
                                        <li>• Assist and Slipper Clutch</li>
                                        <li>• Quick Shifter</li>
                                        <li>• Traction Control System</li>
                                        <li>• Variable Valve Actuation</li>
                                    </ul>


                                        <div className="flex flex-col gap-2 m-2 p-2 mt-4 ">
                                            <Link 
                                                to="/1FormAddressInfo"
                                                className="w-60 text-center px-4 py-2 rounded-lg text-white bg-blue-600 border border-black"
                                                onClick={() => window.scrollTo({ top: 0})}>
                                                <i className="bi bi-pencil-square"></i> Pre-Register
                                            </Link>
                                            <Link 
                                                to="/Installment_YamahaYZF"
                                                className="mt-2 w-60 text-center px-6 py-1 rounded-lg text-white bg-gray-600 border border-black"
                                            >
                                                <i className="bi bi-cash"></i> Check Our Installment Carculator
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>

                                <h4 className="mt-4 mb-2">Description</h4>
                                <p className="text-gray-700">
                                The YZF-R15M redefines innovation on the racetrack. A highly precise machine that has been crafted for superior performance, advanced with the latest technology, and designed true to the R brand. Now enhanced with Y-Connect compatibility, linking you with your motorcycle for a whole new experience.
                                </p>

                                <h4 className="mt-6 mb-2 flex ">Specification</h4>
                                <div className="flex">
                                    
                            
                                <table className="w-full border border-gray-400">
                                    <tbody>
                                        <tr>
                                            <th className="border border-red-500 p-2">Engine Type</th>
                                            <td className="border border-red-500 p-2">Liquid Cooled, 4-Stroke, SOHC, 4-Valve</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Cylinder Arrangement</th>
                                            <td className="border border-red-500 p-2">Single Cylinder</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Displacement</th>
                                            <td className="border border-red-500 p-2">155 cm³</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Bore & Stroke</th>
                                            <td className="border border-red-500 p-2">58.0 x 58.7 mm</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Compression Ratio</th>
                                            <td className="border border-red-500 p-2">11.6:1</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Maximum Horse Power</th>
                                            <td className="border border-red-500 p-2">14.2kW (19.3PS) @ 10,000r/min</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Maximum Torque</th>
                                            <td className="border border-red-500 p-2">14.7N·m (1.5kgf·m) @ 8,500r/min</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Starting System</th>
                                            <td className="border border-red-500 p-2">Electric Starter</td>
                                        </tr>
                                    </tbody>
                                </table>



                                <table className="w-full border border-gray-400">
                                    <tbody>
                                        <tr>
                                            <th className="border border-red-500 p-2">Lubrication System</th>
                                            <td className="border border-red-500 p-2">Wet Sump</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Engine Oil Capacity</th>
                                            <td className="border border-red-500 p-2">1.05 L</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Fuel Supply System</th>
                                            <td className="border border-red-500 p-2">Fuel Injection</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Clutch Type</th>
                                            <td className="border border-red-500 p-2">Wet, Multiple-Disc</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Transmission Type</th>
                                            <td className="border border-red-500 p-2">Constant Mesh, 6-Speed</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Tire Size (Front)</th>
                                            <td className="border border-red-500 p-2">90/80 – 17M/C (Tubeless Tires)</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Tire Size (Rear)</th>
                                            <td className="border border-red-500 p-2">130/70 – 17M/C (Tubeless Tires)</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-red-500 p-2">Fuel Tank Capacity</th>
                                            <td className="border border-red-500 p-2">11 L</td>
                                        </tr>
                                    </tbody>
                                    </table>



                                </div>
                                    <h4 className="mt-8 mb-2">Related Products</h4>
                                        <p>
                                        Explore our featured motorcycles, starting with Yamaha YZF-R15M. More models coming soon
                                        </p>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

                                    <button
                                        value="/YamahaMio" className="block text-center" 
                                        onClick={() => window.scrollTo({ top: 100})}>
                                            <img
                                                src={Yamaha_Mio_Gear_125}
                                                alt="Honda WINNER X"
                                                className="w-50 mx-auto mb-2 rounded-lg border border-black"
                                            />
                                        <p className="text-sm font-medium hover:underline">Yamaha YZF-R15M</p>
                                        <p className="text-gray-600">₱203,000.00</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default YamahaZ;
