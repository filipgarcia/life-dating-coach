import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './hooks/useTranslation';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apply from './pages/Apply';
import About from './pages/About';
import Services from './pages/Services';
import Results from './pages/Results';
import Approach from './pages/Approach';
import Resources from './pages/Resources';

const MainLayout = () => {
  const location = useLocation();

  // Effect to scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sv" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/sv/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/sv/services" element={<Services />} />

          <Route path="/results" element={<Results />} />
          <Route path="/sv/results" element={<Results />} />

          <Route path="/approach" element={<Approach />} />
          <Route path="/sv/approach" element={<Approach />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/sv/resources" element={<Resources />} />

          <Route path="/apply" element={<Apply />} />
          <Route path="/sv/apply" element={<Apply />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
