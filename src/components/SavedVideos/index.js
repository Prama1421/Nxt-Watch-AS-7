import {CgPlayListAdd} from 'react-icons/cg'

import Navbar from '../Navbar'
import SideNavbar from '../SideNavbar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedMainContainer,
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      // console.log(savedVideos)

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const bannerBgColor = isDarkTheme ? '#181818' : '#ebebeb'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Navbar />
          <SavedMainContainer>
            <SideNavbar />
            <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
              {savedVideos.length > 0 ? (
                <>
                  <SavedVideoTitle data-testid="banner" bgColor={bannerBgColor}>
                    <SavedTitleIconContainer bgColor={bgColor}>
                      <CgPlayListAdd size={35} color="#ff0000" />
                    </SavedTitleIconContainer>
                    <SavedText color={textColor}>Saved Videos</SavedText>
                  </SavedVideoTitle>
                  <SavedVideoList>
                    {savedVideos.map(eachVideo => (
                      <TrendingVideoCard
                        key={eachVideo.id}
                        videoDetails={eachVideo}
                      />
                    ))}
                  </SavedVideoList>
                </>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote noteColor={noteColor}>
                    You can save your videos while watching them
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </SavedContainer>
          </SavedMainContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
