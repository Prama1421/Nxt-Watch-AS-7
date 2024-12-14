import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100%;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    margin-bottom: 0px;
  }
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const TitleIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const TrendingText = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
