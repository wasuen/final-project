import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Navigation from '../Navigation'
import SearchByCommittee from '../SearchByCommittee';
import SearchByCandidate from '../SearchByCandidate'
import * as ROUTES from '../../constants/routes'


class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = {ROUTES.SEARCHBYCANDIDATE} render ={() => <SearchByCandidate />} />
                </Switch>
            </div>
        )
    }
}

export default App