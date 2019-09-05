import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Navigation from '../Navigation'
import SearchByCandidate from '../SearchByCandidate'
import Donut from '../Donut'
import * as ROUTES from '../../constants/routes'


class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = {ROUTES.SEARCHBYCANDIDATE} render ={() => <SearchByCandidate />} />
                    <Route exact path = {ROUTES.DONUT} render = {() => <Donut />} />
                </Switch>
            </div>
        )
    }
}

export default App