import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import SignUp from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/signup" exact component={SignUp}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
