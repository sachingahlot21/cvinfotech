import { useState, useEffect } from 'react'
import './App.css'
import DetailDiv from './components/DetailDiv'

function App() {
  const [countryData, setCountryData] = useState([])
  const [findCountry, setFindCountry] = useState([])
  const [searchCountry, setSearchCountry] = useState([])
  const [filter, setFilter] = useState('none')//handle select options
  const [filterData, setFilterData] = useState([]) //handle selected options values


  const dataFetch = async () => {
    const url = await fetch('https://restcountries.com/v3.1/all')
    const mainData = await url.json()
    setCountryData(mainData)
  }

  useEffect(() => {
    const result = countryData.filter((country) => (
      country.region == filter
    ))
    setFilterData(result)
    console.log(filter, filterData)
  }, [filter])


  useEffect(() => {
    const result = countryData.filter((country) => (
      country.name.common === findCountry
    ))
    console.log(result.length)
    console.log(searchCountry.length)
    if (result.length == 1) {
      setSearchCountry(result)

      console.log(result)
      console.log(searchCountry.length)
    }
    else{
      setSearchCountry([])
    }
  }, [findCountry])

  useEffect(() => {
    dataFetch()
  }, [])



  return (
    <>
      <div className='mainContainer'>
        <div className='headDiv'>
          <p>Where in the world?</p>
        </div>
        <div className='mainDiv'>
          <div className='btnsDiv'>
            <div className='btnsDiv1'>
              <input type='text' onChange={(e) => setFindCountry(e.target.value)} placeholder='Search for a country...'></input>
            </div>
            <div className='btnsDiv2'>
              <select onChange={(e) => setFilter(e.target.value)} defaultValue='none'>
                <option key='1' value='none'>Filter by Region</option>
                <option key='2' value='Africa'>Africa</option>
                <option key='3' value='Americas'>America</option>
                <option key='4' value='Asia'>Asia</option>
                <option key='5' value='Europe'>Europe</option>
              </select>
            </div>
          </div>

        </div>
        <div className='mainContent'>

          {
            filter == 'none' ?
              (
                searchCountry.length === 1 ?


                  searchCountry.map((country, index) => (
                    <DetailDiv key={index} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={country.flags.png} />
                  ))

                  :

                  countryData.map((country, index) => (
                    <DetailDiv key={index} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={country.flags.png} />
                  ))
              )
              :
              (
                searchCountry.length == 1 ?

                  searchCountry.map((country, index) => (
                    <DetailDiv key={index} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={country.flags.png} />
                  ))

                  :

                  filterData.map((country, index) => (
                    <DetailDiv key={index} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={country.flags.png} />
                  ))


              )

          }

        </div>
      </div>


    </>
  )
}

export default App
