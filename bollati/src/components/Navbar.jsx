"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/components/navbar.scss";

const sections = ["inicio", "servicios", "nosotros", "contacto"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="ba-navbar">
      <div className="ba-navbar__container">
        <div className="ba-navbar__logo">
          <Image
            src="/logos/LogoB.png"
            alt="Bollati Abogados"
            width={90}
            height={40}
            priority
          />
        </div>

        <button
          className={`ba-navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`ba-navbar__menu ${open ? "is-open" : ""}`}>
          <Link
            href="#inicio"
            onClick={closeMenu}
            className={active === "inicio" ? "is-active" : ""}
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            onClick={closeMenu}
            className={active === "servicios" ? "is-active" : ""}
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            onClick={closeMenu}
            className={active === "nosotros" ? "is-active" : ""}
          >
            Nosotros
          </Link>
          <Link
            href="#contacto"
            onClick={closeMenu}
            className={active === "contacto" ? "is-active" : ""}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
