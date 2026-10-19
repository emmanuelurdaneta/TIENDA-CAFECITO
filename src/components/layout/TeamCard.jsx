function TeamCard({ nombre, rol, email, avatar }) {
  return (
    <article className="team-card">
      <img className="team-card__avatar" src={avatar} alt={`Foto de ${nombre}`} loading="lazy" />
      <h3 className="team-card__name">{nombre}</h3>
      <p className="team-card__role">{rol}</p>
      <a className="team-card__email" href={`mailto:${email}`}>{email}</a>
    </article>
  )
}

export default TeamCard
