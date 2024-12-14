import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  width: 280px;
  height: 370px;
  background-color: ${props => props.formBgColor};
  box-shadow: ${props => props.formShadow};
  border: none;
  border-radius: 10px;
  padding: 15px;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    width: 380px;
    height: 400px;
  }
`

export const NxtWatchLogoImage = styled.img`
  width: 150px;
  align-self: center;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const LabelElement = styled.label`
  color: ${props => props.labelColor};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 13px;
`
export const InputElement = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 7px;
  border: 2px solid #cccccc;
  padding-left: 15px;
  font-family: 'Roboto';
  font-size: 15px;
  border-radius: 3px;
  outline: none;
  color: #64748b;
  background: transparent;
`
export const CheckboxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CheckboxElement = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  cursor: pointer;
`

export const CheckboxLabel = styled(LabelElement)`
  color: ${props => props.showPasswordColor};
  font-weight: 500;
  font-size: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  text-align: center;
  color: #ffffff;
  background-color: #3b82f6;
  margin-top: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export const LoginErrorElement = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 10px;
`
