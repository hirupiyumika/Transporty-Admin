import React, { useState,useContext } from "react";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';

const PrivateDrivers = () => {
    const {privateDrivers, onDeletePrivateDriver } = useContext(ServiceContext);
// var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
    <div className="col-md-12">
          
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                Private Bus Drivers
                
                </center>
                </h2>
          
        <Wrapper className ="row">
            <div className="col-md-1">
                {/* <AddDriverForm {...({id,ctbDrivers})}/> */}
            </div>
            <div className="col-md-10" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>First Name</th>
                           <th>Last Name</th>
                           <th>NIC</th>
                           <th>E-mail</th>
                           <th>Contact Number</th>
                           <th>Delete</th>
                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(privateDrivers).map(id => {
                               return <tr key={id}>
                                   <td>{privateDrivers[id].fName}</td>
                                   <td>{privateDrivers[id].lname}</td>
                                   <td>{privateDrivers[id].nic}</td>
                                   <td>{privateDrivers[id].email}</td>
                                   <td>{privateDrivers[id].contactNo}</td>
                                   <td>
                                       {/* <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a> */}
                                       <a className="btn text-danger" onClick={() => {onDeletePrivateDriver(id)}}><i className="fas fa-trash-alt"></i></a>
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
 
export default PrivateDrivers;