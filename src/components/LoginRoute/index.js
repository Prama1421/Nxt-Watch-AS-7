import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LoginMainContainer,
  FormContainer,
  NxtWatchLogoImage,
  InputContainer,
  LabelElement,
  InputElement,
  CheckboxContainer,
  CheckboxElement,
  CheckboxLabel,
  LoginButton,
  LoginErrorElement,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const inputType = showPassword ? 'text' : 'password'
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#212121' : '#f9f9f9'
          const formBgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
          const formLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const labelColor = isDarkTheme ? '#ffffff' : '#64748b'

          const formShadow = isDarkTheme ? null : `8px 8px 8px 8px #f1f1f1`
          const showPasswordColor = isDarkTheme ? '#ffffff' : '#1e293b'

          return (
            <LoginMainContainer bgColor={bgColor}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                formBgColor={formBgColor}
                formShadow={formShadow}
              >
                <NxtWatchLogoImage src={formLogo} alt="website logo" />
                <InputContainer>
                  <LabelElement htmlFor="username" labelColor={labelColor}>
                    USERNAME
                  </LabelElement>
                  <InputElement
                    id="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelElement htmlFor="password" labelColor={labelColor}>
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    id="password"
                    type={inputType}
                    value={password}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <CheckboxElement
                    id="checkbox"
                    type="checkbox"
                    onChange={this.onShowPassword}
                  />
                  <CheckboxLabel
                    htmlFor="checkbox"
                    showPasswordColor={showPasswordColor}
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && (
                  <LoginErrorElement>*{errorMsg}</LoginErrorElement>
                )}
              </FormContainer>
            </LoginMainContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default LoginRoute
