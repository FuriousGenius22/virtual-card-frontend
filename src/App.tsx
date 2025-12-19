import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./components/layout/AppLayout";

import { ScrollToTop } from "./components/common/ScrollToTop";
import Transaction from "./pages/Transaction";
import Scheduled from "./components/Transactions/Scheduled";
import Reported from "./components/Transactions/Reported";
import TrHistory from "./components/Transactions/TrHistory";
import Reg from "./pages/Reg";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="auth.epn" element={<Auth />} />
          <Route path="reg.epn" element={<Reg />} />
          <Route path="auth.epn/reset-password/" element={<ResetPassword />} />

          <Route path="/" element={<LandingPage />} />
          <Route element={<AppLayout />}>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/cards" element={<Cards />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/history" element={<Transaction />}>
              <Route path="" element={<TrHistory />} />
              <Route path="scheduled" element={<Scheduled />} />
              <Route path="reported" element={<Reported />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
