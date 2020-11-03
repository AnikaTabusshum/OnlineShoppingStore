
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import { Unsubscribe } from '@material-ui/icons';
import {React,useEffect} from "react";

function App() {
  const [{user }, dispatch] = useStateValue();
  //useEffect <<<<<<< POWERFUL
  //Piece of code which runs based on a given condition
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
 <div className="App">
   <Switch>
     <Route path="/checkout">
       <Header />
       <Checkout />
     </Route>
     <Route path="/login">
       <Login />
     </Route>
     <Route path="/">
       <Header />
       <Home />
       
     </Route>
   </Switch>
    </div>
    </Router>
   
  );
}

export default App;
