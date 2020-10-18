import React, { useState,useContext } from "react";
import {  ServiceContext } from "../../../context/ServiceContext";
import {Wrapper} from '../../common/CommonStyle';
import Moment from "react-moment";

const PaymentPage = () => {
    const {payment} = useContext(ServiceContext);
// var [id,setId] = useState("")
return ( 
    <div className="row no-gutters">
    <div className="col-md-12">
            <h2 className="display-5 " style={{  
    fontStyle: "oblique", padding:"3rem",
    color: "rgb(48, 48, 146)"}}> 
                <center>
                Payments
                </center>
                </h2>
          
        <Wrapper className ="row ">
            <div className="col-md-1">
                {/* <AddRouteForm {...({id,routes})}/> */}
            </div>
            <div className="col-md-10" >
               <table className="table table-stripped responsive" >
                   <thead className="thead-light">
                       <tr>
                           <th>Date</th>
                           <th>Time</th>
                           <th>Passenger</th>
                           <th>Distance</th>
                           <th>Route</th>
                           <th>Cost</th>

                       </tr>
                   </thead>
                   <tbody style={{color:"white"}}>
                       {
                           payment.map((fares,index) => {
                               return <tr key={index}>
                                   <td><Moment format="DD/MM/YYYY ">{fares.date}</Moment></td>
                                   <td><Moment format="hh:mm:ss">{fares.date}</Moment></td>
                                   <td>{fares.passenger}</td>
                                   <td>{fares.distance} km</td>
                                   <td>{fares.route}</td>
                                   <td>Rs.{fares.cost}.00</td>
                                   {/* <td>
                                       <a className="btn text-primary" onClick={()=> {setId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                       <a className="btn text-danger" onClick={() => {onDeleteRoute (id)}}><i className="fas fa-trash-alt"></i></a>
                                   </td> */}
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
 
export default PaymentPage;