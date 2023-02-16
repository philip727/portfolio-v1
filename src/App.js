import "./App.css";
import "./styles/DarkTheme.css"
import "./styles/LightTheme.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/pages/Home";
import Navbar from "./componenets/layout/Navbar";

function App() {
    return( 
        <BrowserRouter>
            <header>
                <Navbar pages={[
                    {
                        name: "Home", 
                        link: "/"
                    },
                    {
                        name: "Projects",
                        link: "/projects"
                    },
                    {
                        name: "Blog",
                        link: "/blog"
                    },
                    ]} />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/blogs" element={<Blog />} /> */}
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
