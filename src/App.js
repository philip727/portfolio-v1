// CSS
import "./App.css";
import "./styles/Styles.scss"

// React
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// Pages
import Home from "./componenets/pages/Home/Home";
import Projects from "./componenets/pages/Projects/Projects";
import NotFound from "./componenets/pages/NotFound/NotFound";
import Contact from './componenets/pages/Contact/Contact'

// Layouts
import RootLayout from "./componenets/layout/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="projects">
                <Route index element={<Projects />} />
            </Route>
            <Route path="contact" element= {<Contact />} />
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
