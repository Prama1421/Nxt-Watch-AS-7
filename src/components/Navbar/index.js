import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {BsBrightnessHigh} from 'react-icons/bs'
import {MdMenu} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarSmallContainer,
  NavLogo,
  NavItemsContainer,
  NavButtons,
  MenuContainer,
  ListItem,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  NavbarLargeContainer,
  ProfileImage,
  LogOutBtn,
} from './styledComponents'

class Navbar extends Component {
  state = {
    isMenuClicked: false,
  }

  onClickMenu = () => {
    this.setState(prevState => ({isMenuClicked: !prevState.isMenuClicked}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {isMenuClicked} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const bgColor = isDarkTheme ? '#212121' : '#f9f9f9'
          const navLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const navIconColor = isDarkTheme ? '#ffffff' : null
          const smallNavMenuContainerBgColor = isDarkTheme
            ? '#0f0f0f'
            : '#ffffff'
          const smallNavMenuContainerTextColor = isDarkTheme
            ? '#ffffff'
            : '#0f0f0f'

          const logoutBtnColor = isDarkTheme ? '#f8fafc' : '#3b82f6'
          const modalBgColor = isDarkTheme ? '#212121' : '#cbd5e1'
          const modalText = isDarkTheme ? '#f4f4f4' : '#3b82f6'

          const onChangeTheme = () => {
            toggleTheme()
          }
          return (
            <>
              <NavbarSmallContainer bgColor={bgColor}>
                <Link to="/">
                  <NavLogo src={navLogo} alt="website logo" />
                </Link>
                <NavItemsContainer>
                  <NavButtons onClick={onChangeTheme} data-testid="theme">
                    {isDarkTheme ? (
                      <BsBrightnessHigh size={25} color="#ffffff" />
                    ) : (
                      <FaMoon size={25} />
                    )}
                  </NavButtons>
                  <NavButtons onClick={this.onClickMenu}>
                    <MdMenu size={28} color={navIconColor} />
                  </NavButtons>
                  <Popup
                    modal
                    trigger={
                      <NavButtons>
                        <FiLogOut size={28} color={navIconColor} />
                      </NavButtons>
                    }
                  >
                    {close => (
                      <ModalContainer modalBgColor={modalBgColor}>
                        <ModalDesc modalText={modalText}>
                          Are you sure, you want to logout?
                        </ModalDesc>
                        <ButtonsContainer>
                          <CloseButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CloseButton>

                          <ConfirmButton
                            type="button"
                            onClick={this.onClickLogout}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </ModalContainer>
                    )}
                  </Popup>
                </NavItemsContainer>
              </NavbarSmallContainer>
              {isMenuClicked && (
                <MenuContainer
                  smallNavMenuContainerBgColor={smallNavMenuContainerBgColor}
                >
                  <ListItem>
                    <Link
                      to="/"
                      style={{
                        textDecoration: 'none',
                        color: `${smallNavMenuContainerTextColor}`,
                      }}
                    >
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/trending"
                      style={{
                        textDecoration: 'none',
                        color: `${smallNavMenuContainerTextColor}`,
                      }}
                    >
                      Trending
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/gaming"
                      style={{
                        textDecoration: 'none',
                        color: `${smallNavMenuContainerTextColor}`,
                      }}
                    >
                      Gaming
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/saved-videos"
                      style={{
                        textDecoration: 'none',
                        color: `${smallNavMenuContainerTextColor}`,
                      }}
                    >
                      Saved Videos
                    </Link>
                  </ListItem>
                </MenuContainer>
              )}
              <NavbarLargeContainer bgColor={bgColor}>
                <Link to="/">
                  <NavLogo src={navLogo} alt="website logo" />
                </Link>
                <NavItemsContainer>
                  <NavButtons onClick={onChangeTheme} data-testid="theme">
                    {isDarkTheme ? (
                      <BsBrightnessHigh size={40} color="#ffffff" />
                    ) : (
                      <FaMoon size={45} />
                    )}
                  </NavButtons>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <LogOutBtn logoutBtnColor={logoutBtnColor}>
                        Logout
                      </LogOutBtn>
                    }
                  >
                    {close => (
                      <ModalContainer modalBgColor={modalBgColor}>
                        <ModalDesc modalText={modalText}>
                          Are you sure, you want to logout?
                        </ModalDesc>
                        <ButtonsContainer>
                          <CloseButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CloseButton>

                          <ConfirmButton
                            type="button"
                            onClick={this.onClickLogout}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </ModalContainer>
                    )}
                  </Popup>
                </NavItemsContainer>
              </NavbarLargeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
