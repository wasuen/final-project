import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Navigation from '../Navigation'
import HomePage from '../SearchByCommittee'

import * as ROUTES from '../../constants/routes'
import SearchByCommittee from '../SearchByCommittee';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = {ROUTES.SEARCHBYCOMMITTEE} render ={() => <SearchByCommittee />} />
                </Switch>
            </div>
        )
    }
}

export default App