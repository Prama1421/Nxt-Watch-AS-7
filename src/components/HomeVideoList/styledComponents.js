import styled from 'styled-components'

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 30px;
`

export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.textColor};
`

export const NoVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.textColor};
`

export const RetryButton = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-size: 15px;
  cursor: pointer;
`
