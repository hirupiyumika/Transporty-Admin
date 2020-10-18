import React, { useState, useEffect,useContext } from "react";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';
import styled from "styled-components";
import {Form,Row,Col} from "react-bootstrap";

const AddCTBTimetableForm = (props) => {
    const { addOrEditCTBTimetable,ctbVehicles,ctbDrivers,routes } = useContext(ServiceContext);
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const timetableValues={
        vehicleNo:'',
        driverName:'',
        routeNo:'',
        day:'',
        startTime:'',
        endTime:'',
        booking:0,
    }
    
    var [values,setValues] = useState(timetableValues)

useEffect(() =>{
    if(props.id ==="")
    setValues({
        ...timetableValues
    })
    else 
    setValues({
        ...props.CTBTimetables[props.id]
    })
},[props.id,props.CTBTimetables]
)

const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}

const handleSubmit = e =>{
    e.preventDefault();
    addOrEditCTBTimetable(values,props.id)
}
    return (  
        <div>
        <Form onSubmit={handleSubmit}>
        <div className="form-group input-group">
                <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-user"></i>
                      </div>
                </div>
                    <Form.Control
                        as="select"
                        name="vehicleNo" 
                        value={values.vehicleNo}
                        onChange={handleChange}
                        style={{  background: "rgb(0, 0, 0, 0.1)",
                            color: "white"}}
                    >
                    <option value="none" style={{ color: "black"}}>Select Vehicle</option>
                    {Object.keys(ctbVehicles).map((id) => (
                      <option style={{ color: "black"}} key={id} value={ctbVehicles[id].vehicleNo} >
                        {ctbVehicles[id].vehicleNo}
                      </option>
                    ))}
                  </Form.Control>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-user"></i>
                      </div>
                </div>
                    <Form.Control
                        as="select"
                        name="driverName" 
                        value={values.driverName}
                        onChange={handleChange}
                        style={{  background: "rgb(0, 0, 0, 0.1)",
                            color: "white"}}
                    >
                    <option value="none" style={{ color: "black"}}>Select Driver</option>
                    {Object.keys(ctbDrivers).map((id) => (
                      <option style={{ color: "black"}} key={id} value={ctbDrivers[id].driverName} >
                        {ctbDrivers[id].driverName}
                      </option>
                    ))}
                  </Form.Control>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-road"></i>
                      </div>
                </div>
                <Form.Control
                    as="select"
                    name="routeNo"
                    value={values.routeNo} 
                    onChange={handleChange}
                    style={{  background: "rgb(0, 0, 0, 0.1)",
                        color: "white"}}
                >
                <option value="none" style={{ color: "black"}}>Select Routes</option>
                    {Object.keys(routes).map((id) => (
                    <option style={{ color: "black"}} key={id}  value={routes[id].routeNo} >
                        {routes[id].routeNo}
                      </option>
                    ))}
                  </Form.Control>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-calendar-alt"></i>
                      </div>
                </div>
                <Form.Control
                    as="select"
                    name="day"
                    value={values.day}
                    onChange={handleChange}
                    style={{  background: "rgb(0, 0, 0, 0.1)",
                        color: "white"}}
                >
                <option value="none" style={{ color: "black"}}>Select Day</option>
                    {days.map((day) => (
                    <option style={{ color: "black"}} key={day}  value={day} >
                        {day}
                      </option>
                    ))}
                  </Form.Control>
            </div>
           
            <div className="form-group input-group">
                <div className="input-group-prepend">
                      <div className="input-group-text no-gutters px-1 pt-1 pb-0">
                    <label>START TIME</label>
                      </div>
                </div>
                <Form.Control
                     type="time"
                    value={values.startTime}
                    onChange={handleChange}
                    name="startTime"
                    style={{  background: "rgb(0, 0, 0, 0.1)",
                        color: "white"}}
                >
                    </Form.Control>
                  
            </div>
           
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-text no-gutters px-1 pt-1 pb-0">
                    <label>END TIME</label>
                      </div>
                </div>
                <Form.Control
                    placeholder="End"
                    type="time"
                    value={values.endTime}
                    name="endTime"
                    onChange={handleChange}
                    
                    style={{  background: "rgb(0, 0, 0, 0.1)",
                        color: "white"}}
                >
                  </Form.Control>
            </div>
          
            <div >
                  <input type="submit" value="Save" className="btn btn-primary btn-block"/>
              </div>
        </Form>
        </div>
    );
}
 
export default AddCTBTimetableForm;

