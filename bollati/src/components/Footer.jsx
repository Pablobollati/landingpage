import { FaLinkedinIn } from "react-icons/fa";
import "../styles/components/footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ba-footer">
      <div className="ba-footer__inner">
        {/* <div className="ba-footer__info">
          <p>Bollati Abogados</p>
        </div> */}

        <div className="ba-footer__social">
          <a
            className="ba-footer__social-link"
            href="https://www.linkedin.com/company/bollati-abogados"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="ba-footer__social-icon">
              <FaLinkedinIn />
            </span>
            <span className="ba-footer__social-label">LinkedIn</span>
          </a>
        </div>
        <div className="ba-footer__info">
          <p className="ba-footer__copy">
            © {year} Bollati Abogados. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
