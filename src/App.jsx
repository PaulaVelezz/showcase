import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Contact from './pages/Contact';
import ProjectDetailsPage from "./components/ProjectDetails/ProjectDetailsPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<MainLayout />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/project/:title' element={<ProjectDetailsPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;