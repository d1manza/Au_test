import React from 'react';

function CheckBox (props) {
  return (
    <div className="CheckBox">
      <div className="headingLayout">Я согласен</div>
      <div className="checkBoxLayout">
        <input
          className="check"
          type="checkbox"
          checked={props.valueCheckBox}
          onChange={props.changeValueCheckBox}
        >
        </input>
      </div>
      <div className="inscriptionLayout">принимать актуальную информаию на Email</div>
    </div>
  )
}

export default CheckBox
