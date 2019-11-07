import React from "react";

function ChangeTime() {
  let d = new Date ()
  let month=[]
  month[0]="января"; month[1]="февраля";  month[2]="марта"; month[3]="апреля"; month[4]="мая"; month[5]="июня";
  month[6]="июля"; month[7]="августа"; month[8]="сентября"; month[9]="октября"; month[10]="ноября"; month[11]="декабря";
  let showMonth = month[d.getMonth()]
  let day = d.getDate()
  let year = d.getFullYear()
  let hours = d.getHours()
  let minutes = d.getMinutes()
  let second = d.getSeconds()
  if (second<10) {second="0"+second}
  if (minutes<10) {minutes="0"+minutes}
  return (
    <div className="page__button__changeTime">
      последние изменения {day} {showMonth} {year} в {hours}:{minutes}:{second}
    </div>
  )
}

export default ChangeTime
