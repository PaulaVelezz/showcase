import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from './layout/MainLayout';
import Works from './pages/Works';
import Contact from './pages/Contact';
import ProjectDetailsPage from "./components/ProjectDetails/ProjectDetailsPage";

const router = createBrowserRouter([
  {
    children: [
      { 
        path:'/',
        element: <MainLayout />,
      },
      {
        path:'/works',
        element: <Works />,
      },
      {
        path:'/contact',
        element: <Contact />,
      },
      {
        path:'/project/:title',
        element: <ProjectDetailsPage />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;