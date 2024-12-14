import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  VideoCardList,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
} from './styledComponents'

const HomeVideoList = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const noResultsTextColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const tryTextColor = isDarkTheme ? '#94a3b8' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading textColor={noResultsTextColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote textColor={tryTextColor}>
              Try different key words or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoList
