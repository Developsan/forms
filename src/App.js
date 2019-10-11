import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import EntryNote from "./_components/EntryNote";
import ExitNote from "./_components/ExitNote";
import Navigation from "./_components/navigation";
import List from "./_components/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route path="/exit" component={ExitNote} />
        <Route path="/entry" component={EntryNote} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}

export default App;
