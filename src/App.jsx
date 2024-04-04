import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from './layout/MainLayout';
import Works from './pages/Works';
import About from './pages/About'; 
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    children: [
      { 
        path:'/',
        element: <MainLayout />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/works',
        element: <Works />,
      },
      {
        path:'/resume',
        element: <Resume />,
      },
      {
        path:'/contact',
        element: <Contact />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;