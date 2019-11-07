import React from 'react'
import './App.css'

import SortCity from './components/resources/SortCity'

import Header from './components/Header'
import StatusLine from './components/StatusLine'
import City from './components/City'
import Password from './components/Password'
import PasswordRepeat from './components/PasswordRepeat'
import Mail from './components/Mail'
import CheckBox from './components/CheckBox'
import Button from './components/Button'

let sortCity=SortCity()

class App extends React.Component {
  state = {
    indicatorStatus: false,
    indicatorCheckBox: true,
    valueStatus: "Прежде чем действовать надо понять",
    valuePassword: "",
    checkedPassword: 0,
    valuePasswordRepeat: "",
    checkedPasswordRepeat: 0,
    valueMail: "",
    checkedMail: 0,
    valueCity: sortCity[0].city,
    indicatorWarning: 0
  }
  changeIndicator = (field) => event => {
    this.setState({ [field]: !event.target.checked });
  }
  textInputChange = (field) => event => {
    this.setState({ [field]: event.target.value });
  }
  textSelectChange = event => {
    this.setState({ valueCity: sortCity[event.target.value].city });
  }
  changeCheckBox = field => event => {
    this.setState({ [field]: event.target.checked });
  }
  buttonFinish = field => event => {
    //Проверка пароля
    if (this.state.valuePassword.length===0) {
      this.setState({checkedPassword: 1})
    } else {
        if (this.state.valuePassword.length<5) {
          this.setState({checkedPassword: 2})
        } else {
            this.setState({checkedPassword: 0})
          }
      }
    // Проверка повторного пароля
    if (this.state.valuePasswordRepeat.length===0) {
      this.setState({checkedPasswordRepeat: 1})
    } else {
        if (this.state.valuePassword!==this.state.valuePasswordRepeat) {
          this.setState({checkedPasswordRepeat: 2})
        } else {
            this.setState({checkedPasswordRepeat: 0})
          }
      }
    // Проверка почты
    if (this.state.valueMail.length===0) {
      this.setState({checkedMail: 1})
    } else {
        if (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.valueMail)) {
          this.setState({checkedMail: 0})
        } else {
            this.setState({checkedMail: 2})
          }
      }
  }
  render() {
    return (
      <div className="wrapper" >
        <Header
          indicatorStatus={this.state.indicatorStatus}
          changeIndicatorStatus={this.changeIndicator("indicatorStatus")}
        />
        <StatusLine
          valueStatus={this.state.valueStatus}
          changeValueStatus={this.textInputChange("valueStatus")}
          indicatorStatus={this.state.indicatorStatus}
        />
        <City changeCity={this.textSelectChange}/>
        <Password
          changeValuePassword={this.textInputChange("valuePassword")}
          valuePassword={this.state.valuePassword}
          checkedPassword={this.state.checkedPassword}
        />
        <PasswordRepeat
          changeValuePasswordRepeat={this.textInputChange("valuePasswordRepeat")}
          valuePasswordRepeat={this.state.valuePasswordRepeat}
          checkedPasswordRepeat={this.state.checkedPasswordRepeat}
        />
        <Mail
          changeValueMail={this.textInputChange("valueMail")}
          valueMail={this.state.valueMail}
          checkedMail={this.state.checkedMail}
        />
        <CheckBox
          changeValueCheckBox={this.changeCheckBox("indicatorCheckBox")}
          valueCheckBox={this.state.indicatorCheckBox}
        />
        <Button
          buttonFinish={this.buttonFinish("checkedButton")}
          checkedButton={this.state.checkedButton}
          checkedPassword={this.state.checkedPassword}
          checkedPasswordRepeat={this.state.checkedPasswordRepeat}
          checkedMail={this.state.checkedMail}
        />
      </div>
    )
  }
}

export default App
