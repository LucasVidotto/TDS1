import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";

import SignIn from "./Components/Singin/index";
import SignUp from "./Components/Singup/Form";
import HeadersForm from './Components/FormTwo/index'

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <main className="content">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/cadastrar" component={SignUp} />
            <Route exact path="/formulario" component={HeadersForm} />
          </main>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
