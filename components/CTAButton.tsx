'use client';

export default function CTAButton({
  text,
  extraClasses = "",
}: {
  text: string;
  extraClasses?: string;
}) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    
    const element = document.querySelector("#formulario");
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <a
      href="#formulario"
      onClick={handleSmoothScroll}
      className={`bg-red-600 hover:bg-red-700 text-white font-bold py-8 rounded-full transition-colors text-lg inline-block text-center ${extraClasses}`}
    >
      {text}
    </a>
  );
}