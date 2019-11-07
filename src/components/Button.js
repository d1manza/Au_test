import React from 'react';
import ShowTime from './resources/ShowTime'

function Button (props) {
  let showTime
  if (props.checkedPassword===0 && props.checkedPasswordRepeat===0 && props.checkedMail===0) {showTime=<div>{ShowTime()}</div>}
  return (
    <div className="Button">
      <div className="buttonLayout">
        <button
          className="button"
          onClick={props.buttonFinish}
        >
          Изменить
        </button>
      </div>
      <div className="infoLayout">
        {showTime}
      </div>
    </div>
  )
}

export default Button
