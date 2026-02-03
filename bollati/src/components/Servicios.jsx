"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import "../styles/components/servicios.scss";

const servicios = [
  {
    title: "Derecho empresarial y comercial",
    description:
      "Constitución de sociedades, contratos comerciales, mediación entre socios y acompañamiento legal en el crecimiento de empresas.",
  },
  {
    title: "Contratos y conflictos comerciales",
    description:
      "Redacción, revisión y ejecución de contratos civiles y comerciales. Prevención, negociación y resolución de conflictos contractuales.",
  },
  {
    title: "Derecho tributario",
    description:
      "Asesoramiento impositivo, estrategias fiscales preventivas y defensa en procedimientos administrativos y judiciales.",
  },
  {
    title: "Concursos y quiebras",
    description:
      "Representación de acreedores y deudores, reestructuración de pasivos, acuerdos preventivos y procesos concursales.",
  },
  {
    title: "Litigios complejos",
    description:
      "Intervención en litigios de alta complejidad jurídica, instancias recursivas y diseño de estrategias procesales avanzadas.",
  },
  {
    title: "Defensa patrimonial y relaciones de consumo",
    description:
      "Responsabilidad civil, daños y perjuicios, cobros, desalojos y defensa del patrimonio personal. Acompañamos a empresas frente a reclamos y multas de consumidores.",
  },
];

export default function Servicios() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  };

  return (
    <section id="servicios" className="ba-section ba-servicios">
      <div className="ba-section__inner">
        <div className="ba-section__header">
          <h2>Servicios</h2>
          <p>
            Asesoramos de manera integral para que tomes decisiones con seguridad.
          </p>
        </div>

        <div className="ba-servicios__accordion">
          {servicios.map((service, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={service.title}
                className={`ba-servicio ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="ba-servicio__header"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="ba-servicio__title">{service.title}</span>
                  <IoChevronDown
                    className={`ba-servicio__chevron ${isOpen ? "is-open" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`ba-servicio__body ${isOpen ? "is-open" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
