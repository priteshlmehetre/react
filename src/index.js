/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";


  var url = "https://collectkart.docboyz.in/";
  // if((window.location.href).includes("localhost")){
  //    url = "http://localhost/";
  // }
  localStorage.setItem("URL", url+"api/");
  localStorage.setItem("authToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo");

    
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Redirect from={`/`} to="/admin/dashboard" />
      </Switch>
    </HashRouter>,
    document.getElementById("root")
  );
