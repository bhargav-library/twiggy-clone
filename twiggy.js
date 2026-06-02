import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/twiggy-logo.png";

const header =()=>{
    return(
        <div className="header">
            <div className="logo container">
              <img
              className="logo"
              src={logo} alt="Twiggy Logo"
              />
            </div>
            
        </div>
    )
}


const AppLayout = ()=>{
    return(
        <div className ="app">
         <header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);