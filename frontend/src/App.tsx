import './App.css'
import Layout from "./components/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
