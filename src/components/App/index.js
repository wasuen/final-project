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
import TextFields from '../Comments'
import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'


class App extends Component {
    state = {
        authUser: null
      }
    
      componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.props.firebase.user(authUser.uid).get()
                .then(snapShot => this.setState({ authUser: snapShot.data() }))
            : this.setState({ authUser: null })
        })
      }

    render() {
        return (
            <div>
                <Navigation authUser={this.state.authUser}/>
                <Switch>
                    <Route exact path = {ROUTES.SEARCH_CONTRIBUTIONS} render ={() => <SearchContributions authUser={this.state.authUser} />} />
                    <Route exact path = {ROUTES.SEARCH_DISBURSEMENTS} render ={() => <SearchDisbursements authUser={this.state.authUser} />} />
                    <Route exact path = {ROUTES.SIGN_UP} render ={() => <SignUp />} />
                    <Route exact path = {ROUTES.SIGN_IN} render ={() => <SignIn />} />
                    <Route exact path = {ROUTES.SIGN_OUT} render ={() => <SignOut />} />
                    <Route exact path = {ROUTES.DONUT} render = {() => <Donut />} />
                    <Route exact path = {ROUTES.HOME} render = {() => <Home />} />
                    <Route exact path = {ROUTES.COMMENTS} render={() => <TextFields authUser={this.state.authUser}/>} />
                </Switch>
            </div>
        )
    }
}

export default withFirebase(App)