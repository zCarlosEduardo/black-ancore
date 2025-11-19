'use client';

import { memo, useCallback } from "react";

const CTAButton = memo(({
  text,
  extraClasses = "",
}: {
  text: string;
  extraClasses?: string;
}) => {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const element = document.querySelector("#formulario");
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <a
      href="#formulario"
      onClick={handleSmoothScroll}
      className={`bg-red-600 hover:bg-red-700 text-white font-bold py-8 rounded-full transition-colors text-lg inline-block text-center ${extraClasses}`}
    >
      {text}
    </a>
  );
});

CTAButton.displayName = "CTAButton";

export default CTAButton;