import React, { useState, useEffect,useContext } from "react";
import {Form} from 'react-bootstrap'
import {  ServiceContext } from "../../../context/ServiceContext";
import {InputWrapper} from '../../common/CommonStyle';

const AddRouteForm = (props) => {
    const { addOrEditRoute } = useContext(ServiceContext);
    
    const routeValues={
        routeNo:'',
        startingPoint:'',
        destination:'',
    }
    var [values,setValues] = useState(routeValues)
    var [noOfLocations,setNoOfLocations] = useState()
    var [locations,setLocations] = useState([])   
    var indexes = [];
    for (var i = 1; i <= noOfLocations; i++) {
        indexes.push(i);
    } 

useEffect(() =>{
    if(props.id ==="")
    setValues({
        ...routeValues,
    })
    else 
    setValues({
        ...props.routes[props.id]
    })
    setLocations({
        ...props.routes.locations
    })
},[props.id,props.routes]
)

const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
    console.log("AddRouteForm -> e.target",values)
}

const handleLocations = (e) => {
setLocations({
        ...locations,
        [e.target.name]:e.target.value
    })
  };

const handleSubmit = e =>{
    e.preventDefault();
    addOrEditRoute({...values,locations,noOfLocations},props.id)
}

    return ( 
    <div>
          <Form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-road"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Route No" value={values.routeNo} name="routeNo" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-hourglass-start"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Starting Point" value={values.startingPoint} name="startingPoint" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-square"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter No of Locations" value={values.noOfLocations} name="noOfLocations" onChange={(e) => setNoOfLocations(e.target.value)}/>
              </div>
              {indexes.map(function (i) {
                  return (
              <div className="form-group input-group" key={i}>
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-map-marker-alt"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder={`Enter Location ${i}`} value= {props.id ==="" ? (values.locations) : ( values.locations[i]  )}  name={`${i}`}  onChange={handleLocations}/>
              </div>
               );
            })}
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-hourglass-end"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Destination" value={values.destination} name="destination" onChange={handleChange}/>
              </div>
              <div className="form-group">
                  <input type="submit" value={props.id ==="" ? "Save" : "Update"} className="btn btn-primary btn-block"/>
              </div>
           
            </Form>
       </div>
     );
}
 
export default AddRouteForm;