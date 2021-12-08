import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import SignIn from "../signIn/Sign";
import MainLayout from '../mainLayout/MainLayout';


class FirstPage extends Component{
    render(){
    return(
        <Switch>
            <Route exact path="/signin" component = {() =><SignIn/>}/>
            <Route path="/dashboard" component = {() => <MainLayout/>}/>
            <Redirect to="/signin" />            
        </Switch>
        
    );
    }

}

export default FirstPage;