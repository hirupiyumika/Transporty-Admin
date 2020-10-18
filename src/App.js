import React,{useContext} from "react";
import "./App.css";
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/common/Navbar";
import {  ServiceContext } from "./context/ServiceContext";
import {Nav} from 'react-bootstrap'

const App = () =>{
  const {admin} = useContext(ServiceContext);
  return( 
    <>
    {admin ?(
  <NavBar/>
    ):(<Nav></Nav>)}
  <AppRouter />,
  </>
  );
}

export default App;
