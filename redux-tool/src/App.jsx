import './App.css'
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import HomeHeader from "./Containers/ProductContains/HomeHeader.jsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route index element={<HomeHeader />} >

              </Route>
          </Routes>
      </Router>
  );
}

export default App
