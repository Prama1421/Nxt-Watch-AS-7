import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  MdHomeIcon,
  HiFireIcon,
  SiYoutubegamingIcon,
  RiMenuAddLineIcon,
  SidebarContainer,
  SideMenuContainer,
  MenuLitsItem,
  SidebarContactContainer,
  ContactHeading,
  ContactLogos,
  ContactDescription,
} from './styledComponents'

const SideNavbar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#231f20' : '#f8fafc'
      const iconColor = '#64748b'
      const textColor = isDarkTheme ? '#f8fafc' : '#1e293b'
      const bgHover = isDarkTheme ? '#424242' : '#cbd5e1'

      return (
        <SidebarContainer bgColor={bgColor}>
          <SideMenuContainer>
            <MenuLitsItem bgHover={bgHover}>
              <MdHomeIcon iconColor={iconColor} />
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: `${textColor}`,
                }}
              >
                Home
              </Link>
            </MenuLitsItem>
            <MenuLitsItem bgHover={bgHover}>
              <HiFireIcon iconColor={iconColor} />
              <Link
                to="/trending"
                style={{
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: `${textColor}`,
                }}
              >
                Trending
              </Link>
            </MenuLitsItem>
            <MenuLitsItem bgHover={bgHover}>
              <SiYoutubegamingIcon iconColor={iconColor} />
              <Link
                to="/gaming"
                style={{
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: `${textColor}`,
                }}
              >
                Gaming
              </Link>
            </MenuLitsItem>
            <MenuLitsItem bgHover={bgHover}>
              <RiMenuAddLineIcon iconColor={iconColor} />
              <Link
                to="/saved-videos"
                style={{
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: `${textColor}`,
                }}
              >
                Saved Videos
              </Link>
            </MenuLitsItem>
          </SideMenuContainer>
          <SidebarContactContainer>
            <ContactHeading style={{color: `${textColor}`}}>
              CONTACT US
            </ContactHeading>
            <ContactLogos
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ContactLogos
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ContactLogos
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
            <ContactDescription style={{color: `${textColor}`}}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </SidebarContactContainer>
        </SidebarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SideNavbar
