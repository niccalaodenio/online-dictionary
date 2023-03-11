import React from 'react'
import { useState } from 'react'
import debounce from 'lodash.debounce'
const Searchbar = () => {
    const [word, setWord] = useState('')

    const handleChange = (e) =>{
      const {value} = e.target
      setWord(value)
    }
    const handleSearch = debounce( handleChange, 500); 
    console.log(word)
  return (
    <div>
        <input type="search" name="" id="" onChange={handleSearch}/>
    </div>
  )
}

export default Searchbar