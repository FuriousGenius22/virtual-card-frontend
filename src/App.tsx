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
import Scheduled from "./pages/Scheduled";
import TrHistory from "./pages/TrHistory";
import Reg from "./pages/Reg";
import ResetPassword from "./pages/ResetPassword";
import Withdrawals from "./pages/Withdrawals";
import Overview from "./pages/Overview";
import TopUp from "./pages/TopUp";
import AccountsTransfer from "./pages/AccountsTransfer";
import TransferToUser from "./pages/TransferToUser";
import DeclineBoard from "./pages/Declineboard";
import NewCard from "./pages/NewCard";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
import Security from "./pages/Security";
import Verification from "./pages/Verification";
import Notification from "./pages/Notification";
import General from "./pages/General";
import Grades from "./pages/Grades";

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
            <Route path="decline-board" element={<DeclineBoard />} />
            <Route path="/new-card" element={<NewCard />} />
            <Route path="/grades" element={<Grades />} />
            
            <Route path="/settings" element={<Settings />} > 
              <Route path="general" element={<General />} />
              <Route path="security" element={<Security />} />
              <Route path="verification" element={<Verification />} />
              <Route path="notifications" element={<Notification />} />
            </Route>
            



            <Route path="/accounts" element={<Accounts />} >
              <Route path="overview" element={<Overview />} />
              <Route path="topUp" element={<TopUp />} />
              <Route path="accountsTransfer" element={<AccountsTransfer />} />
              <Route path="transferToUser" element={<TransferToUser />} />
              <Route path="withdrawals" element={<Withdrawals />} />
            </Route>


            <Route path="/cards" element={<Cards />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />


            <Route path="/history" element={<Transaction />}>
              <Route path="view" element={<TrHistory />} />
              <Route path="scheduled" element={<Scheduled />} />
              <Route path="report" element={<Report />} />
            </Route>



          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
