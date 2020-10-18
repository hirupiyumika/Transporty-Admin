import React, { useState, useEffect,useContext } from "react";
import {Form} from 'react-bootstrap'
import {  ServiceContext } from "../../../context/ServiceContext";
import {InputWrapper} from '../../common/CommonStyle';

const AddPassengerForm = (props) => {
    const { addOrEditPassenger } = useContext(ServiceContext);
    
    const passengerValues={
        firstName:'',
        lastName:'',
        NIC:'',
        email:'',
        phoneNumber:'',
        username:'',
        balance: 0,
    }
    
    var [values,setValues] = useState(passengerValues)

useEffect(() =>{
    if(props.id ==="")
    setValues({
        ...passengerValues
    })
    else 
    setValues({
        ...props.passengers[props.id]
    })
},[props.id,props.passengers]
)

const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}

const handleSubmit = e =>{
    e.preventDefault();
    addOrEditPassenger(values,props.id)
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
              <InputWrapper className="form-control" required placeholder="Enter First Name" value={values.firstName} name="firstName" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-user"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Last Name" value={values.lastName} name="lastName" onChange={handleChange}/>
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
                          <i className="fas fa-envelope"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required type="email" placeholder="Enter E-mail" value={values.email} name="email" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-mobile-alt"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Phone Number" value={values.phoneNumber} name="phoneNumber" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-address-card"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Username" value={values.username} name="username" onChange={handleChange}/>
              </div>
              <div className="form-group">
                  <input type="submit" value={props.id ==="" ? "Save" : "Update"} className="btn btn-primary btn-block"/>
              </div>
           
            </Form>
       </>
     );
}
 
export default AddPassengerForm;