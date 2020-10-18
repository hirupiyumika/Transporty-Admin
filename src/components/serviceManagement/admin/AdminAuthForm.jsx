import React, { useState, useEffect,useContext } from "react";
import {Form} from 'react-bootstrap'
import {Wrapper,InputWrapper} from '../../common/CommonStyle'
import firebaseApp from "../../../firebase/firebase";
const AdminAuthForm = () => {
var [user,setUser] = useState("");
var [email,setEmail] = useState("");
var [password,setPassword] = useState("");
var [Error,setError] = useState("");
var [hasAccount,setHasAccount] = useState(false);

const clearErrors = () =>{
setError("");
}

const clearInputs =()=>{
setEmail("");
setPassword("");
}

const handleLogin =() =>{
    clearErrors();
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .then(function () {localStorage.setItem("username", email);})
        .then(function () {
        window.location = "/ctb-time";
    })
    .catch((err)=>{
        console.log("handleLogin -> err.message", err.message)
        switch(err.code){
            case "auth/invalid-email":
                case "auth/user-disabled":
                    case "auth/user-not-found":
                        case "auth/wrong-password":
                            setError(err.message);
                            break;
                        }
                    })
}

const handleSignUp =() =>{
    clearErrors();
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
    .then(function () {localStorage.setItem("username", email);})
    .then(function () {
        window.location = "/ctb-time";
    })
    .catch((err)=>{
        switch(err.code){
            case "auth/invalid-already-in-use":
            case "auth/invalid-email":
            case "auth/user-not-found":
            case "auth/weak-password":
                setError(err.message);
        }
    })
}



const AuthListener = () =>{
firebaseApp.auth().onAuthStateChanged((user) => {
if(user){
    clearInputs();
    setUser(user);
}else{
    setUser("")
}
});
}

useEffect(() =>{
AuthListener();
},[]
)
    return (  
        <>
        <Wrapper style={{
                  marginTop: "15%",
                  width: "30%",
                  marginLeft: "65%",
                }}>
                     <center>
                  <h2>{hasAccount ? ("Admin Sign In"):("Admin Sign Up")} </h2>
                </center>
        {/* <Form autoComplete="off"> */}
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
            <InputWrapper className="form-control" required placeholder="Enter E-mail" value={email} name="routeNo" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-key"></i>
                    </div>
                </div>
            <InputWrapper type="password" required className="form-control" placeholder="Enter Password" value={password} name="startingPoint" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {Error && <div className="alert alert-danger">{Error}</div>}
              <div className="form-group">
                  {hasAccount ? (
                      <><input type="submit" value="Sign in" className="btn btn-primary btn-block" onClick={handleLogin}/>
                       <p>Don't have an Account ?
                           <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span>
                        </p> 
                        </>
                  ) :(
                    <><input type="submit" value="Sign up" className="btn btn-primary btn-block" onClick={handleSignUp} />
                    <p>Don't have an Account ? 
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span>
                     </p> 
                     </>
                  )}
              </div>
          {/* </Form> */}
          </Wrapper>
     </>
    );
}
 
export default AdminAuthForm;