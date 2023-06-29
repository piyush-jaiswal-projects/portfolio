import { Home, Project, Blog, ProjectPage, CertificatePage, BlogPage } from "./pages";
import { Footer } from "./section";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorHandler/error-boundary'
import PageFallback from "./ErrorHandler/page-fallback";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="blog" element={<ErrorBoundary><Blog /></ErrorBoundary>} />
          <Route path="projects" element={<ErrorBoundary><Project /></ErrorBoundary>} />
          <Route path="projects/:projectId" element={<ErrorBoundary><ProjectPage /></ErrorBoundary>} />
          <Route path="certificates/:certId" element={<ErrorBoundary><CertificatePage /></ErrorBoundary>} />
          <Route path="blogs/:blogId" element={<ErrorBoundary><BlogPage /></ErrorBoundary>} />
          <Route path="*" element={<ErrorBoundary><PageFallback tag="page"/></ErrorBoundary>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
