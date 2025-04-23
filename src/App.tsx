import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';

import Header from './layouts/HomeHeader';
import Footer from './layouts/HomeFooter';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register'
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/AboutUs';
import Contact from './pages/contact';

import Dashboard from './pages/User/user'
import Featured1 from './layouts/UserLayouts/FeaturedMotorcycles';
import Settings from './pages/User/Settings';
import My_Pre_Registrations from './pages/User/MyPre-registrations'
import Motorcycles from './pages/User/motorcycles'
import Support_help from './pages/User/SupportHelp'

import Profiles from './pages/User/profile'

import HondaA from './pages/User/MotorDetails/HondaADV';
import HondaX from './pages/User/MotorDetails/HondaX';
import KawasakiD from './pages/User/MotorDetails/KawasakiDomi';
import KawasakiK from './pages/User/MotorDetails/KawasakiKLX';
import SuzukiF from './pages/User/MotorDetails/SuzukiFI';
import SuzukiG from './pages/User/MotorDetails/SuzukiGSX';
import YamahaM from './pages/User/MotorDetails/YamahaMio';
import YamahaZ from './pages/User/MotorDetails/YamahaYZF';

import Apply from './pages/User/Pre-RegistrationForm/1FormAddressInfo';
import Apply2 from './pages/User/Pre-RegistrationForm/2FormFamilyProfile';
import Apply3 from './pages/User/Pre-RegistrationForm/3FormCreditInformation';
import Apply4 from './pages/User/Pre-RegistrationForm/4FormEmployment';
import Apply5 from './pages/User/Pre-RegistrationForm/5FormCo-Maker';
import Apply6 from './pages/User/Pre-RegistrationForm/6FormCreditInquiry';
import Pendings from './pages/User/Pre-RegistrationForm/pending';

import HondaADV from './pages/User/MotorInstallment/Installment_HondaADV';
import HondaX150 from './pages/User/MotorInstallment/Installment_HondaX';
import KawasakiDomi from './pages/User/MotorInstallment/Installment_KawasakiDomi';
import KawasakiKLX from './pages/User/MotorInstallment/Installment_KawasakiKLX';
import SuzukiFI from './pages/User/MotorInstallment/Installment_SuzukiFI';
import SuzukiGSX from './pages/User/MotorInstallment/Installment_SuzukiGSX';
import YamahaMio from './pages/User/MotorInstallment/Installment_YamahaMio';
import YamahaYZF_R15 from './pages/User/MotorInstallment/Installment_YamahaYZF';

import AdminDashboard from './pages/Admin/admin';
import Profiles2 from './pages/Admin/AdminProfile';
import AdminSettings from './pages/Admin/AdminSetting';

import AdminMotorcycles from './pages/Admin/AdminMotorcycles/AdminMotorcycles';
import AddMotorcycle from './pages/Admin/AdminMotorcycles/AddMotorcycle';

import AdminHondaA from './pages/Admin/AdminMotorcycleDetails/aHondaADV';
import AdminHondaX from './pages/Admin/AdminMotorcycleDetails/aHondaX';
import AdminKawasakiD from './pages/Admin/AdminMotorcycleDetails/aKawasakiDomi';
import AdminKawasakiK from './pages/Admin/AdminMotorcycleDetails/aKawasakiKLX';
import AdminSuzukiF from './pages/Admin/AdminMotorcycleDetails/aSuzukiFI';
import AdminSuzukiG from './pages/Admin/AdminMotorcycleDetails/aSuzukiGSX';
import AdminYamahaM from './pages/Admin/AdminMotorcycleDetails/aYamahaMio';
import AdminYamahaZ from './pages/Admin/AdminMotorcycleDetails/aYamahaYZF';
import Details from './pages/Admin/AdminMotorcycleDetails/details';

import UserManagement from './pages/Admin/UserManagement';
import EditUser from './pages/Admin/EditUserDetails';

import ApplicationRequest from './pages/Admin/ApplicationRequest';

import View1 from './pages/Admin/ViewRegistration/1ViewAddressInfo';
import View2 from './pages/Admin/ViewRegistration/2ViewFamilyProfile';
import View3 from './pages/Admin/ViewRegistration/3ViewParental';
import View4 from './pages/Admin/ViewRegistration/4ViewEmployment';
import View5 from './pages/Admin/ViewRegistration/5ViewCo-Maker';
import View6 from './pages/Admin/ViewRegistration/6ViewCreditInquiry';

import ProtectedRoute from './components/ProtectedRoute';



const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/user" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/featured" element={<ProtectedRoute><Featured1 /></ProtectedRoute>} />
      <Route path="/Settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="/MyPre-Registrations" element={<ProtectedRoute><My_Pre_Registrations /></ProtectedRoute>} />
      <Route path="/Motorcycles" element={<ProtectedRoute><Motorcycles /></ProtectedRoute>} />
      <Route path="/SupportHelp" element={<ProtectedRoute><Support_help /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profiles /></ProtectedRoute>} />

      <Route path="/HondaADV" element={<HondaA />} />
      <Route path="/HondaX" element={<HondaX />} />
      <Route path="/KawasakiDomi" element={<KawasakiD />} />
      <Route path="/KawasakiKLX" element={<KawasakiK />} />
      <Route path="/SuzukiFI" element={<SuzukiF />} />
      <Route path="/SuzukiGSX" element={<SuzukiG />} />
      <Route path="/YamahaMio" element={<YamahaM />} />
      <Route path="/YamahaYZF" element={<YamahaZ />} />

      <Route path="/1FormAddressInfo" element={<Apply />} />
      <Route path="/2FormFamilyProfile" element={<Apply2 />} />
      <Route path="/3FormCreditInformation" element={<Apply3 />} />
      <Route path="/4FormEmployment" element={<Apply4 />} />
      <Route path="/5FormCo-Maker" element={<Apply5 />} />
      <Route path="/6FormCreditInquiry" element={<Apply6 />} />
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
      <Route path="/EditUserDetails" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />

      <Route path="/application-request" element={<ApplicationRequest />} />

      <Route path="/1ViewAddressInfo" element={<View1 />} />
      <Route path="/2ViewFamilyProfile" element={<View2 />} />
      <Route path="/3ViewParental" element={<View3 />} />
      <Route path="/4ViewEmployment" element={<View4 />} />
      <Route path="/5ViewCo-Maker" element={<View5 />} />
      <Route path="/6ViewCreditInquiry" element={<View6 />} />


    </Routes>
  </BrowserRouter>
  )
}
export default App