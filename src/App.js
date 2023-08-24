import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Form from "./components/Form";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Prem");
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUserName }}>
          <Router>
            <div>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/form'>Form</Link>
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
              <Route path='/form' element={<Form />} />
              <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
