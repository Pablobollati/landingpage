"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../styles/components/nosotros.scss";

const equipo = [
  {
    nombre: "Pablo Ignacio Bollati",
    rol: "Socio fundador",
    desc: "Abogado egresado de la Universidad Nacional de Córdoba y Magíster en Derecho y Economía por la Universidad Torcuato Di Tella.",
    foto: "/images/team1.jpg",
    linkedin: "https://www.linkedin.com/in/pablo-ignacio-bollati-92aa6847?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    mail: "pbollati@bollatiabogados.com",
  },
  {
    nombre: "Nicolle Anahid Avakian",
    rol: "Abogada asociada",
    desc: "Abogada egresada en la Universidad Católica de Córdoba. Diplomada en Derecho Laboral, Responsabilidad Civil y Procesos de Daños.",
    foto: "/images/team3.jpg",
    linkedin: "https://www.linkedin.com/in/nicolle-avakian-431782287/",
    mail: "navakian@bollatiabogados.com",
  },
  {
    nombre: "María Paz Maurino",
    rol: "Abogada asociada",
    desc: "Abogada egresada de la Universidad Nacional de Córdoba, con experiencia en derecho societario y derecho empresarial.",
    foto: "/images/team2.1.jpg",
    linkedin: "https://www.linkedin.com/in/paz-maurino-546148202/",
    mail: "pmaurino@bollatiabogados.com",
  },
];

const destacados = [
  {
    titulo: "Misión",
    texto:
      "Desarrollamos soluciones jurídicas claras y efectivas, adaptadas a la realidad y objetivos de empresas y personas.",
    imagen: "/images/teamtodos.jpg",
  },
  {
    titulo: "Visión",
    texto:
      "Aportar respaldo jurídico confiable, con rigor técnico y acompañamiento estratégico en cada decisión.",
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
      { threshold: 0.18 },
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
            Somos Bollati Abogados, un estudio jurídico orientado a potenciar el
            crecimiento de nuestros clientes. Brindamos asesoramiento legal a
            pequeñas, medianas y grandes empresas.
          </p>
        </div>

        <div className="ba-about__content">
          <div className="ba-about__text">
            <p>
              También acompañamos a personas físicas en la defensa y protección
              de su patrimonio, manteniendo siempre nuestro sello distintivo:
              responsabilidad, compromiso y diligencia.
            </p>
            <p>
              Trabajamos con un enfoque estratégico, ofreciendo respuestas
              ágiles, precisas y diseñadas a medida de cada cliente. Nuestro
              propósito es anticipar problemas, impulsar oportunidades y
              convertir el derecho en una herramienta clave para el crecimiento
              sostenible de tu empresa.
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
                <div className="ba-highlight__image">
                  <Image
                    src={imagen}
                    alt={titulo}
                    fill
                    sizes="(max-width: 960px) 100vw, 42vw"
                    quality={85}
                    className="ba-cover-image"
                  />
                </div>
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
              <div className="ba-team-card__photo">
                <Image
                  src={p.foto}
                  alt={`Foto de ${p.nombre}`}
                  fill
                  sizes="(max-width: 719px) 100vw, (max-width: 1039px) 50vw, 33vw"
                  quality={85}
                  className="ba-cover-image"
                />
              </div>
              <div className="ba-team-card__info">
                <h4>{p.nombre}</h4>
                <p className="ba-team-card__role">{p.rol}</p>
                <p>{p.desc}</p>
                <div className="ba-team-card__links">
                  <a href={p.linkedin} target="_blank" aria-label={`LinkedIn de ${p.nombre}`}>
                    <FaLinkedinIn />
                  </a>
                  <a href={`mailto:${p.mail}`} aria-label={`Mail de ${p.nombre}`}>
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
