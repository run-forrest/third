"use client"
import React from 'react'
import {SearchManufacturer} from "./"
import { useState } from 'react'

const SearchBar = () => {
    const [manufacturer,setManufacturer] = useState('')


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('----')
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={manufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar