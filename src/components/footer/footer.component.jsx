import React from 'react';
import './footer.styles.scss'

const Footer = (props) => {
    return (
        <div className="wrap-footer">
            <div className="container-footer">
                © {new Date().getFullYear()}, Все права защищены
          {` `}
            </div>
        </div>
    )
}

export default Footer