"use client";

import Script from "next/script";

export default function PowerScript() {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Script
      src="https://resources.powercrm.com.br/assets/external/js/script.pwrcrm.js"
      strategy="lazyOnload"
      onError={(e) => {
        console.error('Erro ao carregar PowerCRM script:', e);
      }}
    />
  );
}