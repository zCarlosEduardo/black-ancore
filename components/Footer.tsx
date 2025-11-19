import { memo } from "react";

const FooterSection = memo(() => {
  return (
    <footer className="border-t-2 border-gray-600 mt-12 mb-32">
      <div className="container mx-auto py-6 px-4 text-center text-white flex flex-row justify-center items-center flex-wrap gap-12 text-sm pt-24">

        <address className="not-italic">
          Copyright © 2025 Ancore. Todos os direitos reservados.
        </address>
        
        <a
          href="https://ancore.app/assistencia-e-beneficios/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acesse as políticas de privacidade e termos de uso da Ancore"
        >
          Políticas de privacidade | Termos de uso
        </a>
        
        <div className="flex flex-row justify-center items-center gap-2 sm:flex-nowrap flex-wrap">
          Feito com carinho por{" "}
          <span className="text-red-600 flex gap-1 flex-wrap">
            <a 
              href="https://instagram.com/ahamagenciacriativa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visite o Instagram da Aha Agência Criativa"
            >
              @ahamagenciacriativa
            </a>
            <span aria-hidden="true">{" | "}</span>
            <a 
              href="https://instagram.com/opablodsg" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visite o Instagram de Pablo DSG"
            >
              @opablodsg
            </a>
            <span aria-hidden="true">{" | "}</span>
            <a
              href="https://www.linkedin.com/in/carlos-eduardo-3a1462292"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o LinkedIn de Carlos Eduardo"
            >
              Carlos Eduardo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
