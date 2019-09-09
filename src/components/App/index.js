import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Navigation from '../Navigation'
import SearchContributions from '../SearchContributions'
import SearchDisbursements from '../SearchDisbursements'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import SignOut from '../SignOut'
import Donut from '../Donut'
import Home from '../Home'
import * as ROUTES from '../../constants/routes'


class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = {ROUTES.SEARCH_CONTRIBUTIONS} render ={() => <SearchContributions />} />
                    <Route exact path = {ROUTES.SEARCH_DISBURSEMENTS} render ={() => <SearchDisbursements />} />
                    <Route exact path = {ROUTES.SIGN_UP} render ={() => <SignUp />} />
                    <Route exact path = {ROUTES.SIGN_IN} render ={() => <SignIn />} />
                    <Route exact path = {ROUTES.SIGN_OUT} render ={() => <SignOut />} />
                    <Route exact path = {ROUTES.DONUT} render = {() => <Donut />} />
                    <Route exact path = {ROUTES.HOME} render = {() => <Home />} />
                </Switch>
            </div>
        )
    }
}

export default App