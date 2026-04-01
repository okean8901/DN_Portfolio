import { useEffect } from 'react';

export function usePageEffects() {
  useEffect(() => {
    const nav = document.getElementById('navbar');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);

    const revEls = document.querySelectorAll('.reveal');
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          e.target.querySelectorAll('.bar-fill').forEach((b) => {
            setTimeout(() => {
              const w = b.dataset.w;
              if (w) b.style.width = `${w}%`;
            }, 200);
          });
          ro.unobserve(e.target);
        });
      },
      { threshold: 0.1 },
    );
    revEls.forEach((el) => ro.observe(el));

    const barObservers = [];
    document.querySelectorAll('.bar-fill').forEach((b) => {
      const obs = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              const w = b.dataset.w;
              if (w) b.style.width = `${w}%`;
              obs.disconnect();
            }
          });
        },
        { threshold: 0.5 },
      );
      obs.observe(b);
      barObservers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      ro.disconnect();
      barObservers.forEach((o) => o.disconnect());
    };
  }, []);
}
