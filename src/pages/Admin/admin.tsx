import Breadcrumb from "../../components/AdminBreadcrums";
import Header from "../../layouts/AdminLayouts/AdminHeader";
import Sidemenu from "../../layouts/AdminLayouts/AdminSidemenu";
import User_avatar1 from '../../assets/images/faces/11.jpg';
import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from 'react';

// Define types for the state variables
interface User {
  name: string;
}

interface Registration {
  name: string;
  date: string;
}

const AdminDashboard = () => {
  const { user } = useAuth() as { user: User }; // Type assertion for user
  const [recentRegistrations, setRecentRegistrations] = useState<Registration[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalUsers, setTotalUsers] = useState({ active: 0, pending: 0, deleted: 0 });
  const [totalMotorcyclesListed, setTotalMotorcyclesListed] = useState(0);
  const [newApplicationRequests, setNewApplicationRequests] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);
  const [approvedApplications, setApprovedApplications] = useState(0);
  const [disapprovedApplications, setDisapprovedApplications] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock data for demonstration
        setRecentRegistrations([
          { name: "John Doe", date: "2025-01-20" },
        ]);

        setTotalUsers({ active: 2, pending: 5, deleted: 2 });
        setTotalMotorcyclesListed(8);
        setNewApplicationRequests(4);
        setPendingApprovals(2);
        setApprovedApplications(2);
        setDisapprovedApplications(3);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  function formatDate(date: string) {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb />

          {/* Welcome & Metrics Section */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            {/* Welcome Section */}
            <div className="col-span-3 md:col-span-3">
              <div className="box overflow-hidden main-content-card">
                <div className="text-center p-6 bg-gray-100 border border-gray-700">
                  <img
                    src={User_avatar1}
                    alt="User Profile"
                    className="transparent-logo avatar-rounded mx-auto mb-4"
                  />
                  <p className="font-medium text-gray-700">
                    <i>Welcome Back!</i><br />
                    <span className="font-bold text-gray-900">{user?.name || 'Admin'}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="col-span-9 md:col-span-9">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5 bg-gray-100 rounded-lg shadow-lg border border-gray-300">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-gray-700">
                    {[
                      { icon: "bi bi-people-fill", label: "Total Users", details: `Active (${totalUsers.active}), Pending (${totalUsers.pending}), Delete (${totalUsers.deleted})` },
                      { icon: "bi bi-speedometer2", label: "Total Motorcycles Listed", details: totalMotorcyclesListed.toString() },
                      { icon: "bi bi-file-earmark-text-fill", label: "New Application Requests", details: newApplicationRequests.toString() },
                      { icon: "bi bi-clock-fill", label: "Pending Approvals", details: pendingApprovals.toString() },
                      { icon: "bi bi-check-circle-fill", label: "Approved Applications", details: approvedApplications.toString() },
                      { icon: "bi bi-x-circle-fill", label: "Disapproved Applications", details: disapprovedApplications.toString() },
                
                    ].map((metric, index) => (
                      <li key={index} className="flex items-center gap-3 border p-4 rounded-lg bg-white shadow-md">
                        <i className={`${metric.icon} text-blue-500 text-xl`}></i>
                        <div>
                          <b>{metric.label}:</b> {metric.details}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {/* Recent Registrations */}
                <div className="box bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Registrations</h3>
                <hr className="mb-4" />
                {loading ? (
                    <div className="text-center py-2">Loading...</div>
                ) : error ? (
                    <div className="text-center py-2 text-red-500">{error}</div>
                ) : recentRegistrations.length === 0 ? (
                    <div className="text-center py-2 text-gray-500">No recent registrations found</div>
                ) : (
                    <ul className="divide-y divide-gray-200">
                    {recentRegistrations.map((reg, index) => (
                        <li key={index} className="py-2">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                            <i className="fas fa-user-plus text-blue-500"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {reg.name || 'Unknown User'}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                {reg.date ? `Registered on ${formatDate(reg.date)}` : 'Date not available'}
                            </p>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
