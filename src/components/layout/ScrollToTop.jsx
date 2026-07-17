import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the document on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component renders nothing to the DOM
}