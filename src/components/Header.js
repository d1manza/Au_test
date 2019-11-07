import React from 'react';

function Header (props) {
  return (
    <div className="header">
      <div className="headingLayout">Здравствуйте человек №5365412</div>
      <div className="linkLayout">
        <a className="link" checked={props.indicatorStatus} onClick={props.changeIndicatorStatus}>Сменить статус</a>
      </div>
    </div>
  )
}

export default Header
