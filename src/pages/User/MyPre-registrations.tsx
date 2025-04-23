import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

import Breadcrumb from "../../components/UserBreadcrums";
import Header from "../../layouts/UserLayouts/UserHeader";
import Sidemenu from "../../layouts/UserLayouts/UserSidemenu";

const MyPreRegistrations: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "ID", width: "35px" },
          { name: "Submitted On", width: "200px" },
          { name: "Estimated Approval", width: "200px" },
          { name: "Status", width: "150px" },
          {
            name: "Actions",
            width: "140px",
            formatter: () =>
              html(`
                <div class="flex justify-center gap-2">
                  <button
                    class="bg-gray-500 text-white px-2 py-1 rounded-lg text-xs flex items-center">
                    <i class="ri-pencil-line mr-1"></i>
                    <span class="px-1">Print Pre-Registration</span>
                  </button>
                </div>
              `),
          },
        ],
        pagination: { limit: 10 },
        search: true,
        sort: true,
        data: [
          ["4-22-2025","3-5 Business Days", "Pending"],
        ].map((row, index) => [(index + 1) + ".", ...row]),
      }).render(gridRef.current);
    }
  }, []);

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb title="My Pre-Registrations" active="My Pre-Registrations" />
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

export default MyPreRegistrations;
