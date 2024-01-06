import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './constants';
import Root from './components/Root';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routes.map(route => ({ path: route.path, element: route.element })),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    
  );
  

}

export default App
