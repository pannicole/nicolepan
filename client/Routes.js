import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Me from './components/Me';
import Face from './components/Face';
import Pen from './components/Pen';
import Camera from './components/Camera';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Me} />
          <Route exact path="/lifestyle" component={Face} />
          <Route exact path="/art" component={Pen} />
          <Route exact path="/travel" component={Camera} />
        </Switch>
      </div>
    )
  }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
