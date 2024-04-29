import './App.css'
import Layout from "./components/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
