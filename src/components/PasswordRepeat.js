import React from 'react';

function PasswordRepeat (props) {
  let warning
  if (props.checkedPasswordRepeat===1) {warning=<div>Укажите пароль</div>}
  if (props.checkedPasswordRepeat===2) {warning=<div>Пароли не совпадают</div>}
  return (
    <div className="CityPasMail">
      <div className="headingLayout">Пароль еще раз</div>
      <div className="menuLayout">
        <input
          className={props.checkedPasswordRepeat===0 ? "inputText" : "inputText inputText--active"}
          type="text"
          value={props.valuePasswordRepeat}
          onChange={props.changeValuePasswordRepeat}
        >
        </input>
      </div>
      <div className="inscription">
        Повторите пароль, чтобы обезопасить вас с нами на случай ошибки
      </div>
      <div className="outputWarning">
        {warning}
      </div>
    </div>
  )
}

export default PasswordRepeat
