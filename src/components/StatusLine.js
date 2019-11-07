import React from 'react';

function StatusLine (props) {
  return (
    <div className="status">
    {!props.indicatorStatus
        ?
      <div className="static">
        {props.valueStatus}
      </div>
        :
      <input
        className="active"
        type="text"
        value={props.valueStatus}
        onChange={props.changeValueStatus}>
      </input>
    }
    </div>
  )
}

export default StatusLine
