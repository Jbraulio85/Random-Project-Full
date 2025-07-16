import { DashboardPage } from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <DashboardPage />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};
