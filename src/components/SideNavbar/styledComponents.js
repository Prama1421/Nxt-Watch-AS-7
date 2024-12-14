import styled from 'styled-components'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

export const MdHomeIcon = styled(MdHome)`
    margin-right: 25px;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.iconColor};
    :hover {
        fill: #ff0000;
`
export const HiFireIcon = styled(HiFire)`
    margin-right: 25px;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.iconColor};
    :hover {
        fill: #ff0000;
`
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
    margin-right: 25px; 
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.iconColor};
    :hover {
        fill: #ff0000;   
`

export const RiMenuAddLineIcon = styled(RiMenuAddLine)`
    margin-right: 25px; 
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.iconColor};
    :hover {
        fill: #ff0000;
`

export const SidebarContainer = styled.div`
  width: 18%;
  height: 100vh;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  @media (max-width: 991px) {
    width: 25%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`
export const SideMenuContainer = styled.ul`
  list-style-type: none;
  margin-top: 35px;
  padding-left: 0px;
  background-color: transparent;
`

export const MenuLitsItem = styled.li`
    display:flex;
    align-items:center;
    margin-bottom: 15px;
    line-height: 2;
    padding-left: 5px;
    &:hover {
    background-color: ${props => props.bgHover};
`

export const SidebarContactContainer = styled.div`
  width: 100%;
  background-color: transparent;
`
export const ContactHeading = styled.p`
  color: #424242;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 30px;
`

export const ContactLogos = styled.img`
  width: 35px;
  margin-right: 15px;
`
export const ContactDescription = styled.p`
  color: #424242;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
  line-height: 1.5;
`
