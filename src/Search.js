import React from 'react'
import { FaSearch } from 'react-icons/fa'
 

const Search = ({cityName, setCityName, handleSearch}) => {
  return (
    <form onSubmit={handleSearch} className='search'>
        <label htmlFor="search"></label>
        <input 
            id='search'
            type="text"
            placeholder='Enter the city name here'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            />
        
        <FaSearch
            role='button'
            type='submit'
            tabIndex='0'
            onClick={handleSearch}
            style={{fontSize: '1.5rem',
                    cursor: 'pointer'
            }}/>
    </form>
  )
}

export default Search
