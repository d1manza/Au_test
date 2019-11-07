import React from 'react';

function Password (props) {
  let warning
  if (props.checkedPassword===1) {warning=<div>Укажите пароль</div>}
  if (props.checkedPassword===2) {warning=<div>Используйте не менее 5 символов</div>}
  return (
    <div className="CityPasMail">
      <div className="headingLayout">Пароль</div>
      <div className="menuLayout">
        <input
          className={props.checkedPassword===0 ? "inputText" : "inputText inputText--active"}
          type="text" value={props.valuePassword}
          onChange={props.changeValuePassword}
        >
        </input>
      </div>
      <div className="inscription">
        Ваш новый пароль должен содержать не менее 5 символов
      </div>
      <div className="outputWarning">
        {warning}
      </div>
    </div>
  )
}

export default Password
