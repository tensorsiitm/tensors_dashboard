import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";


import SignIn from "../signIn/Sign";
import MainLayout from '../mainLayout/MainLayout';


class FirstPage extends Component{
    render(){
    return(
        <Switch>
            <Route exact path="/signIn" component = {() =><SignIn/>}/>
            <Route exact path="/dashboard" component = {() => <MainLayout/>}/>
            
        </Switch>
        
    );
    }

}

export default FirstPage;