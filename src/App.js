import logo from './logo.svg';
import './App.css';
import Home from './components/first/home';
import Form from './components/second/form';

import { Route, Switch, withRouter, Redirect,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route  path="/ui/home/" component={Home} />
    <Route exact path="/ui/form/" component={Form} />
    <Redirect from="/" to="/ui/home/" />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
