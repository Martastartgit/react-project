import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import AllUsers from "./Components/All-users/AllUsers";
import Footer from "./Components/Footer/Footer";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router>
                <div className={'App'}>
                    <Header/>
                    <Switch>
                        <Route exact path={'/'} render={()=><HomePage/>}/>;
                        <Route path={'/user'} render={()=><AllUsers/>}/>;
                    </Switch>
                    <Footer/>
                </div>
            </Router>

        );
    }
}

export default App;