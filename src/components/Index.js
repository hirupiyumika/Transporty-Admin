import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdminLogin from './serviceManagement/admin/AdminAuthForm';

class Index extends Component {
    
    render() { 
        return ( 
            <>
              <AdminLogin/>

            </>
         );
    }
}
 
export default Index;