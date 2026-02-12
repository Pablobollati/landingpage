import Image from "next/image";
import "../styles/components/hero.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="ba-hero">
      <div className="bg bg1" aria-hidden="true">
        <Image
          src="/images/hero2.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          priority
          className="ba-cover-image"
        />
      </div>
      <div className="bg bg2" aria-hidden="true">
        <Image
          src="/images/hero6.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="ba-cover-image"
        />
      </div>
      <div className="bg bg3" aria-hidden="true">
        <Image
          src="/images/hero7.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="ba-cover-image"
        />
      </div>
      

      <div className="overlay">
        <div className="overlay__content overlay__content--center">
          <Image
            src="/logos/logoD.png"
            alt="Bollati Abogados"
            width={1400}
            height={213}
            sizes="(max-width: 768px) 72vw, 700px"
            quality={95}
            priority
            className="overlay__logo-img"
          />
          <div className="overlay__actions">
            <Link href="#servicios" className="ba-btn ba-btn--primary">
              Ver servicios
            </Link>
            <Link href="#contacto" className="ba-btn ba-btn--ghost">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
