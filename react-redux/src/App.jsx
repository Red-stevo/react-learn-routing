import './App.css'
import PostsView from "./features/PostsView.jsx";
import PostInputForm from "./features/PostInputForm.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<><PostInputForm /> <PostsView/></>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
