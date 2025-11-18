"use client";

import Script from "next/script";

export default function PowerScript() {
  return (
    <Script
      src="https://resources.powercrm.com.br/assets/external/js/script.pwrcrm.js"
      strategy="afterInteractive"
    />
  );
}
