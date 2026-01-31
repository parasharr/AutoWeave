import InfoBar from "@/src/components/infobar";
import Sidebar from "@/src/components/sidebar";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className="flex overflow-hidden h-screen">
            <Sidebar />
            <div className="w-full pl-20 transition-all duration-300">
                <InfoBar />
                {children}
            </div>
        </div>
    );
};

export default layout;