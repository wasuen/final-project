import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Navigation from '../Navigation'
import HomePage from '../Home'

import * as ROUTES from '../../constants/routes'

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = {ROUTES.HOME} render ={() => <HomePage />} />
                </Switch>
            </div>
        )
    }
}

export default App