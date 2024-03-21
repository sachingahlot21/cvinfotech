import React from 'react'
import '../App.css'

function DetailDiv({ name, population, region, capital, flag }) {

    return (
        <div className='detailDiv'>
            <div className='detailDiv1'>
                <img src={flag} alt='no img'></img>
            </div>
            <div className='detailDiv2'>
                <h1>{name}</h1>
                <h2>Population:{population}</h2>
                <h3>Region:{region}</h3>
                <h4>Capital:{capital}</h4>
            </div>
        </div>
    )
}

export default DetailDiv