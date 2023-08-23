import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Prem");
  return (
    <div className='App'>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <Routes>
            {/* <Route path='/' element={<Home userName={userName} />} /> */}
            <Route path='/' element={<Home />} />
            <Route
              path='/profile'
              // element={<Menu userName={userName} setUserName={setUserName} />}
              element={<Menu userName={userName} />}
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
