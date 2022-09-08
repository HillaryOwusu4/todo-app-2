
import './App.css';
import HomePge from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateTodo from './components/create';
import TodoDetails from './components/TodoDetails';

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen ">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePge />
          </Route>
          <Route path="/create">
            <CreateTodo />
          </Route>
          <Route path="/blogs/:id">
            <TodoDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
