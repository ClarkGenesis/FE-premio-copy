import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useNavigate } from "react-router-dom";

import Breadcrumb from "../../components/AdminBreadcrums";
import Header from "../../layouts/AdminLayouts/AdminHeader";
import Sidemenu from "../../layouts/AdminLayouts/AdminSidemenu";
import ProfileImage from "../../assets/photos/user-avatar.png";

const UserManagement: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Make navigate globally accessible so Grid.js HTML buttons can call it
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ReactRouterNavigate = (path: string) => navigate(path);

    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "ID", width: "35px" },
          {
            name: "Name",
            width: "200px",
            formatter: (_, row) =>
              html(`
                <div class="flex items-center gap-3">
                  <img src="${ProfileImage}"
                    alt="Avatar" class="w-8 h-8 rounded-full" />
                  <span>${row.cells[1].data}</span>
                </div>
              `),
          },
          { name: "Email", width: "200px" },
          { name: "Phone Number", width: "150px" },
          { name: "Role", width: "100px" },
          {
            name: "Actions",
            width: "140px",
            formatter: () =>
              html(`
                <div class="flex justify-center gap-2">
                  <button onclick="window.ReactRouterNavigate('/EditUserDetails')" 
                    class="bg-yellow-500 text-white px-2 py-1 rounded text-xs flex items-center">
                    <i class="ri-pencil-line mr-1"></i>
                    <span class="px-1">Edit</span>
                  </button>

                  <button class="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
                    <i class="ri-delete-bin-line mr-1"></i>
                    <span class="px-1">Delete</span>
                  </button>
                </div>
              `),
          },
        ],
        pagination: { limit: 10 },
        search: true,
        sort: true,
        data: [
          ["John Doe", "john.doe@example.com", "09234567890", "User"],
        ].map((row, index) => [(index + 1) + ".", ...row]),
      }).render(gridRef.current);
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb title="Users Management" active="User Management" />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5 border">
                  <div ref={gridRef}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
