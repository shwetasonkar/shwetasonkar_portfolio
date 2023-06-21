import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate((location) => {
      if (location.action === 'POP') {
        // Scroll to top only for navigation actions, not when using browser back/forward buttons
        window.scrollTo(0, 0);
      }
    });

    return () => {
      unlisten();
    };
  }, [navigate]);

  return null;
}

export default ScrollToTop;
