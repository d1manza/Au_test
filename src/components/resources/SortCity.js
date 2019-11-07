import citiesData from "./cities.json"


function SortMas () {
  let cities = citiesData.filter(city => (city.population > 50000));

  cities.sort(function(a, b) {return b.population - a.population})

  let mostPopulation = cities[0]
  let mostAlphabet = cities.slice([1], [cities.length])

  mostAlphabet.sort(function (a, b) {
      var nameA=a.city.toLowerCase(), nameB=b.city.toLowerCase()
      if (nameA < nameB) //сортируем строки по возрастанию
        return -1
      if (nameA > nameB)
        return 1
        return 0
    }
  )
  return (
    cities=[mostPopulation, mostAlphabet].flat()
  )
}

export default SortMas
