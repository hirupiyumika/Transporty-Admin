import React, { useState,useContext } from "react";
import AddCTBVehicleForm from "./AddCTBVehicleForm";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';

const CTBVehiclePage = () => {
    const {ctbVehicles, onDeleteCTBVehicle } = useContext(ServiceContext);
var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
    <div className="col-md-12 ">
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                CTB Vehicles
                
                </center>
                </h2>
          
        <Wrapper className ="row">
            <div className="col-md-4">
                <AddCTBVehicleForm {...({id,ctbVehicles})}/>
            </div>
            <div className="col-md-8" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Vehicle Name</th>
                           <th>Vehicle No</th>
                           <th>Depot</th>
                           <th>Depot Contact Number</th>
                           <th>Edit/Delete</th>
                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(ctbVehicles).map(id => {
                               return <tr key={id}>
                                   <td>{ctbVehicles[id].vehicleName}</td>
                                   <td>{ctbVehicles[id].vehicleNo}</td>
                                   <td>{ctbVehicles[id].depot}</td>
                                   <td>{ctbVehicles[id].depotContactNo}</td>
                                   <td>
                                       <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                       <a className="btn text-danger" onClick={() => {onDeleteCTBVehicle(id)}}><i className="fas fa-trash-alt"></i></a>
                                   </td>
                               </tr>
                           })
                       }
                   </tbody>
               </table>
            </div>
        </Wrapper>
        </div>
        </div>
     );
}
 
export default CTBVehiclePage;