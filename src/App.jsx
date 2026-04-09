import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';

import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { BadgeDetail } from './pages/BadgeDetail';
import { usePageEffects } from './usePageEffects';

export default function App() {
  const [toastVisible, setToastVisible] = useState(false);
  usePageEffects();

  const onSendMessage = useCallback(() => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 3000);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Hero />
              <hr className="s-divider" />
              <About />
              <hr className="s-divider" />
              <Experience />
              <hr className="s-divider" />
              <Projects />
              <hr className="s-divider" />
              <Contact onSendMessage={onSendMessage} />
              <Footer />
            </>
          )}
        />
        <Route path="/badge/:badgeId" element={<BadgeDetail />} />
      </Routes>

      <div id="toast" className={toastVisible ? 'toast-visible' : ''}>
        ✓ Tin nhắn đã gửi thành công!
      </div>
    </>
  );
}
