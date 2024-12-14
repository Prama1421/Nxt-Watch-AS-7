import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failTextColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const tryTextColor = isDarkTheme ? '#94a3b8' : '#475569'
        return (
          <FailedView>
            <FailedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailedHeading textColor={failTextColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote textColor={tryTextColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailedNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
