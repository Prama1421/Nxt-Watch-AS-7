import styled from 'styled-components'

export const VideoPlayerMainContainer = styled.div`
  display: flex;
  width: 100%;
`

export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 100%;

  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    margin-bottom: 0px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
