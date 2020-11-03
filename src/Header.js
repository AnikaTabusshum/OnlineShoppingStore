import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
function Header() {
    const [{basket, user}] = useStateValue(); 
    const login = () =>{
        if(user)
        {
            auth.signOut();
        };
    };

    console.log(basket);
    return (
        <nav className="header">
            {/*logo...*/}
            <Link to="/">
                 <img className="headerlogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/> 
            </Link>

            {/*search box and search icon..*/}
            <div className="headersearch">
            <input type="text" className="headersearchInput"/>
            <SearchIcon className="headersearchIcon"/>
            </div>

            {/*3 links...*/}
            <div className="headernav">
                {/*1st link..*/}
                <Link to={!user && "/login"} className="headerlink">
                    <div onClick={login} className="headeroption">
    <span className="headeroptionLineone">hello {user?.email}</span>
    <span className="headeroptionLinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                 </Link>
                 
                 {/*2nd link*/}
                 <Link to="/" className="headerlink">
                    <div className="headeroption">
                        <span className="headeroptionLineone">Returns</span>
                        <span className="headeroptionLinetwo">& Orders</span>
                    </div>
                 </Link>

                {/*3rd link..*/}
                 <Link to="/" className="headerlink">
                    <div className="headeroption">
                        <span className="headeroptionLineone">Your</span>
                        <span className="headeroptionLinetwo">Prime</span>
                    </div>
                 </Link>

                 {/*4th link adding basket with number*/}
                 <Link to="/checkout" className="headerlink">
                     <div className="headeroptionBasket">
                         {/*shopping basket icon*/}
                      <ShoppingBasketIcon />
    <span className="headeroptionLinetwo headerbasketCount">{basket?.length }</span>
                     
                     </div>
                 </Link>

            </div>
       

           
            
            
            
        </nav>
    )
}

export default Header
