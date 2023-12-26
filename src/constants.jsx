import About from "./components/About";
import Events from "./components/Events";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Team from "./components/Team";

export const routes = [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/team',
        element: <Team/>,
    },
    {
        path: '/events',
        element: <Events/>,
    },
    {
        path: '/leaderboard',
        element: <Leaderboard/>,
    },
];