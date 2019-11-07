import React from 'react';
import SortCity from './resources/SortCity'

function City (props) {
  let sortCity = SortCity()
  const sortCityInput=sortCity.map((city, index) => <option value={index} key={city.city}>{city.city}</option>)
  return (
    <div className="CityPasMail border">
      <div className="headingLayout">
        Ваш город
      </div>
      <div className="menuLayout">
        <select className="selectMenu" onChange={props.changeCity}>
          {sortCityInput}
        </select>
      </div>
      <div className="outputWarning">
      </div>
    </div>
  )
}

export default City
