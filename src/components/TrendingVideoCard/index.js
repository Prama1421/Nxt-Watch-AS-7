import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingNameAndViewsContainer,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDotPre,
  TrendingDot,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#f9f9f9' : '#212121'
        const textColor = isDarkTheme ? '#94a3b8' : '#64748b'

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle titleColor={titleColor}>{title}</TrendingTitle>
                  <TrendingNameAndViewsContainer>
                    <TrendingChannelName color={textColor}>
                      {name}
                    </TrendingChannelName>
                    <TrendingViewsAndDate color={textColor}>
                      <TrendingDotPre> &#8226; </TrendingDotPre> {viewCount}{' '}
                      views
                      <TrendingDot> &#8226; </TrendingDot>
                      {publishedAt}
                    </TrendingViewsAndDate>
                  </TrendingNameAndViewsContainer>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingVideoCard
