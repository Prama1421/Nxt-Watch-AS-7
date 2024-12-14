import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
`
export const HomeBannerContainer = styled.div`
  padding: 15px;
  padding-left: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin-bottom: 15px;
  justify-content: space-between;
  display: flex;
  @media (max-width: 767px) {
    width: 100%;
    min-height: 200px;
  }
  @media (min-width: 768px) {
    width: 100%;
    min-height: 250px;
  }
`

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`

export const BannerLogoAndCloseContainer = styled.div`
  display: ${props => props.display};
`
export const BannerLogo = styled.img`
  width: 140px;
`
export const CloseButton = styled.button`
  display: flex;
  align-items: flex-start;
  background: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 5px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  color: #383838;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`
export const GetItNowButton = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  border: 2px solid #383838;
  color: #383838;
  border-radius: 1px;
  height: 40px;
  width: 120px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 576px) {
    margin-top: 25px;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
`

export const SearchInput = styled.input`
  background-color: transparent;
  width: 250px;
  height: 35px;
  border: 1px solid #7e858e;
  outline: none;
  font-family: 'Roboto';
  font-size: 17px;
  padding: 10px;
  padding-left: 15px;
  color: #7e858e;

  @media (min-width: 576px) {
    width: 350px;
  }
`
export const SearchButton = styled.button`
  background: ${props => props.searchBtnBgColor};
  border: 1px solid #7e858e;
  width: 70px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`
