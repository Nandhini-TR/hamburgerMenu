import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="trigger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburger-menu" />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {(
        close, // Removed the wrapping button around the close button
      ) => (
        <div className="popup-container">
          <button
            type="button"
            className="close-button" // Added separate class for close button styling
            onClick={close} // Corrected function to close the popup
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <ul className="menu-items">
            <Link to="/" className="link">
              <li className="content-container">
                <AiFillHome className="home-about-icon" />
                <p className="about-home">Home</p>
              </li>
            </Link>
            <Link to="/about" className="link">
              <li className="content-container">
                <BsInfoCircleFill className="home-about-icon" />
                <p className="about-home">About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
