import { Home, Project, About, Experience, Blog, Resume } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorHandler/error-boundary'
import PageFallback from "./ErrorHandler/page-fallback";
import { Navbar } from "./section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="projects" element={<ErrorBoundary><Project /></ErrorBoundary>} />
          <Route path="about" element={<ErrorBoundary><About /></ErrorBoundary>} />
          <Route path="blog" element={<ErrorBoundary><Blog /></ErrorBoundary>} />
          <Route path="experience" element={<ErrorBoundary><Experience /></ErrorBoundary>} />
          <Route path="resume" element={<ErrorBoundary><Resume /></ErrorBoundary>} />
          <Route path="*" element={<ErrorBoundary><PageFallback tag="page"/></ErrorBoundary>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
