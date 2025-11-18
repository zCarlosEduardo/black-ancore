"use client";

import { useEffect } from "react";
import PowerScript from "./PowerCRMFormScript";

export default function PowerCRMForm() {

  <PowerScript />
  
  useEffect(() => {
    
    const checkAndStyleForm = setInterval(() => {
      const form = document.getElementById("pwrcrmform");
      if (form) {
        clearInterval(checkAndStyleForm);
        applyCustomStyles();
      }
    }, 100);

    return () => {
      clearInterval(checkAndStyleForm);
    };
  }, []);

  const applyCustomStyles = () => {

  const style = document.createElement('style');
    style.textContent = `
      #pwrcrmform p,
      #pwrcrmform .pwrcrm-terms,
      #pwrcrmform [class*="term"],
      #pwrcrmform small,
      .pwrcrmInputCont + p,
      #pwrcrm p {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <>
      <section
        id="formulario"
        className="relative py-16 md:py-24 lg:py-32 px-4"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Título da seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Preencha agora e ative sua proteção em poucos minutos!
            </h2>
          </div>

          {/* Container do formulário */}
          <div className="p-6 md:p-8 lg:p-12 shadow-2xl">
            <div id="pwrcrm">
              <form id="pwrcrmform" className="space-y-6">
                {/* Campos Hidden */}
                <input
                  type="hidden"
                  value="4ncore761"
                  id="pwrCmpnHsh"
                  name="pwrCmpnHsh"
                />
                <input
                  type="hidden"
                  value="WG3AoAQ3"
                  id="pwrFrmCode"
                  name="pwrFrmCode"
                />
                <input
                  type="hidden"
                  value="1"
                  id="pwrPplnClmn"
                  name="pwrPplnClmn"
                />
                <input
                  type="hidden"
                  value="681"
                  id="pwrLdSrc"
                  name="pwrLdSrc"
                />

                {/* Grid de campos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome - ocupa 2 colunas */}
                  <div className="form-group md:col-span-2">
                    <label
                      htmlFor="pwrClntNm"
                      className="block text-white font-semibold mb-2 text-sm md:text-base"
                    >
                      Nome <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      id="pwrClntNm"
                      name="pwrClntNm"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  {/* Telefone */}
                  <div className="form-group">
                    <label
                      htmlFor="pwrCltPhn"
                      className="block text-white font-semibold mb-2 text-sm md:text-base"
                    >
                      Telefone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(__) _____-____"
                      maxLength={11}
                      className="phone_mask w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      id="pwrCltPhn"
                      name="pwrCltPhn"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="form-group">
                    <label
                      htmlFor="pwrClntMl"
                      className="block text-white font-semibold mb-2 text-sm md:text-base"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="pwrClntMl"
                      name="pwrClntMl"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>

                  {/* Placa */}
                  <div className="form-group">
                    <label
                      htmlFor="pwrVhclPlt"
                      className="block text-white font-semibold mb-2 text-sm md:text-base"
                    >
                      Placa
                    </label>
                    <input
                      type="text"
                      placeholder="XXX0000"
                      maxLength={7}
                      id="pwrVhclPlt"
                      name="pwrVhclPlt"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all uppercase"
                      style={{ textTransform: "uppercase" }}
                    />
                  </div>

                  {/* Estado */}
                  <div className="form-group">
                    <label
                      htmlFor="pwrStt"
                      className="block text-white font-semibold mb-2 text-sm md:text-base"
                    >
                      Estado
                    </label>
                    <select
                      id="pwrStt"
                      name="pwrStt"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="0">Selecione o estado</option>
                    </select>
                  </div>

                  {/* Cidade */}
                  <div className="form-group md:col-span-2">
                    <label
                      htmlFor="pwrCt"
                      className="block text-white font-semibold mb-2 text-sm md:text-base"
                    >
                      Cidade
                    </label>
                    <select
                      id="pwrCt"
                      name="pwrCt"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="0">Selecione a cidade</option>
                    </select>
                  </div>
                </div>

                {/* Botão de submit */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="sm:w-full md:w-96 bg-red-600 hover:bg-red-700 text-white font-bold py-4 md:py-5 px-8 rounded-full transition-all text-base md:text-lg transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    QUERO ATIVAR AGORA! 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
