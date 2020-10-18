import React, { useState, useEffect,useContext } from "react";
import {Form} from 'react-bootstrap'
import {  ServiceContext } from "../../../context/ServiceContext";
import {InputWrapper} from '../../common/CommonStyle';

const AddCTBDriverForm = (props) => {
    const { addOrEditDriver } = useContext(ServiceContext);
    
    const driverValues={
        driverName:'',
        NIC:'',
        email:'',
        contactNo:'',
    }
    
    var [values,setValues] = useState(driverValues)

useEffect(() =>{
    if(props.id ==="")
    setValues({
        ...driverValues
    })
    else 
    setValues({
        ...props.ctbDrivers[props.id]
    })
},[props.id,props.ctbDrivers]
)

const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}

const handleSubmit = e =>{
    e.preventDefault();
    addOrEditDriver(values,props.id)
}

    return ( 
    <>
          <Form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-user"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Driver Name" value={values.driverName} name="driverName" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-square"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter NIC" value={values.NIC} name="NIC" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                      <i className="far fa-envelope"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required type="email" placeholder="Enter Email" value={values.email} name="email" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-mobile-alt"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Contact No" value={values.contactNo} name="contactNo" onChange={handleChange}/>
              </div>
              <div className="form-group">
                  <input type="submit" value={props.id ==="" ? "Save" : "Update"} className="btn btn-primary btn-block"/>
              </div>
           
            </Form>
       </>
     );
}
 
export default AddCTBDriverForm;