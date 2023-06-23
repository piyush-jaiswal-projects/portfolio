import { Home, Project, About, Experience, Blog, Resume, ProjectPage, NotePage, CertificatePage, BlogPage } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorHandler/error-boundary'
import PageFallback from "./ErrorHandler/page-fallback";
import { Navbar, Footer } from "./section";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="blog" element={<ErrorBoundary><Blog /></ErrorBoundary>} />
          <Route path="projects/:projectId" element={<ErrorBoundary><ProjectPage /></ErrorBoundary>} />
          <Route path="notes/:notesId" element={<ErrorBoundary><NotePage /></ErrorBoundary>} />
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
