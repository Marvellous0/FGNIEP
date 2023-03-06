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
import SummaryPage from "./Summary";


const Router = () => {
  const loginParams = ["/", "/login"]
  const adminParams = ["/admindashboard", "admindashboard/university"]

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