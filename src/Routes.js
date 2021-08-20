import React, { Component } from 'react';
import { Router, Switch, ROute } from 'react-router-dom';

import Locations from './Locations';
import history from './history';

export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path ="/Locations" exact component={Locations} />
                </Switch>
            </Router>
        )
    }
}