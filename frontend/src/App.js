import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AddTodo } from "./components/AddTodo";
import { ShowTodo } from "./components/ShowTodo";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-secondary">
        <a href="/todos" className="navbar-brand">
          Todo
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/todos"} className="nav-link">
              Todo List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              AddTodo
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/todos"]} component={TodoList} />
          <Route exact path="/add" component={AddTodo} />
          <Route path="/todos/:id" component={ShowTodo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
