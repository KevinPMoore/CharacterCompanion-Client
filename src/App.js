import React from 'react';
import Landing from './routes/landing/Landing';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Home from './routes/home/Home';
import './App.css';
import { Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  state = {
    user: {
      username: null,
      characters: [],
      notes: []
    }
  };

  //Switch needs private and public routes
  render() {
    return(
      <div
        className='App'
      >
        <header>

        </header>
        <main>
          <Switch>
            <Route
              exact
              path={'/'}
              component={Landing}
            />

            <Route
              exact
              path={'/login'}
              component={Login}
            />

            <Route
              exact
              path={'/register'}
              component={Register}
            />

            <Route
              exact
              path={'/home'}
              render={(routeProps) => (<Home {...routeProps} user={this.state.user} />)}
            />

          </Switch>
        </main>
      </div>
    );
  };
};