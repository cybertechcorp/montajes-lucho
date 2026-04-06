import "./index.css";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${import.meta.env.VITE_PROVIDER_PHONE}?text=${encodeURIComponent("Hola, te escribo desde la web de montajes. Me gustaría solicitar información.")}`}

      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp.png" alt="WhatsApp" />
    </a>
  );
}