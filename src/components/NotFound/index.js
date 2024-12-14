import {Component} from 'react'

import Navbar from '../Navbar'
import SideNavbar from '../SideNavbar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          // console.log(savedVideos)

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

          const notFindImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

          return (
            <>
              <Navbar />
              <NotFoundMainContainer bgColor={bgColor}>
                <SideNavbar />
                <NotFoundContainer bgColor={bgColor}>
                  <NotFoundVideosView>
                    <NotFoundVideosImage
                      src={notFindImageUrl}
                      alt="not found"
                    />
                    <NotFoundVideosHeading headingColor={headingColor}>
                      Page Not Found
                    </NotFoundVideosHeading>
                    <NotFoundVideosNote noteColor={noteColor}>
                      We are sorry, the page you requested could not be found.
                    </NotFoundVideosNote>
                  </NotFoundVideosView>
                </NotFoundContainer>
              </NotFoundMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default NotFound
