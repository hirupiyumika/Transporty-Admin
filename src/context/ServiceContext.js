import React, { Component } from "react";
import firebaseApp from "../firebase/firebase";
import Swal from "sweetalert2";

const ServiceContext = React.createContext();
class ServiceProvider extends Component {
  state = {
    admin:"",
    ctbVehicles: [],
    privateVehicles:[],
    ctbDrivers:[],
    privateDrivers:[],
    passengers:[],
    routes:{},
    CTBTimetables:[],
    journeys:{},
    payment:[],
    a:[],

  };


  componentDidMount = () => {
    this.populateCTBVehicles();
    this.populatePrivateVehicles();
    this.populateCTBDrivers();
    this.populatePrivateDrivers();
    this.populatePassengers();
    this.populateRoutes();
    this.populateCTBTimetable();
    this.populatePayments();
    this.currentAdmin();
  };

currentAdmin =()=>{
  const name = localStorage.getItem("username")
  this.setState({admin:name})
}

//   populate CTB Vehicles
populateCTBVehicles = () => {
    firebaseApp.database().ref().child('ctbVehicles').on('value',vehicleList =>{
        if(vehicleList.val()!=null)
        this.setState({ctbVehicles: {...vehicleList.val()}
        })
        else
        this.setState({ctbVehicles:{}})
    })
  };

  
  
  addOrEditVehicle =( data,id) =>{
    if(id === "")
    firebaseApp.database().ref().child('ctbVehicles').push(
data,
err => {
    if(err)
    console.log(err)
}
)
else
firebaseApp.database().ref().child(`ctbVehicles/${id}`).set(
    data,
    err => {
        if(err)
        console.log(err)
    }
)
}

 onDeleteCTBVehicle = key => {
        try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
            firebaseApp.database().ref().child(`ctbVehicles/${key}`).remove(
                err => {
                    if(err)
                    console.log(err)
                }
            )
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Vehicle has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
}

//   populate Private Vehicles
populatePrivateVehicles = () => {
  firebaseApp.database().ref().child('Vehicles').on('value',vehicleList =>{
      if(vehicleList.val()!=null){
      this.setState({privateVehicles: {...vehicleList.val()}})
    }
      else
      this.setState({privateVehicles:{}})
  })
};

onDeletePrivateVehicle = key => {
  try {
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Delete",
}).then((result) => {
  if (result.value) {
      firebaseApp.database().ref().child(`Vehicles/${key}`).remove(
          err => {
              if(err)
              console.log(err)
          }
      )
    Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Vehicle has been deleted",
      showConfirmButton: true,
      timer: 1500,
    }).then(function () {});
  }
});
} catch (error) {}
}


//   populate CTB Drivers
populateCTBDrivers = () => {
    firebaseApp.database().ref().child('ctbDrivers').on('value',driverList =>{
        if(driverList.val()!=null){
        this.setState({ctbDrivers: {...driverList.val()}})
    }
        else
        this.setState({ctbDrivers:{}})
    })
  };

  
  
  addOrEditDriver =( data,id) =>{
    if(id === "")
    firebaseApp.database().ref().child('ctbDrivers').push(
data,
err => {
    if(err)
    console.log(err)
}
)
else
firebaseApp.database().ref().child(`ctbDrivers/${id}`).set(
    data,
    err => {
        if(err)
        console.log(err)
    }
)
}

 onDeleteCTBDriver = key => {
        try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
            firebaseApp.database().ref().child(`ctbDrivers/${key}`).remove(
                err => {
                    if(err)
                    console.log(err)
                }
            )
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Driver has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
}

//   populate Private Drivers
populatePrivateDrivers = () => {
  firebaseApp.database().ref().child('Drivers').on('value',driverList =>{
      if(driverList.val()!=null)
      this.setState({privateDrivers: {...driverList.val()}
      })
      else
      this.setState({privateDrivers:{}})
  })
};

onDeletePrivateDriver = key => {
  try {
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Delete",
}).then((result) => {
  if (result.value) {
      firebaseApp.database().ref().child(`Drivers/${key}`).remove(
          err => {
              if(err)
              console.log(err)
          }
      )
    Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Driver has been deleted",
      showConfirmButton: true,
      timer: 1500,
    }).then(function () {});
  }
});
} catch (error) {}
}

//   populate Passengers
populatePassengers = () => {
    firebaseApp.database().ref().child('passengers').on('value',passengerList =>{
        if(passengerList.val()!=null)
        this.setState({passengers: {...passengerList.val()}
        })
        else
        this.setState({passengers:{}})
    })
  };

  
  
  addOrEditPassenger =( data,id) =>{
    if(id === "")
    firebaseApp.database().ref().child('passengers').push(
data,
err => {
    if(err)
    console.log(err)
}
)
else
firebaseApp.database().ref().child(`passengers/${id}`).set(
    data,
    err => {
        if(err)
        console.log(err)
    }
)
}

 onDeletePassenger = key => {
        try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
            firebaseApp.database().ref().child(`passengers/${key}`).remove(
                err => {
                    if(err)
                    console.log(err)
                }
            )
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Passenger has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
}


//   populate Routes
populateRoutes = () => {
    firebaseApp.database().ref().child('routes').on('value',routeList =>{
        if(routeList.val()!=null)
        this.setState({routes: {...routeList.val()}
        })
        else
        this.setState({routes:{}})
    })
  };

  
  
  addOrEditRoute =( data,id) =>{
    if(id === "")
    firebaseApp.database().ref().child('routes').push(
data,
err => {
    if(err)
    console.log(err)
}
)
else
firebaseApp.database().ref().child(`routes/${id}`).set(
    data,
    err => {
        if(err)
        console.log(err)
    }
)
window.location.reload();
}

 onDeleteRoute = key => {
        try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
            firebaseApp.database().ref().child(`routes/${key}`).remove(
                err => {
                    if(err)
                    console.log(err)
                }
            )
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Route has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
}

//   populate CTB Timetable
populateCTBTimetable = () => {
  firebaseApp.database().ref().child('ctbTimetable').on('value',ctbTimetableList =>{
      if(ctbTimetableList.val()!=null)
      this.setState({CTBTimetables: {...ctbTimetableList.val()}
      })
      else
      this.setState({CTBTimetables:{}})
  })
};

addOrEditCTBTimetable =( data,id) =>{
  console.log("addOrEditCTBTimetable -> data", data)
  if(id === "")
  firebaseApp.database().ref().child('ctbTimetable').push(
data,
err => {
  if(err)
  console.log(err)
}
)
else
firebaseApp.database().ref().child(`ctbTimetable/${id}`).set(
  data,
  err => {
      if(err)
      console.log(err)
  }
)
window.location.reload();
}

onDeleteCTBTimetable = key => {
      try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.value) {
          firebaseApp.database().ref().child(`ctbTimetable/${key}`).remove(
              err => {
                  if(err)
                  console.log(err)
              }
          )
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "CTB Time has been deleted",
          showConfirmButton: true,
          timer: 1500,
        }).then(function () {});
      }
    });
  } catch (error) {}
}

//   populate Payments
populatePayments = () => {
  firebaseApp.database().ref().child('journeys').on('value',journeyList =>{
      if(journeyList.val()!=null){
      this.setState({journeys: {...journeyList.val()}})

      var finance =  Object.keys(this.state.journeys).map(id =>{
        const user = Object.keys(this.state.passengers).filter((p) => this.state.passengers[p].userId == this.state.journeys[id].passengerId)
        return{
          // id: this.state.journeys[id],
          cost: this.state.journeys[id].cost,
          date: this.state.journeys[id].date,
          passenger : this.state.passengers[user].username,
          distance: this.state.journeys[id].distanceTravelled,
          route:this.state.journeys[id].routeTaken.routeNo,
        }
      })
      this.setState({payment: finance})
    }
      else
      this.setState({journeys:{}})
  })
};

  render() {
      console.log("a",this.state.a)
    return (
      <ServiceContext.Provider
        value={{
          ...this.state,
          addOrEditVehicle:this.addOrEditVehicle,
          addOrEditDriver:this.addOrEditDriver,
          onDeleteCTBVehicle: this.onDeleteCTBVehicle,
          onDeletePrivateVehicle:this.onDeletePrivateVehicle,
          onDeleteCTBDriver: this.onDeleteCTBDriver,
          onDeletePrivateDriver:this.onDeletePrivateDriver,
          onDeletePassenger: this.onDeletePassenger,
          addOrEditPassenger:this.addOrEditPassenger,
          onDeleteRoute: this.onDeleteRoute,
          addOrEditRoute:this.addOrEditRoute,
          addOrEditCTBTimetable: this.addOrEditCTBTimetable,
          onDeleteCTBTimetable:this.onDeleteCTBTimetable,
        }}
      >
        {this.props.children}
      </ServiceContext.Provider>
    );
  }
}

const ServiceConsumer = ServiceContext.Consumer;
export { ServiceProvider, ServiceConsumer, ServiceContext };
