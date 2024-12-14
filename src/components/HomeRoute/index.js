import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import NavBar from '../Navbar'
import SideNavbar from '../SideNavbar'

import FailureView from '../FailureView'
import HomeVideoList from '../HomeVideoList'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HomeMainContainer,
  HomeContainer,
  HomeBannerContainer,
  BannerLogoAndCloseContainer,
  BannerLogo,
  CloseButton,
  BannerDescription,
  GetItNowButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    bannerDisplay: true,
    homeVideos: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  onClickCloseBanner = () => {
    this.setState({bannerDisplay: false})
  }

  getVideos = async () => {
    const {searchInput} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const videosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videosUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updateData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        homeVideos: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderVideos = () => {
    const {homeVideos} = this.state

    return <HomeVideoList homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const searchBtnBgColor = isDarkTheme ? '#212121' : '#e2e8f0'

          return (
            <>
              <NavBar />
              <HomeMainContainer data-testid="home" bgColor={bgColor}>
                <SideNavbar />
                <HomeContainer>
                  {bannerDisplay ? (
                    <HomeBannerContainer data-testid="banner">
                      <BannerLogoAndCloseContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerDescription>
                          Buy Nxt Watch Premium prepaid plans with <br />
                          UPI
                        </BannerDescription>
                        <GetItNowButton>GET IT NOW</GetItNowButton>
                      </BannerLogoAndCloseContainer>
                      <CloseButton
                        data-testid="close"
                        onClick={this.onClickCloseBanner}
                      >
                        <AiOutlineClose size={25} />
                      </CloseButton>
                    </HomeBannerContainer>
                  ) : null}
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      onClick={this.getSearchResults}
                      type="button"
                      data-testid="searchButton"
                      searchBtnBgColor={searchBtnBgColor}
                    >
                      <BsSearch
                        color="#64748b"
                        size={16}
                        data-testid="searchButton"
                      />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderHomeVideos()}
                </HomeContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default HomeRoute
