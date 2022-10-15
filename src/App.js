import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id">
            <CallPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
          <Route path="*"> 
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
