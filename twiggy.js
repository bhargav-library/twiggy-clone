import React from "react";
import ReactDOM from "react-dom/client";



const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
               <img className="logo"
                 src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
              />
              
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Help</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>
    )
}





const AppLayout = ()=>{
    return(
        <div className ="app">
         <Header/>
         
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);