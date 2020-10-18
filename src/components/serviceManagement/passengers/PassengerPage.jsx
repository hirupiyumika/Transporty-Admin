import React, { useState,useContext } from "react";
import AddPassengerForm from "./AddPassengerForm";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';

const PassengerPage = () => {
    const {passengers, onDeletePassenger } = useContext(ServiceContext);
var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
        <div className="col-md-12">
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                Passengers
                </center>
                </h2>
        <Wrapper className ="row">
            <div className="col-md-4">
                <AddPassengerForm {...({id,passengers})}/>
            </div>
            <div className="col-md-8" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Name</th>
                           {/* <th>Last Name</th> */}
                           <th>NIC</th>
                           <th>E-mail</th>
                           <th>Phone Number</th>
                           <th>Username</th>
                           <th>Balance</th>
                           <th>Edit/Delete</th>
                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(passengers).map(id => {
                               return <tr key={id}>
                                   <td>{passengers[id].firstName}</td>
                                   {/* <td>{passengers[id].lastName}</td> */}
                                   <td>{passengers[id].NIC}</td>
                                   <td>{passengers[id].email}</td>
                                   <td>{passengers[id].phoneNumber}</td>
                                   <td>{passengers[id].username}</td>
                                   <td>{passengers[id].balance}</td>
                                   <td>
                                       <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                       <a className="btn text-danger" onClick={() => {onDeletePassenger(id)}}><i className="fas fa-trash-alt"></i></a>
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
 
export default PassengerPage;