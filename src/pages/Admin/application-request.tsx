import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/admin-breadcrums";
import Header from "../../layouts/Admin-Layouts/admin-header";
import Sidemenu from "../../layouts/Admin-Layouts/admin-sidemenu";
import ProfileImage from "../../assets/photos/user-avatar.png";

const ApplicationRequest: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gridRef.current) {
            new Grid({
                columns: [
                    { name: "ID", width: "45px" },
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
                    { name: "Motorcycle", width: "200px" },
                    {   
                        name: "Actions",
                        width: "320px",
                        formatter: () =>
                            html(`
                                <div class="flex justify-center gap-2">

                                    <a href="/aform" 
                                        class="bg-blue-500 text-white px-1 py-1 rounded text-xs flex items-center">
                                        <i class="ri-eye-line"></i>
                                        <span class="px-1">View Registration Form</span>
                                    </a>

                                    <a href="#" 
                                        class="bg-green-500 text-white px-1 py-1 rounded text-xs flex items-center">
                                        <i class="bi bi-check-circle"></i>
                                        <span class="px-1">Approve</span>
                                    </a>
                        
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
                    ...[
                        ["John Doe", "john.doe@example.com","Honda Winner X", "09234567890"],
                    ].map((row, index) => [(index + 1) + ".", ...row]),
                ],
            }).render(gridRef.current);
        }
    }, []);

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
                                    <div ref={gridRef}></div> {/* Grid.js Table Here */}
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
