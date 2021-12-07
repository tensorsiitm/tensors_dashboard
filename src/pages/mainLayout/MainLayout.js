import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import DesignTeam from "../designTeam/DesignTeam";
import EduTeam from "../eduTeam/EduTeam";
import HomePage from "../homePage/HomePage";
import JeePage from "../jeePage/JeePage";
import PrTeam from "../prTeam/PrTeam";
import WebOpsTeam from "../webOpsTeam/WebOpsTeam";
import SignIn from "../signIn/Sign";
import "./MainLayout.css";

/*This forms the basic layout of the webapp where the sidebar
 and navbar is inserted and routes for other pages are defined*/
class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarIsOpen: true,
    };
  }

 // function to display or remove sidebar from the screen
  toggleSidebar = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  render() {
    return (
      <>
        <Topbar toggleSidebar={this.toggleSidebar} />
        <div className="wrapper">
          <Sidebar
            toggle={this.toggleSidebar}
            isOpen={this.state.sidebarIsOpen}
          />
          <Container
            fluid
            className={`content ${this.state.sidebarIsOpen ? "is-open" : ""}`}
          >
            <Switch>
              <Route exact path="/dashboard/home" component={() => <HomePage />} />
              <Route exact path="/dashboard/pr" component={() => <PrTeam />} />
              <Route exact path="/dashboard/edu" component={() => <EduTeam />} />
              <Route exact path="/dashboard/design" component={() => <DesignTeam />} />
              <Route exact path="/dashboard/webops" component={() => <WebOpsTeam />} />
              <Route exact path="/dashboard/jee" component={() => <JeePage />} />
              <Route exact path="/dashboard/signIn" component={() => <SignIn />} />
              <Redirect to="/dashboard/home" />
            </Switch>
          </Container>
        </div>
      </>
    );
  }
}

export default MainLayout;
