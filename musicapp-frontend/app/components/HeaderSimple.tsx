import React from 'react'
import { Header } from '@mantine/core'
import "../globals.css"
import SearchInput from './SearchInput'

const HeaderSimple = () => {
  return (
    <Header height={60} mb={120} className=' flex items-center border-b-2 bg-transparent w-full border-[#E6D3CF]'>
      <SearchInput />
    </Header>
  )
}

export default HeaderSimple