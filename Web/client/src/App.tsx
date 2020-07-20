import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SignUp from "./components/Signup/Signup";
import Home from './components/Home/Home';
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import { Provider } from 'react-redux';
import store from './Redux/store'
import Student from "./components/Student/Student";
import StudentDetails from "./components/Common/StudentDetails/StudentDetails";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Root}/>
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/student" exact component={Student} />
                <Route path="/student/details" exact component={StudentDetails} />
            </Switch>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
