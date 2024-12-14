import styled from 'styled-components'

export const SavedMainContainer = styled.div`
  display: flex;
`

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100%;

  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    margin-bottom: 0px;
  }
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-bottom: 15px;
`
export const SavedTitleIconContainer = styled.div`
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
export const SavedText = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  width: 100%;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
