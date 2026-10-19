function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__brand">
          <span className="header__logo" aria-hidden="true">☕</span>
          Tostado Café
        </a>
        <p className="header__tagline">Café de especialidad, tostado cada semana</p>
      </div>
    </header>
  )
}

export default Header
