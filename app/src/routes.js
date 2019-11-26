import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardAdminPage from "./pages/DashboardAdmin";
import DashboardCompanyPage from "./pages/DashboardCompany";
import LoginPage from "./pages/Login";
import SignCompanyPage from "./pages/SignCompany";
import SignSchoolPage from "./pages/SignSchool";
import SignStudentPage from "./pages/SignStudent";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignCompanyPage} />
        <Route path="/student" exact component={SignStudentPage} />
        <Route path="/school" exact component={SignSchoolPage} />
        <Route path="/company" exact component={SignCompanyPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/company/dashboard" exact component={DashboardCompanyPage} />
        <Route path="/admin/dashboard" exact component={DashboardAdminPage} />
      </Switch>
    </BrowserRouter>
  );
}
