import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';

import Header from './layouts/home-header';
import Footer from './layouts/home-footer';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpass';
import About from './pages/about';
import Contact from './pages/contact';

import Dashboard from './pages/User/user'
import Featured1 from './layouts/User-Layouts/featured';
import Settings from './pages/User/setting';
import My_Pre_Registrations from './pages/User/my-pre-registrations'
import Motorcycles from './pages/User/motorcycles'
import Support_help from './pages/User/support-help'

import Profiles from './pages/User/profile'

import HondaA from './pages/User/MotorDetails/HondaADV';
import HondaX from './pages/User/MotorDetails/HondaX';
import KawasakiD from './pages/User/MotorDetails/KawasakiDomi';
import KawasakiK from './pages/User/MotorDetails/KawasakiKLX';
import SuzukiF from './pages/User/MotorDetails/SuzukiFI';
import SuzukiG from './pages/User/MotorDetails/SuzukiGSX';
import YamahaM from './pages/User/MotorDetails/YamahaMio';
import YamahaZ from './pages/User/MotorDetails/YamahaYZF';

import Apply from './pages/User/Pre-Registration_Form/form1';
import Apply2 from './pages/User/Pre-Registration_Form/form2';
import Apply3 from './pages/User/Pre-Registration_Form/form3';
import Apply4 from './pages/User/Pre-Registration_Form/form4';
import Apply5 from './pages/User/Pre-Registration_Form/form5';
import Apply6 from './pages/User/Pre-Registration_Form/form6';
import Pendings from './pages/User/Pre-Registration_Form/pending';

import HondaADV from './pages/User/MotorInstallment/Installment_HondaADV';
import HondaX150 from './pages/User/MotorInstallment/Installment_HondaX';
import KawasakiDomi from './pages/User/MotorInstallment/Installment_KawasakiDomi';
import KawasakiKLX from './pages/User/MotorInstallment/Installment_KawasakiKLX';
import SuzukiFI from './pages/User/MotorInstallment/Installment_SuzukiFI';
import SuzukiGSX from './pages/User/MotorInstallment/Installment_SuzukiGSX';
import YamahaMio from './pages/User/MotorInstallment/Installment_YamahaMio';
import YamahaYZF_R15 from './pages/User/MotorInstallment/Installment_YamahaYZF';

import AdminDashboard from './pages/Admin/admin';
import Profiles2 from './pages/Admin/admin-profile';
import AdminSettings from './pages/Admin/admin-setting';

import AdminMotorcycles from './pages/Admin/admin-motors/admin-motorcycles';
import AddMotorcycle from './pages/Admin/admin-motors/add-motorcyle';

import AdminHondaA from './pages/Admin/admin-motordetails/aHondaADV';
import AdminHondaX from './pages/Admin/admin-motordetails/aHondaX';
import AdminKawasakiD from './pages/Admin/admin-motordetails/aKawasakiDomi';
import AdminKawasakiK from './pages/Admin/admin-motordetails/aKawasakiKLX';
import AdminSuzukiF from './pages/Admin/admin-motordetails/aSuzukiFI';
import AdminSuzukiG from './pages/Admin/admin-motordetails/aSuzukiGSX';
import AdminYamahaM from './pages/Admin/admin-motordetails/aYamahaMio';
import AdminYamahaZ from './pages/Admin/admin-motordetails/aYamahaYZF';
import Details from './pages/Admin/admin-motordetails/details';

import UserManagement from './pages/Admin/user-management';
import EditUser from './pages/Admin/Edit-user';

import ApplicationRequest from './pages/Admin/application-request';

import View from './pages/Admin/View-Registration/aform1';
import View2 from './pages/Admin/View-Registration/aform2';
import View3 from './pages/Admin/View-Registration/aform3';
import View4 from './pages/Admin/View-Registration/aform4';
import View5 from './pages/Admin/View-Registration/aform5';
import View6 from './pages/Admin/View-Registration/aform6';

import CreateDetail from './pages/Admin/create-details-motor';

import ProtectedRoute from './components/ProtectedRoute';



const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/user" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/featured" element={<ProtectedRoute><Featured1 /></ProtectedRoute>} />
      <Route path="/setting" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="/my-pre-registrations" element={<ProtectedRoute><My_Pre_Registrations /></ProtectedRoute>} />
      <Route path="/motorcycles" element={<ProtectedRoute><Motorcycles /></ProtectedRoute>} />
      <Route path="/support-help" element={<ProtectedRoute><Support_help /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profiles /></ProtectedRoute>} />

      <Route path="/HondaADV" element={<HondaA />} />
      <Route path="/HondaX" element={<HondaX />} />
      <Route path="/KawasakiDomi" element={<KawasakiD />} />
      <Route path="/KawasakiKLX" element={<KawasakiK />} />
      <Route path="/SuzukiFI" element={<SuzukiF />} />
      <Route path="/SuzukiGSX" element={<SuzukiG />} />
      <Route path="/YamahaMio" element={<YamahaM />} />
      <Route path="/YamahaYZF" element={<YamahaZ />} />

      <Route path="/form" element={<Apply />} />
      <Route path="/form2" element={<Apply2 />} />
      <Route path="/form3" element={<Apply3 />} />
      <Route path="/form4" element={<Apply4 />} />
      <Route path="/form5" element={<Apply5 />} />
      <Route path="/form6" element={<Apply6 />} />
      <Route path="/pending" element={<Pendings />} />

      <Route path="/Installment_HondaADV" element={<HondaADV />} />
      <Route path="/Installment_HondaX" element={<HondaX150 />} />
      <Route path="/Installment_KawasakiDomi" element={<KawasakiDomi />} />
      <Route path="/Installment_KawasakiKLX" element={<KawasakiKLX />} />
      <Route path="/Installment_SuzukiFI" element={<SuzukiFI />} />
      <Route path="/Installment_SuzukiGSX" element={<SuzukiGSX />} />
      <Route path="/Installment_YamahaMio" element={<YamahaMio />} />
      <Route path="/Installment_YamahaYZF" element={<YamahaYZF_R15 />} />

      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin-profile" element={<ProtectedRoute><Profiles2 /></ProtectedRoute>} />
      <Route path="/admin-setting" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
      <Route path="/admin-motorcycles" element={<ProtectedRoute><AdminMotorcycles /></ProtectedRoute>} />
      <Route path="/add-motorcycle" element={<ProtectedRoute><AddMotorcycle /></ProtectedRoute>} />

      <Route path="/aHondaADV" element={<AdminHondaA />} />
      <Route path="/aHondaX" element={<AdminHondaX />} />
      <Route path="/aKawasakiDomi" element={<AdminKawasakiD />} />
      <Route path="/aKawasakiKLX" element={<AdminKawasakiK />} />
      <Route path="/aSuzukiFI" element={<AdminSuzukiF />} />
      <Route path="/aSuzukiGSX" element={<AdminSuzukiG />} />
      <Route path="/aYamahaMio" element={<AdminYamahaM />} />
      <Route path="/aYamahaYZF" element={<AdminYamahaZ />} />

      <Route path="/details" element={<Details />} />

      <Route path="/user-management" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
      <Route path="/edit-user" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />

      <Route path="/application-request" element={<ApplicationRequest />} />

      <Route path="/aform" element={<View />} />
      <Route path="/aform2" element={<View2 />} />
      <Route path="/aform3" element={<View3 />} />
      <Route path="/aform4" element={<View4 />} />
      <Route path="/aform5" element={<View5 />} />
      <Route path="/aform6" element={<View6 />} />

      <Route path="/create-details-motor" element={<CreateDetail />} />

    </Routes>
  </BrowserRouter>
  )
}
export default App