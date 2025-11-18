

export default function FooterSection() {
    return (
        <section>
            <div className="container mx-auto py-6 px-4 text-center border-t-2 border-gray-600 text-white flex flex-row justify-center items-center flex-wrap gap-12 text-sm pt-24 mt-12 mb-32">
                <p>
                    Copyright © 2025 Ancore. Todos os direitos reservados. 
                </p>
                <a
                    href="https://ancore.app/assistencia-e-beneficios/"
                    className="hover:underline" target="_blank" rel="noopener noreferrer"
                >
                    Políticas de privacidade | Termos de uso
                </a>
                <span className="flex flex-row justify-center items-center gap-2 sm:flex-nowrap flex-wrap">
                    Feito com carinho por{" "}
                    <span className="text-red-600 flex gap-1">
                        <a href="https://instagram.com/ahamagenciacriativa" target="_blank" rel="noopener noreferrer">
                            @ahamagenciacriativa
                        </a>
                        <span>{" | "}</span>
                        <a href="https://instagram.com/opablodsg" target="_blank" rel="noopener noreferrer">
                            @opablodsg
                        </a>
                        <span>{" | "}</span>
                        <a
                            href="https://www.linkedin.com/in/carlos-eduardo-3a1462292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Carlos Eduardo
                        </a>
                    </span>
                </span>
            </div>
        </section>
    );
}
