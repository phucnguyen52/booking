import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { APP_ROUTER } from "../../utils/Constants";

function AdminLayout() {
    return (
        <div className="mx-auto w-full" style={{ maxWidth: "100vw" }}>
           admin
            <main className="mx-32">
                <Outlet />
               
            </main>
           
        </div>
    );
}

export default AdminLayout;
