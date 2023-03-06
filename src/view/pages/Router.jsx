import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Dashboard";
import BiodataPage from "./Biodata";
import NextOfKinPage from "./NextOfKin";
import ServiceRecordPage from "./ServiceRecord";
import FinancialRecordPage from "./FinancialRecord";
import LoginPage from "./LoginPage";
import AdminDashboardPage from "./AdminDashboardPage";
import BankPage from "./Bank";
import PfaPage from "./Pfa";
import UserPage from "./User";
import { useSelector } from "react-redux";
import CreatePfaPage from "./CreatePfa";
// import AddUniversity from "../components/admin/University/AddUniversity";
// import AddBank from "../components/admin/Bank/AddBank";
import SummaryPage from "./Summary";


const Router = () => {
  const loginParams = ["/", "/login"]
  const adminParams = ["/admindashboard", "admindashboard/university"]
  const user = useSelector(state => state.user);

 
  return (
    <HashRouter>
      <Routes>
        {
          loginParams.map(r => <Route key={Math.random(100)} path={r} element={<LoginPage />} ></Route>)
        }
        {
           adminParams.map((r) => <Route key={Math.random(100)} path={r} element={<AdminDashboardPage/>} ></Route>) 
        }
        {
          <Route path={"/admindashboard/bank"} element={<BankPage/>} ></Route>
        }
        {
          <Route path={"/admindashboard/pfa"} element={<PfaPage/>} ></Route>
        }
        {/* {
          <Route path={"/university/add"} element={<AddUniversity/>} ></Route>
        }
         {
          <Route path={"/bank/add"} element={<AddBank/>} ></Route>
        } */}
        {
          <Route path={"/pfa/add"} element={<CreatePfaPage/>} ></Route>
        }
         {
          <Route path={"/admindashboard/user"} element={<UserPage/>} ></Route>
        }
        {
          <Route path={"/dashboard"} element={<DashboardPage/>} ></Route>
        }
        {
          <Route path={"/biodata"} element={<BiodataPage/>} ></Route>
        }
        {
          <Route path={"/nextofkin"} element={<NextOfKinPage/>} ></Route>
        }
        {
          <Route path={"/servicerecord"} element={<ServiceRecordPage/>} ></Route>
        }
        {
          <Route path={"/financialrecord"} element={<FinancialRecordPage/>} ></Route>
        }
        {
          <Route path={"/summary"} element={<SummaryPage/>} ></Route>
        }
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>

    </HashRouter >


  );
}

export default Router;