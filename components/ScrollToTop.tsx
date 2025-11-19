'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {

    window.scrollTo(0, 0);
    
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}