import FeatureIcon from "../components/FeatureIcon";

export default function Servicios() {
  return (
    <article className="section">
      <header className="page-header">
        <h1>Servicios profesionales</h1>
        <p className="lead">
          Montaje experto de muebles, estanterías, lámparas, ventiladores y cocinas, además de
          transporte seguro en Madrid y alrededores. Puntualidad, cuidado y resultados impecables.
        </p>
      </header>

      {/* Bloques por categorías */}
      <section className="service-groups">
        <div className="service-card">
          <h2>Montaje de muebles</h2>
          <p>
            Montaje preciso de mobiliario de hogar y oficina (IKEA y otras marcas), fijación a pared
            cuando es necesario, nivelado y remates limpios.
          </p>
          <ul className="bullets">
            <li>Armarios, cómodas, mesas, sillas, sofás</li>
            <li>Montaje, ajuste y anclajes de seguridad</li>
            <li>Retirada de embalajes</li>
            <li>Camas, literas</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Estanterías</h2>
          <p>
            Instalación y fijación de estanterías decorativas y de carga ligera, alineadas y seguras.
          </p>
          <ul className="bullets">
            <li>Medición y nivelado profesional</li>
            <li>Fijaciones adecuadas al tipo de pared</li>
            <li>Acabados discretos</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Lámparas y ventiladores</h2>
          <p>
            Instalación eléctrica básica (sustitución de luminarias, conexión a punto existente) y
            montaje de ventiladores de techo con equilibrio.
          </p>
          <ul className="bullets">
            <li>Cambio de lámparas y plafones</li>
            <li>Montaje y equilibrado de ventiladores</li>
            <li>Comprobación de funcionamiento</li>
          </ul>
          <small className="note">*Para trabajos eléctricos complejos se coordina electricista homologado.</small>
        </div>

        <div className="service-card">
          <h2>Cocinas</h2>
          <p>
            Montaje de módulos, encajes, zócalos y herrajes; ajustes finos de puertas y cajones,
            encimeras pre-cortadas y remates estéticos.
          </p>
          <ul className="bullets">
            <li>Planificación y secuenciación del montaje</li>
            <li>Ajuste y nivelación de mobiliario</li>
            <li>Coordinación con otros gremios si es necesario</li>
          </ul>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="how-we-work">
        <h2>Cómo trabajamos</h2>
        <div className="steps">
          <div className="step">
            <span className="step-num">1</span>
            <h3>Consulta</h3>
            <p>Nos cuentas qué necesitas (fotos/medidas ayudan) y te damos un presupuesto claro.</p>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <h3>Planificación</h3>
            <p>Fijamos fecha y preparamos herramientas, fijaciones y protección adecuadas.</p>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <h3>Ejecución</h3>
            <p>Montaje y/o transporte con cuidado, limpieza de zona y revisión final contigo.</p>
          </div>
        </div>

        <div className="features">
          <FeatureIcon icon="🛠️" title="Materiales incluidos"
            desc="Tacos/torillos habituales, mantas y cinchas de sujeción." />
          <FeatureIcon icon="⏱️" title="Puntualidad"
            desc="Horario pactado y comunicación transparente si surge algún imprevisto." />
          <FeatureIcon icon="🧼" title="Cuidado y limpieza"
            desc="Protección de superficies y retirada básica de embalajes." />
          <FeatureIcon icon="🔒" title="Seguridad"
            desc="Trabajo seguro y fijaciones adecuadas al tipo de pared y peso." />
        </div>
      </section>

      {/* Reseñas / TaskRabbit */}
      <section className="reviews">
        <h2>Opiniones de clientes</h2>
        <div className="quotes">
          <blockquote>“Rápido, profesional y muy cuidadoso.” — Ana G.</blockquote>
          <blockquote>“Montó la cocina con precisión y dejó todo limpio.” — Jorge R.</blockquote>
          <blockquote>“100% recomendable. Serio y puntual.” — Usuario TaskRabbit</blockquote>
        </div>
        <p className="muted">Trabajamos también a través de TaskRabbit.</p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>¿Empezamos?</h3>
        <p>Cuéntanos tu proyecto y te enviamos presupuesto sin compromiso.</p>
        <a className="button" href="/contacto">Solicitar presupuesto</a>
      </section>
    </article>
  );
}