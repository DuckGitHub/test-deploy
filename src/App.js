import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // npm i react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // npm i bootstrap
import "./App.css";

//npx create-react-app.

import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route exact path="/test-deploy/" component={NotesList} />
        <Route path="/test-deploy/edit/:id" component={CreateNote} />
        <Route path="/test-deploy/create" component={CreateNote} />
        <Route path="/test-deploy/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
