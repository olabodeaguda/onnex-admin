import { Outlet } from "react-router-dom";
import { AppHeader } from "../components/headers/app-header";

export const RootLayout = () => {

    return <div className='bg-grayish-white min-h-screen'>
        <section>
            <AppHeader />
        </section>
        <section className="global-content">
            <div className="main-content">
                <Outlet />
            </div>
        </section>
    </div>
};
