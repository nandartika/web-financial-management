import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoanPage from "./pages/LoanPages";
import ReportPage from "./pages/ReportPages";
import PersonalPage from "./pages/PersonalPage";
import LoginPage from "./pages/LoginPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route index element={<PersonalPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
