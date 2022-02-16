import React from 'react'
import './menu-style.css'
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter as Router, Switch, Route, NavLink,} from 'react-router-dom'

function Menu (){
    return(

            <Router>
                <section id="menu">
                    <NavLink className="link" to="/Home">Домой</NavLink>
                    <NavLink className="link"  to="/About">О магазине</NavLink>

                <Switch>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/About" component={About}/>

                   </Switch>
                </section>
            </Router>






    );

}
export default Menu;