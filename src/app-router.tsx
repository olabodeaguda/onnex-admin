import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layouts/root-layout";
import { AppDashboard } from "./components/dashboard/app-dashboard";
import { ClientList } from "./components/identity-service/clients/client-list";
import { UserList } from "./components/identity-service/users/user-list";
import { IdentityLayout } from "./layouts/identity-layout";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<AppDashboard />} />
      <Route path="identity" element={<IdentityLayout />}>
        <Route index path="client" element={<ClientList />} />
        <Route path="users" element={<UserList />} />
      </Route>
    </Route>
  )
);
