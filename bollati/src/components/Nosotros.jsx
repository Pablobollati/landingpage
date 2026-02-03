"use client";

import { useEffect } from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../styles/components/nosotros.scss";

const equipo = [
  {
    nombre: "Pablo Ignacio Bollati",
    rol: "Socio fundador",
    desc: "Abogado egresado de la Universidad Nacional de Córdoba y Magíster en Derecho y Economía por la Universidad Torcuato Di Tella. Experto en derecho empresarial, litigios complejos y asesoramiento estratégico a compañías en crecimiento. Combina análisis técnico, visión de negocio y acompañamiento directo en decisiones críticas.",
    foto: "/images/team1.jpg",
    linkedin: "#",
    mail: "#",
  },
  {
    nombre: "Nicolle Anahid Avakian",
    rol: "Abogada asociada",
    desc: "Abogada por la Universidad Católica de Córdoba. Diplomada en Derecho Laboral, Responsabilidad Civil y Procesos de Daños. Su práctica se centra en conflictos laborales, responsabilidad civil y gestión integral de reclamos. Se destaca por su enfoque resolutivo y orientación al cliente.",
    foto: "/images/team3.jpg",
    linkedin: "#",
    mail: "#",
  },
  {
    nombre: "María Paz Maurino",
    rol: "Abogada asociada",
    desc: "Abogada egresada de la Universidad Nacional de Córdoba. Integra el área de derecho civil, comercial y defensa patrimonial, con experiencia en litigios, contratos y asesoramiento preventivo a particulares y empresas.",
    foto: "/images/team2.1.jpg",
    linkedin: "#",
    mail: "#",
  },
];

const destacados = [
  {
    titulo: "Misión",
    texto:
      "Guiarte con soluciones legales precisas, eficientes y alineadas a tus objetivos de negocio o personales.",
    imagen: "/images/teamtodos.jpg",
  },
  {
    titulo: "Visión",
    texto:
      "Ser tu aliado de confianza a largo plazo, combinando excelencia técnica con cercanía en cada decisión.",
    imagen: "/images/teamtodos3.jpg",
  },
];

export default function Nosotros() {
  useEffect(() => {
    const items = document.querySelectorAll(".ba-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="ba-section ba-about">
      <div className="ba-section__inner">
        <div className="ba-section__header">
          <h2>Nosotros</h2>
          <p>
            Somos Bollati Abogados, un estudio jurídico que acompaña decisiones estratégicas
            de negocios y personas con un enfoque cercano y resolutivo.
          </p>
        </div>

        <div className="ba-about__content">
          <div className="ba-about__text">
            <p>
              Brindamos asesoramiento integral a empresas en sus etapas clave: constitución,
              expansión, compliance y resolución de conflictos. También representamos a
              personas en litigios patrimoniales y procesos complejos con una mirada técnica
              y humana.
            </p>
            <p>
              Trabajamos con equipos multidisciplinarios para diseñar estrategias claras y
              accionables, priorizando la prevención y la defensa efectiva de tus intereses.
            </p>
          </div>

          <div className="ba-about__highlights">
            {destacados.map(({ titulo, texto, imagen }, idx) => (
              <article
                key={titulo}
                className={`ba-highlight ba-reveal ${
                  idx % 2 === 1 ? "ba-highlight--reverse" : ""
                }`}
              >
                <div
                  className="ba-highlight__image"
                  style={{ backgroundImage: `url(${imagen})` }}
                  aria-hidden="true"
                />
                <div className="ba-highlight__body">
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="ba-section__header">
          <h2>Equipo</h2>
        </div>

        <div className="ba-about__team">
          {equipo.map((p) => (
            <article key={p.nombre} className="ba-team-card ba-reveal">
              <div
                className="ba-team-card__photo"
                style={{ backgroundImage: `url(${p.foto})` }}
                aria-hidden="true"
              />
              <div className="ba-team-card__info">
                <h4>{p.nombre}</h4>
                <p className="ba-team-card__role">{p.rol}</p>
                <p>{p.desc}</p>
                <div className="ba-team-card__links">
                  <a href={p.linkedin} aria-label={`LinkedIn de ${p.nombre}`}>
                  <FaLinkedinIn />
                  </a>
                  <a href={p.mail} aria-label={`Mail de ${p.nombre}`}>
                  <FaEnvelope />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
