import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import firebaseApp from "../../../firebase/firebase";

class VehiclesStatistics extends Component {
  state = {
    ctbVehicles: [],
    ctbVehiclesLength:"",
    privateVehicles: [],
    privateVehiclesLength:"",
    chartData: {},
  };

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    
    firebaseApp.database().ref().child('ctbVehicles').on('value',vehicleList =>{
        this.setState({ctbVehicles: {...vehicleList.val()},});
        var ctbCount =  Object.keys(this.state.ctbVehicles).map((id,index) =>{return{index}})
        this.setState({ctbVehiclesLength: ctbCount.length})

        firebaseApp.database().ref().child('Vehicles').on('value',vehicleList =>{
            this.setState({privateVehicles: {...vehicleList.val()},});
            var privateCount =  Object.keys(this.state.privateVehicles).map((id,index) =>{return{index}})
            this.setState({privateVehiclesLength: privateCount.length})
            
          this.setState({
            chartData: {
              labels: ["CTB VEHICLES", "PRIVATE VEHICLES"],
              datasets: [
                {
                  data: [this.state.ctbVehiclesLength, this.state.privateVehiclesLength],
                  backgroundColor: [
                    "rgba(191, 0, 255,0.6)",
                    "rgba(55,559,132,0.6)",
                  ],
                },
              ],
            },
        });
      });
    });
  }

  render() {
    return (
      <>
        {/* <Container> */}
          <div className="col-md-8" style={{ position: "relative" }}>
            <Pie
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: "Current Statistics of CTB Bus Vehicles & Private Bus Vehicles",
                  fontSize: 18,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
              }}
            />
          </div>
        {/* </Container> */}
      </>
    );
  }
}
export default VehiclesStatistics;
