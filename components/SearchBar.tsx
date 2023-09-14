"use client"
import React from 'react'
import {SearchManufacturer} from "./"
import { useState } from 'react'

const SearchBar = () => {
    const [manufacturer,setManufacturer] = useState('')
  return (
    <form className='searchbar' >
        <div className='search__item'>
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={manufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar