const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#nuevo-producto', label: 'Agregar producto' },
  { href: '#equipo', label: 'Nosotros' },
]

function NavBar() {
  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="container nav__inner">
        <ul className="nav__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav__link">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
