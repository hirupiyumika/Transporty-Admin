import React, { useState, useEffect,useContext } from "react";
import {Form} from 'react-bootstrap'
import {  ServiceContext } from "../../../context/ServiceContext";
import {InputWrapper} from '../../common/CommonStyle';

const AddCTBVehicleForm = (props) => {
    const { addOrEditVehicle } = useContext(ServiceContext);
    
    const vehicleValues={
        vehicleName:'',
        vehicleNo:'',
        depot:'',
        depotContactNo:'',
    }
    
    var [values,setValues] = useState(vehicleValues)

useEffect(() =>{
    if(props.id ==="")
    setValues({
        ...vehicleValues
    })
    else 
    setValues({
        ...props.ctbVehicles[props.id]
    })
},[props.id,props.ctbVehicles]
)

const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}

const handleSubmit = e =>{
    e.preventDefault();
    addOrEditVehicle(values,props.id)
}

    return ( 
    <>
    <div>
          <Form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-bus"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Vehicle Name" value={values.vehicleName} name="vehicleName" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-square"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Vehicle No" value={values.vehicleNo} name="vehicleNo" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-user"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Depot Name" value={values.depot} name="depot" onChange={handleChange}/>
              </div>
              <div className="form-group input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-mobile-alt"></i>
                      </div>
                  </div>
              <InputWrapper className="form-control" required placeholder="Enter Depot Contact No" value={values.depotContactNo} name="depotContactNo" onChange={handleChange}/>
              </div>
              <div className="form-group">
                  <input type="submit" value={props.id ==="" ? "Save" : "Update"} className="btn btn-primary btn-block"/>
              </div>
           
            </Form>
            </div>
       </>
     );
}
 
export default AddCTBVehicleForm;