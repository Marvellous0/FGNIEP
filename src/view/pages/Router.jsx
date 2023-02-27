import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Dashboard";
import BiodataPage from "./Biodata";
import NextOfKinPage from "./NextOfKin";
import ServiceRecordPage from "./ServiceRecord";
import FinancialRecordPage from "./FinancialRecord";


const Router = () => {
  const loginParams = ["/", "/login"]

  return (
    <HashRouter>
      <Routes>
        {/* {
          loginParams.map(r => <Route key={Math.random(100)} path={r} element={<LoginPage />} ></Route>)
        } */}
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
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>

    </HashRouter >


  );
}

export default Router;