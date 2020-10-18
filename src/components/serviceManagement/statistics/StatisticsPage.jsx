import React from "react";
import { Row,Card } from "react-bootstrap";
import DriversStatistics from "./DriversStatistics";
import VehiclesStatistics from "./VehiclesStatistics";

const StatisticPage = () => {
    return ( 
        <Card>
        <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                Statistics
                </center>
                </h2>
        <Row>
        <DriversStatistics/>
        <VehiclesStatistics/>

        </Row>
        </Card>
     );
}
 
export default StatisticPage;