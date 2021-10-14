import React,{useState} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import EduPage from "../eduPage/EduPage";
import HomePage from "../homePage/HomePage";
import PrPage from "../prPage/PrPage";

import "./MainLayout.css"

function MainLayout() {
      const [sidebarIsOpen, setSidebarOpen] = useState(true);
      const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
      <>
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="wrapper">         
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Container fluid className={`content ${sidebarIsOpen ? "is-open" : ""}`}>
              <Switch>
                <Route exact path="/home" component={() => <HomePage />} />
                <Route exact path="/pr" component={() => <PrPage />} />
                <Route exact path="/edu" component={() => <EduPage />} />
                <Redirect to="/home" />
              </Switch>
            </Container>
    </div>
    </>
  );
}

export default MainLayout;
