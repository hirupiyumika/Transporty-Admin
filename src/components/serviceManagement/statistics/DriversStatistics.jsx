import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import firebaseApp from "../../../firebase/firebase";

class DriversStatistics extends Component {
  state = {
    ctbDrivers: [],
    ctbDriversLength:"",
    privateDrivers: [],
    privateDriversLength:"",
    chartData: {},
  };

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    
    firebaseApp.database().ref().child('ctbDrivers').on('value',driverList =>{
        this.setState({ctbDrivers: {...driverList.val()},});
        var ctbCount =  Object.keys(this.state.ctbDrivers).map((id,index) =>{return{index}})
        this.setState({ctbDriversLength: ctbCount.length})

        firebaseApp.database().ref().child('Drivers').on('value',driverList =>{
            this.setState({privateDrivers: {...driverList.val()},});
            var privateCount =  Object.keys(this.state.privateDrivers).map((id,index) =>{return{index}})
            this.setState({privateDriversLength: privateCount.length})
            
          this.setState({
            chartData: {
              labels: ["CTB DRIVERS", "PRIVATE DRIVERS"],
              datasets: [
                {
                  data: [this.state.ctbDriversLength, this.state.privateDriversLength],
                  backgroundColor: [
                    "rgba(255, 191, 0,0.6)",
                    "rgba(0, 191, 255,0.6)",
                  ],
                },
              ],
            },
        //   });
        });
      });
    });
  }

  render() {
    return (
      <>
        {/* <Container> */}
          <div className="col-md-4" style={{ position: "relative" }}>
            <Pie
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: "Current Statistics of CTB Bus Drivers & Private Bus Drivers",
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
export default DriversStatistics;
