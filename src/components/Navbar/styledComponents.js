import styled from 'styled-components'

export const NavbarSmallContainer = styled.nav`
  background-color: ${props => props.bgColor};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 576px) {
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
export const NavLogo = styled.img`
  width: 100px;
  @media (min-width: 576px) {
    margin-left: 15px;
  }
  @media (min-width: 768px) {
    margin-left: 25px;
    width: 200px;
  }
`
export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 25px;
    align-items: center;
  }
`
export const NavButtons = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  @media (min-width: 576px) {
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`
export const MenuContainer = styled.ul`
  background: ${props => props.smallNavMenuContainerBgColor};
  list-style-type: none;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ListItem = styled.li`
  color: black;
  padding-bottom: 5px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: ${props => props.modalBgColor};
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => props.modalText};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const NavbarLargeContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 50px;
  margin-right: 10px;
`
export const LogOutBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 2px solid ${props => props.logoutBtnColor};
  color: ${props => props.logoutBtnColor};
  font-faamily: 'Roboto';
  font-weight: bold;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  background: transparent;
  font-size: 18px;
  border-radius: 5px;
`
