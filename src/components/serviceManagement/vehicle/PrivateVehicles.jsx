import React, { useState,useContext } from "react";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';

const PrivateVehicles = () => {
    const {privateVehicles, onDeletePrivateVehicle } = useContext(ServiceContext);
return ( 
    <div className="row no-gutters">
    <div className="col-md-12">
          
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                Private Vehicles
                
                </center>
                </h2>
          
        <div className ="row">
            <div className="col-md-3">
            </div>
            <Wrapper className="col-md-5" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Vehicle No</th>
                           <th>Delete</th>
                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(privateVehicles).map(id => {
                               return <tr key={id}>
                                   <td>{privateVehicles[id].vehicleNo}</td>
                                   <td>
                                       <a className="btn text-danger" onClick={() => {onDeletePrivateVehicle(id)}}><i className="fas fa-trash-alt"></i></a>
                                   </td>
                               </tr>
                           })
                       }
                   </tbody>
               </table>
            </Wrapper>
        </div>
        </div>
        </div>
     );
}
 
export default PrivateVehicles;