import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import "../styles/components/footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ba-footer">
      <div className="ba-footer__inner">
        <div className="ba-footer__info">
          <p>Bollati Abogados</p>
        </div>

        <div className="ba-footer__social">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>

        <p className="ba-footer__copy">
          © {year} Bollati Abogados. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
