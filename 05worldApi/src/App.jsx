import { useState, useEffect } from 'react'
import './App.css'
import DetailDiv from './components/DetailDiv'

function App() {
  const [countryData, setCountryData] = useState([])

  const dataFetch = async () => {
    const url = await fetch('https://restcountries.com/v3.1/all')
     const mainData = await url.json()
    console.log(mainData)
    setCountryData(mainData)
    console.log(countryData)
  }

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
              <input type='text' placeholder='Search for a country...'></input>
            </div>
            <div className='btnsDiv2'>
              <select>
                <option key='1' value='none'>Filter by Region</option>
                <option key='2' value='Africa'>Africa</option>
                <option key='3' value='America'>America</option>
                <option key='4' value='Asia'>Asia</option>
                <option key='5' value='Europe'>Europe</option>
              </select>
            </div>
          </div>

        </div>
        <div className='mainContent'>
          {
            countryData.map((country) => (
              <DetailDiv name={country.name.common} population={country.population} region={country.region} capital={country.capital[0]} flag={country.flags.png} />
            ))
          }


        </div>
      </div>


    </>
  )
}

export default App
