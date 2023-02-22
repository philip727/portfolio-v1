// CSS
import "./App.css";
import "./styles/DarkTheme.css"
import "./styles/LightTheme.css"

// React
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// Pages
import Home from "./componenets/pages/Home/Home";
import Projects from "./componenets/pages/Projects/Projects"

// Layouts
import Navbar from "./componenets/layout/Navbar/Navbar";
import RootLayout from "./componenets/layout/RootLayout"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
        </Route>
    )
)


function App() {
    return(        
        <RouterProvider router={router} />
    );
}

export default App;
