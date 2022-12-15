import React from "react";
import {Navbar} from "../navbar/navbar";

type LayoutProps = {
    children: React.ReactNode;
}
// @ts-ignore
export const Layout: React.FC <LayoutProps> = ({children}) => {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <footer>
                <div>Footer</div>
            </footer>
        </>
    );
};
