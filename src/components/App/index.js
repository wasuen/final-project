import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Navigation from '../Navigation'
import SearchContributions from '../SearchContributions'
import SearchDisbursements from '../SearchDisbursements'
import Donut from '../Donut'
import * as ROUTES from '../../constants/routes'


class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = {ROUTES.SEARCHCONTRIBUTIONS} render ={() => <SearchContributions />} />
                    <Route exact path = {ROUTES.SEARCHDISBURSEMENTS} render ={() => <SearchDisbursements />} />
                    <Route exact path = {ROUTES.DONUT} render = {() => <Donut />} />
                </Switch>
            </div>
        )
    }
}

export default App