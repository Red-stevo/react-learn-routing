import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<h1>Hello index page</h1>}>
      </Route>
    </Routes>
  )
}

export default App
