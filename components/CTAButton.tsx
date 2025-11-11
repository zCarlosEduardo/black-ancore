export default function CTAButton({
  text,
  extraClasses = "",
}: {
  text: string;
  extraClasses?: string;
}) {
  return (
    <a
      href="#formulario"
      className={`bg-red-600 hover:bg-red-700 text-white font-bold py-8 rounded-full transition-colors text-lg inline-block text-center ${extraClasses}`}
    >
      {text}
    </a>
  );
}