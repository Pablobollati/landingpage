"use client";

import { useEffect, useRef, useState } from "react";
import { FiCopy, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCheckmark  } from "react-icons/io";
import "../styles/components/contacto.scss";

const contactInfo = [
  { label: "Email", value: "info@bollatiabogados.com", icon: FiMail },
  { label: "Dirección", value: "27 de abril 436, Piso 11. Córdoba, Argentina", icon: FiMapPin },
  // { label: "Teléfono", value: "+54 9 351 808 6261", icon: FiPhone },
];

export default function Contacto() {
  const whatsappLink = "https://wa.me/5493518086261";
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const [copiado, setCopiado] = useState(null);
  const copyTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
    };
  }, []);

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiado(label);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopiado(null), 2000);
    } catch {
      setError("No se pudo copiar, inténtalo nuevamente.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviado(false);
    setError(null);
    setEnviando(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "No se pudo enviar el mensaje");
      }

      setEnviado(true);
      e.target.reset();
    } catch (err) {
      setError(err.message || "Ocurrió un error");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="ba-section ba-contact">
      <div className="ba-section__inner">
        <div className="ba-section__header">
          <h2>Contacto</h2>
          <p>
            Dejanos tu consulta y nos contactaremos a la brevedad.
          </p>
        </div>

        <div className="ba-contact__grid">
          <div className="ba-contact__info">
            {/* <p>
              Enviá tu mensaje y te responderemos con los próximos pasos. También podemos
              coordinar una llamada o reunión presencial.
            </p> */}

            <div className="ba-contact__meta">

              <a
                className="ba-contact__meta-item ba-contact__meta-item--link"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir chat por WhatsApp"
                >
                <div className="ba-contact__meta-left">
                  <span className="ba-contact__meta-icon ba-contact__meta-icon--whatsapp">
                    <FaWhatsapp aria-hidden="true" />
                  </span>
                  <div>
                    <span className="ba-contact__label">WhatsApp</span>
                    <span className="ba-contact__value">+54 9 351 808 6261</span>
                  </div>
                </div>
                <span className="ba-contact__meta-cta">Abrir chat</span>
              </a>
                {contactInfo.map((item) => (
                  <div key={item.label} className="ba-contact__meta-item">
                    <div className="ba-contact__meta-left">
                      <span className="ba-contact__meta-icon">
                        <item.icon aria-hidden="true" />
                      </span>
                      <div>
                        <span className="ba-contact__label">{item.label}</span>
                        <span className="ba-contact__value">{item.value}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ba-contact__copy"
                      onClick={() => handleCopy(item.label, item.value)}
                      aria-label={`Copiar ${item.label}`}
                    >
                      {copiado === item.label ? (
                        <IoMdCheckmark  aria-hidden="true" />
                      ) : (
                        <FiCopy aria-hidden="true" />
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <form className="ba-contact__form" onSubmit={handleSubmit}>
            <div className="ba-form__group">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Nombre y apellido"
              />
            </div>

            <div className="ba-form__group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="nombre@ejemplo.com"
              />
            </div>

            <div className="ba-form__group">
              <label htmlFor="telefono">
                Teléfono <span className="ba-optional">(opcional)</span>
              </label>
              <input id="telefono" name="telefono" type="tel" placeholder="+54 9 ..." />
            </div>

            <div className="ba-form__group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                required
                placeholder="Contanos en pocas líneas cómo podemos ayudarte."
              ></textarea>
            </div>

            <button type="submit" className="ba-button" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar mensaje"}
            </button>

            {enviado && (
              <p className="ba-contact__success">
                Gracias por tu mensaje. Nos pondremos en contacto a la brevedad.
              </p>
            )}
            {error && <p className="ba-contact__error">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
