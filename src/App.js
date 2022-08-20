
import React, { useState } from "react";
import EventGrid from "./components/event-grid/event-grid.component";
import NavBar from "./components/navbar/navbar.component";
import "./App.css";
import SignUpWalletConnect from "./components/signup-walletconnect/signup-walletconnect.component";
import SignUp from "./pages/signup.pages";
import BackDrop from "./components/backdrop/backdrop.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const [user, setUser] = useState({});
  const [backdropVisibility, setBackdropVisibility] = useState("visible");

  function removeBackDrop() {
    console.log("removeBackground triggered");
    //setBackdropVisibility("hidden");
  }

  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <div>
              {/* <BackDrop visibility="visible" /> */}
              <EventGrid/>
            </div>
          } />
          <Route path='/signup' element={
            <div>
              <SignUp/>
              </div>
            } />
            <Route path='/signup/wallet-connect' element={
            <div>
              <SignUpWalletConnect/>
              </div>
            } />
        </Routes>
    </Router>
  )
}

export default App;