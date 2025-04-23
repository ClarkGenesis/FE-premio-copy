import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useNavigate } from "react-router-dom";

import Breadcrumb from "../../components/AdminBreadcrums";
import Header from "../../layouts/AdminLayouts/AdminHeader";
import Sidemenu from "../../layouts/AdminLayouts/AdminSidemenu";
import ProfileImage from "../../assets/photos/user-avatar.png";

const ApplicationRequest: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Make navigate globally accessible so Grid.js HTML buttons can call it
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).ReactRouterNavigate = (path: string) => navigate(path);

        if (gridRef.current) {
            new Grid({
                columns: [
                    { name: "ID", width: "45px" },
                    {
                        name: "Name",
                        width: "140px",
                        formatter: (_, row) =>
                            html(`
                                <div class="flex items-center gap-3">
                                    <img src="${ProfileImage}"
                                        alt="Avatar" class="w-8 h-8 rounded-full" />
                                    <span>${row.cells[1].data}</span>
                                </div>
                            `),
                    },
                    { name: "Date Submitted", width: "150px" },
                    { name: "Email", width: "200px" },
                    { name: "Status", width: "150px" },
                    {
                        name: "Actions",
                        width: "320px",
                        formatter: () =>
                            html(`
                                <div class="flex justify-center gap-2">

                                    <button onclick="window.ReactRouterNavigate('/1ViewAddressInfo')"
                                        class="bg-blue-500 text-white px-2 py-1 rounded text-xs flex items-center">
                                        <i class="ri-eye-line"></i>
                                        <span class="px-1">View Registration</span>
                                    </button>

                                    <button
                                        class="bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
                                        <i class="bi bi-check-circle"></i>
                                        <span class="px-1">Approve</span>
                                    </button>

                                    <button class="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
                                        <i class="ri-close-circle-line mr-1"></i>
                                        <span class="px-1">Disapprove</span>
                                    </button>
                                </div>
                            `)
                    },
                ],
                pagination: { limit: 10 },
                search: true,
                sort: true,
                data: [
                    ["John Doe","04-23-025","john.doe@example.com", "Pending"],
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
                    <Breadcrumb
                        title="User Application Request"
                        active="Application Request"
                    />
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box overflow-hidden main-content-card">
                                <div className="box-body p-5">
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

export default ApplicationRequest;