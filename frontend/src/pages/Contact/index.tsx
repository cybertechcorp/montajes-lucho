import { useState } from "react";
import "./index.css";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, error: "" });
    try {
      // 👉 Aquí puedes integrar EmailJS o tu API. Por ahora simulamos el envío.
      await new Promise(res => setTimeout(res, 900));
      setStatus({ sending: false, ok: true, error: "" });
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
    } catch (err) {
      setStatus({ sending: false, ok: false, error: "No se pudo enviar. Inténtalo de nuevo." });
    }
  };

  const phone = "34XXXXXXXXX"; // <-- PON EL NÚMERO REAL
  const telHref = 'tel:+${phone}';
  const waHref = 'https://wa.me/${phone}';

  return (
    <article className="section contact-page">
      <header className="page-header">
        <h1>Contacto</h1>
        <p className="lead">Presupuesto rápido y sin compromiso.</p>
      </header>

      <div className="contact-grid">
        {/* Datos de contacto */}
        <aside className="contact-card">
          <h2>Datos directos</h2>
          <ul className="contact-list">
            <li><strong>Teléfono:</strong> <a href={telHref}>+{phone}</a></li>
            <li><strong>WhatsApp:</strong> <a href={waHref} target="_blank" rel="noopener noreferrer">Escríbeme</a></li>
            <li><strong>Email:</strong> <a href="mailto:contacto@lucho.com">contacto@lucho.com</a></li>
            <li><strong>Zona:</strong> Madrid y alrededores</li>
            <li><strong>Horario:</strong> Lun–Vie 9:00–20:00 (Urgencias según disponibilidad)</li>
          </ul>

          <a className="button" href={waHref} target="_blank" rel="noopener noreferrer">
            Contáctame por WhatsApp
          </a>
        </aside>

        {/* Formulario */}
        <section className="contact-form">
          <h2>Envíame un mensaje</h2>
          <form onSubmit={handleSubmit} className="card form">
            <div className="form-row">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" value={form.telefono} onChange={handleChange} inputMode="tel" />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={5} value={form.mensaje} onChange={handleChange} />
            </div>

            <button className="button" disabled={status.sending}>
              {status.sending ? "Enviando..." : "Enviar"}
            </button>

            {status.ok && <p className="ok">¡Gracias! Te contactaremos pronto.</p>}
            {status.ok === false && <p className="error">{status.error}</p>}

            <small className="muted">Al enviar, aceptas nuestra política de privacidad.</small>
          </form>
        </section>
      </div>

      {/* Mapa estático opcional (sustituye la imagen por una propia si quieres) */}
      <section className="map-section">
        <img src="/mapa-madrid.jpg" alt="Área de servicio: Madrid y alrededores" />
      </section>

      {/* SEO Local con JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Montajes y Transportes Lucho",
        "image": "/og-image.jpg",
        "areaServed": "Madrid",
        "telephone": '+${phone}',
        "url": "https://tudominio.com",
        "priceRange": "€€",
        "sameAs": [
          "https://wa.me/" + phone
        ]
      }) }} />
    </article>
  );
}
