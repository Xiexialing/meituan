import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import Home from '../containers/home/Home';

class index extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <Route path="home" component={Home}/>
        </Route>
      </Router>
    )
  }
}
export default index;