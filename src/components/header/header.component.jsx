import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.styles.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <Link to="/" className="logo">
        {siteTitle}
      </Link>
  
      <div className="toggle">
        <ul>
          <li><Link to="/news">Все новости</Link></li>
          <li><Link to="/hack">Хак</Link></li>
          <li><Link to="/cybersecurity">Cybersecurity</Link></li>
          <li><Link to="/programming">Программирование</Link></li>
          <li><Link to="/design">Дизайн</Link></li>
          <li><Link to="/games">Игры</Link></li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
