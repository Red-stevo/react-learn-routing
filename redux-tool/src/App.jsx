import './App.css'
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import HomeHeader from "./Containers/ProductContains/HomeHeader.jsx";
import ProductsDisplay from "./Containers/ProductContains/ProductsDisplay.jsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path={"home"} element={<HomeHeader />} >
                <Route path={"shop"} element={<ProductsDisplay />}/>
              </Route>
          </Routes>
      </Router>
  );
}

export default App
