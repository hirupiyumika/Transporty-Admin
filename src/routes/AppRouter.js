import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CTBDriverPage from "../components/serviceManagement/driver/CTBDriverPage";
import PrivateDrivers from "../components/serviceManagement/driver/PrivateDrivers";
import PassengerPage from "../components/serviceManagement/passengers/PassengerPage";
import PaymentPage from "../components/serviceManagement/payments/PaymentPage";
import RoutePage from "../components/serviceManagement/route/RoutePage";
import StatisticPage from "../components/serviceManagement/statistics/StatisticsPage";
import CTBTimetablePage from "../components/serviceManagement/time/CTBTimetablePage";
import CTBVehiclePage from "../components/serviceManagement/vehicle/CTBVehiclePage"
import PrivateVehicles from "../components/serviceManagement/vehicle/PrivateVehicles";
import Index from './../components/Index';


class AppRouter extends Component {
  
    render() { 
        return ( 
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/ctb-vehicles" component={CTBVehiclePage}/>
          <Route path="/private-vehicles" component={PrivateVehicles}/>
          <Route path="/ctb-drivers" component={CTBDriverPage}/>
          <Route path="/private-drivers" component={PrivateDrivers}/>
          <Route path="/passenger" component={PassengerPage}/>
          <Route path="/location" component={RoutePage}/>
          <Route path="/ctb-time" component={CTBTimetablePage}/>
          <Route path="/payment" component={PaymentPage}/>
          <Route path="/statistics" component={StatisticPage}/>

          </Switch>
         );
    }
}
 
export default AppRouter;