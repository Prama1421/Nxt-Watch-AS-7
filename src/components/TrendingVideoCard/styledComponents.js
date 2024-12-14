import styled from 'styled-components'

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 0px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.titleColor};
`
export const TrendingNameAndViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const TrendingChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
`
export const TrendingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const TrendingDotPre = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 576px) {
    display: none;
  }
`
