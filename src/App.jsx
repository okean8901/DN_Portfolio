import { useCallback, useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { usePageEffects } from './usePageEffects';

const LINKEDIN_BADGE_SCRIPT = 'https://platform.linkedin.com/badges/js/profile.js';

export default function App() {
  const [toastVisible, setToastVisible] = useState(false);
  usePageEffects();

  useEffect(() => {
    if (document.querySelector(`script[src="${LINKEDIN_BADGE_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = LINKEDIN_BADGE_SCRIPT;
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  const onSendMessage = useCallback(() => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 3000);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <hr className="s-divider" />
      <About />
      <hr className="s-divider" />
      <Expertise />
      <hr className="s-divider" />
      <Experience />
      <hr className="s-divider" />
      <Projects />
      <hr className="s-divider" />
      <Contact onSendMessage={onSendMessage} />
      <Footer />

      <div id="toast" className={toastVisible ? 'toast-visible' : ''}>
        ✓ Tin nhắn đã gửi thành công!
      </div>
    </>
  );
}
