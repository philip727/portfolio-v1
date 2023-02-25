// CSS
import "./App.css";
import "./styles/DarkTheme.scss"
import "./styles/LightTheme.scss"

// React
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// Pages
import Home from "./componenets/pages/Home/Home";
import Projects from "./componenets/pages/Projects/Projects";
import NotFound from "./componenets/pages/NotFound/NotFound";
import SurvivalGame from "./componenets/pages/Projects/Survival-Game/SurvivalGame"

// Layouts
import RootLayout from "./componenets/layout/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="projects">
                <Route index element={<Projects />} />
                <Route path="survival-game" element={<SurvivalGame />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return(        
        <RouterProvider router={router} />
    );
}

export default App;
