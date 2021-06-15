import './App.css';
import Home from './views/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Includes from './views/includes';
import NotIncludes from './views/notIncludes'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/includes">
            <Includes />
          </Route>
          <Route path="/notincludes">
            <NotIncludes/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
