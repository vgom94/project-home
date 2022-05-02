import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import MovimentDetails from './MovimentDetails';
import Navbar from './Navbar';
import Tricount from './Tricount';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Project - Home</h1>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/moviments">
              <Tricount />
            </Route>
            <Route path="/moviments/:id">
              <MovimentDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
