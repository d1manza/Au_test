import React from 'react';

function Mail (props) {
  let warning
  if (props.checkedMail===1) {warning=<div>Укажите Email</div>}
  if (props.checkedMail===2) {warning=<div>Неверный Email</div>}
  return (
    <div className="CityPasMail border">
      <div className="headingLayout">Электронная почта </div>
      <div className="menuLayout">
        <input
          className={props.checkedMail===0 ? "inputText" : "inputText inputText--active"} 
          type="text"
          value={props.valueMail}
          onChange={props.changeValueMail}
        >
        </input>
      </div>
      <div className="inscription">
        Вы можете сменить адрес, указанный при регистрации
      </div>
      <div className="outputWarning">
        {warning}
      </div>
    </div>
  )
}

export default Mail
