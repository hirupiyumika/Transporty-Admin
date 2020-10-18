import React, { useState,useContext } from "react";
import {  ServiceContext } from "../../../context/ServiceContext";
import AddCTBTimetableForm from "./AddCTBTimetable";
import {Wrapper} from '../../common/CommonStyle';

const CTBTimetablePage = () => {
    const {CTBTimetables, onDeleteCTBTimetable } = useContext(ServiceContext);
var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
    <div className="col-md-12">
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                CTB Timetables
                
                </center>
                </h2>
          
        <Wrapper className ="row">
            <div className="col-md-4">
                <AddCTBTimetableForm {...({id,CTBTimetables})}/>
            </div>
            <div className="col-md-8" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Vehicle No</th>
                           <th>Driver Name</th>
                           <th>Route No</th>
                           <th>Day</th>
                           <th>Start Time</th>
                           <th>End Time</th>
                           <th>Edit/Delete</th>
                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(CTBTimetables).map(id => {
                               return <tr key={id}>
                                   <td>{CTBTimetables[id].vehicleNo}</td>
                                   <td>{CTBTimetables[id].driverName}</td>
                                   <td>{CTBTimetables[id].routeNo}</td>
                                   <td>{CTBTimetables[id].day}</td>
                                   <td>{CTBTimetables[id].startTime}</td>
                                   <td>{CTBTimetables[id].endTime}</td>
                                   <td>
                                       <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                       <a className="btn text-danger" onClick={() => {onDeleteCTBTimetable(id)}}><i className="fas fa-trash-alt"></i></a>
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
 
export default CTBTimetablePage;