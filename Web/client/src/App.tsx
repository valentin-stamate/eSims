import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import SignUp from "./components/Signup/Signup";
import Home from './components/Home/Home';
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import { Provider } from 'react-redux';
import store from './Redux/store'
import Students from "./components/Students/Students";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" exact component={Root}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/students" exact component={Students} />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
