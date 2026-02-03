import "../styles/components/nosotros.scss";

export default function EquipoCard({ name, role, bio }) {
  const safeName = name || "";
  const initials =
    safeName
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "BA";

  return (
    <article className="ba-equipo-card">
      <div className="ba-equipo-card__avatar">{initials}</div>
      <div className="ba-equipo-card__body">
        <h3>{name}</h3>
        <p className="ba-equipo-card__role">{role}</p>
        <p>{bio}</p>
      </div>
    </article>
  );
}
