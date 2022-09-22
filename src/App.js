import { Component } from "react";
import { Header } from "./components/";
import resumeData from "./resumeData.json";
import { Home, Contact, About } from "./pages";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  Routes,
} from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="background2">
        <div className="background">
          <Header data={resumeData} />
          <Routes>
            <Route path="/" element={<Home data={resumeData} />} />
            <Route path="/contact" element={<Contact data={resumeData} />} />
            <Route path="/about" element={<About data={resumeData} />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
