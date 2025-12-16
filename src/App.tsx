import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./components/layout/AppLayout";
import Test from "./pages/Test";
import { ScrollToTop } from "./components/common/ScrollToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element = {<AppLayout/>}>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/signin" element={<SignIn />} />
            
            <Route path="/dashboard" element = {<Dashboard/>}/>
            <Route path = "*" element = {<NotFound/>}/>
            <Route path = "/test" element = {<Test/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
