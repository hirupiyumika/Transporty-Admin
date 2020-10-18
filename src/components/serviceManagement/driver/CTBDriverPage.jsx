import React, { useState,useContext } from "react";
import AddDriverForm from "./AddCTBDriverForm";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';

const CTBDriverPage = () => {
    const {ctbDrivers, onDeleteCTBDriver } = useContext(ServiceContext);
var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
    <div className="col-md-12">
          
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                CTB Drivers
                
                </center>
                </h2>
          
        <Wrapper className ="row">
            <div className="col-md-4">
                <AddDriverForm {...({id,ctbDrivers})}/>
            </div>
            <div className="col-md-8" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Driver Name</th>
                           <th>NIC</th>
                           <th>Email</th>
                           <th>Contact Number</th>
                           <th>Edit/Delete</th>
                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(ctbDrivers).map(id => {
                               return <tr key={id}>
                                   <td>{ctbDrivers[id].driverName}</td>
                                   <td>{ctbDrivers[id].NIC}</td>
                                   <td>{ctbDrivers[id].email}</td>
                                   <td>{ctbDrivers[id].contactNo}</td>
                                   <td>
                                       <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                       <a className="btn text-danger" onClick={() => {onDeleteCTBDriver(id)}}><i className="fas fa-trash-alt"></i></a>
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
 
export default CTBDriverPage;