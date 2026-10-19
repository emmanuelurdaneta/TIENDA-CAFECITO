import TeamCard from './TeamCard.jsx'

// Datos ficticios de ejemplo
const team = [
  { id: 1, nombre: 'Lucía Fernández', rol: 'Fundadora y tostadora', email: 'lucia@tostadocafe.example', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 2, nombre: 'Martín Gómez', rol: 'Barista y catador', email: 'martin@tostadocafe.example', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 3, nombre: 'Sofía Ramírez', rol: 'Atención al cliente', email: 'sofia@tostadocafe.example', avatar: 'https://i.pravatar.cc/150?img=32' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <section className="footer__company">
          <h2 className="footer__title">Tostado Café</h2>
          <p>Tostamos granos de especialidad en pequeños lotes desde 2019.</p>
          <ul className="footer__info">
            <li>📍 Av. Siempre Viva 742, Buenos Aires</li>
            <li>🕘 Lunes a sábado de 9 a 19 h</li>
            <li>✉️ contacto@tostadocafe.example</li>
          </ul>
        </section>

        <section className="footer__team" id="equipo">
          <h2 className="footer__title">Nuestro equipo</h2>
          <div className="team-grid">
            {team.map((persona) => (
              <TeamCard key={persona.id} {...persona} />
            ))}
          </div>
        </section>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Tostado Café. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
