import { Outlet } from "react-router-dom"

export const AppDashboard = () => {

    return <div className="w-full">
        <section className="flex flex-col space-y-4 mt-4 pb-2
                md:space-y-0 md:flex-row md:justify-between md:w-full md:items-center border-b-2 md:pb-0">
            <div className="flex">
                <div className="pr-2 py-2 text-xs cursor-pointer">Overview</div>
            </div>
            <div className="flex items-center space-x-2 mb-3">
                <button className="flex items-center border rounded-lg text-xs px-2 space-x-1">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" /><circle cx="18" cy="11.5" r="1" /></svg>
                    <span>Print</span>
                </button>
                <button className="flex items-center border rounded-lg text-xs px-2 space-x-1 bg-deep-blue text-white">
                    <svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" /></svg>
                    <span>Export</span>
                </button>
            </div>
        </section>
        <section className="">
            <Outlet />
        </section>
    </div>
}