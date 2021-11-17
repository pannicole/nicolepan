import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Me from './components/Me';
import Face from './components/Face';
import Pen from './components/Pen';
import Camera from './components/Camera';
import Projects from './components/Projects';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Me} />
          <Route exact path="/lifestyle" component={Face} />
          <Route exact path="/art" component={Pen} />
          <Route exact path="/travel" component={Camera} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    )
  }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
