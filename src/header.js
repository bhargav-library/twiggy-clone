import { logo_url } from "./utilities.js/constants";
const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
               <img className="logo"
                 
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
};
export default Header;