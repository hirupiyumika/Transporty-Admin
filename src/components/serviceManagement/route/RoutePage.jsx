import React, { useState,useContext } from "react";
import AddRouteForm from "./AddRouteForm";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';


const RoutePage = () => {
    const {routes, onDeleteRoute } = useContext(ServiceContext);
var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
    <div className="col-md-12">
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                Routes
                </center>
                </h2>
          
        <Wrapper className ="row ">
            <div className="col-md-4">
                <AddRouteForm {...({id,routes})}/>
            </div>
            <div className="col-md-8" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Route No</th>
                           <th>Starting Point</th>
                           <th>Locations</th>
                           <th>Destination</th>
                           <th>Edit/Delete</th>

                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           Object.keys(routes).map(id => {
                               return <tr key={id}>
                                   <td>{routes[id].routeNo}</td>
                                   <td>{routes[id].startingPoint}</td>
                                   <td>{(routes[id].locations[1])},{(routes[id].locations[2])},{(routes[id].locations[3])}</td>
                                   <td>{routes[id].destination}</td>
                                   <td>
                                       <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                       <a className="btn text-danger" onClick={() => {onDeleteRoute (id)}}><i className="fas fa-trash-alt"></i></a>
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
 
export default RoutePage;