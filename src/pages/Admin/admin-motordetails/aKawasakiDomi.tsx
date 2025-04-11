import Breadcrumb from "../../../components/admin-breadcrums"
import Header from "../../../layouts/Admin-Layouts/admin-header"
import Sidemenu from "../../../layouts/Admin-Layouts/admin-sidemenu"
import Kawasaki_domi from "../../../assets/photos/motors/kawasaki-domi.png";
import Kawasaki_klx from "../../../assets/photos/motors/kawasaki.png";
import { Link } from "react-router-dom";

function AdminKawasakiD() {
    return (
        <>
        <Header />
            <Sidemenu />
            <div className="main-content app-content">
                <div className="container-fluid">
                    <Breadcrumb
                        title="Kawasaki Dominar 400"
                        links={[{ text: "Motorcycles", link: "/admin-motorcycles" }]}
                        active="Kawasaki Dominar 400"/> 
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden main-content-card">
                            <div className="box-body p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1 border-2 border-gray-400">
                                        <img src={Kawasaki_domi} alt="Kawasaki Dominar 400" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="col-span-1">
                                        <h1 className="mt-8 mb-6">Kawasaki Dominar 400</h1>
                                        <h4 className="mt-2 mb-2">₱208,900.00</h4>
                                        <p>Price may vary upon branch visit.</p>
                                        <h4 className="mt-1 mb-6">Features</h4>
                                            <ul>
                                                <li>• Top Box Bracket with Backrest</li>
                                                <li>• Improved Leg Guard</li>
                                                <li>• Improved Belly Plate</li>
                                                <li>• Taller Windshield</li>
                                                <li>• New Mobile Phone Bracket</li>
                                                <li>• New USB Charging Port</li>
                                                <li>• New Handguard</li>
                                            </ul>

                                        <Link to="/details"
                                            className="mt-3 mb-6 block w-60 text-center px-4 py-2 gap-2 rounded-lg text-white bg-gray-600">
                                             Edit Details
                                        </Link>
                                    </div>
                                </div>

                                <h4 className="mt-4 mb-2">Description</h4>
                                <p className="text-gray-700">
                                    DOMINAR UG2 is equipped with a 400cc, 4-stroke, liquid-cooled, single-cylinder DOHC, DTS-I Engine. It features fully loaded factory-fitted accessories designed to give riders an adventurous and macho image.
                                </p>

                                <h4 className="mt-6 mb-2 flex ">Specification</h4>
                                <div className="flex">
                                    
                                <table className="w-full border border-gray-400">
                                    <tbody>
                                        <tr>
                                        <th className="border border-red-500 p-2">Engine Type</th>
                                        <td className="border border-red-500 p-2">4-Stroke, DOHC, Single-Cylinder, DTS-i</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Displacement</th>
                                        <td className="border border-red-500 p-2">400 cc</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Maximum Power</th>
                                        <td className="border border-red-500 p-2">40 HP / 8800 rpm</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Maximum Torque</th>
                                        <td className="border border-red-500 p-2">35 Nm / 6500 rpm</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Transmission</th>
                                        <td className="border border-red-500 p-2">6-Speed Gear Box</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="w-full border border-gray-400">
                                    <tbody>
                                        <tr>
                                        <th className="border border-red-500 p-2">Fuel Tank</th>
                                        <td className="border border-red-500 p-2">13 L</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Cooling System</th>
                                        <td className="border border-red-500 p-2">Liquid-cooled</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Starting System</th>
                                        <td className="border border-red-500 p-2">Electric Start</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Wheel Type</th>
                                        <td className="border border-red-500 p-2">Mags</td>
                                        </tr>
                                        <tr>
                                        <th className="border border-red-500 p-2">Fuel Consumption</th>
                                        <td className="border border-red-500 p-2">N/A</td>
                                        </tr>
                                    </tbody>
                                </table>

                                </div>
                                    <h4 className="mt-8 mb-2">Related Models</h4>
                                        <p>
                                        Explore our featured motorcycles, starting with top models like the Kawasaki KLX150. More models coming soon
                                        </p>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

                                    <Link to="/akawasakiKLX" className="block text-center">
                                        <img
                                            src={Kawasaki_klx}
                                            alt="Honda WINNER X"
                                            className="w-50 mx-auto mb-2 rounded-lg border border-black"/>
                                        <p className="text-sm font-medium hover:underline">Kawasaki KLX150</p>
                                        <p className="text-gray-600">₱129,900.00</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminKawasakiD;
