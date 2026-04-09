import { useCallback, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';

import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
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

      <div id="toast" className={toastVisible ? 'toast-visible' : ''}>
        ✓ Tin nhắn đã gửi thành công!
      </div>
    </>
  );
}
