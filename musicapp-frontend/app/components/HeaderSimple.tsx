"use client"
import React from 'react'
<<<<<<< Updated upstream
import { Header, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react';

const HeaderSimple = () => {
  return (
    <Header height={60} mb={120}  className=' flex items-center border-b-2 bg-transparent w-full border-[#E6D3CF]'>
      <TextInput 
        placeholder='Search'
        autoComplete='nope'
        icon={<IconSearch size={18} stroke={1.5} color='#F26979' className='rounded-lg' />}
      />
=======
import { Header } from '@mantine/core'
import "../globals.css"
import SearchInput from './SearchInput'
import ProfilePic from './ProfilePic'

const HeaderSimple = () => {
  return (
    <Header height={60} mb={120} className=' flex items-center border-b-2 bg-transparent w-full border-[#E6D3CF]'>
      <SearchInput />
      <ProfilePic />
>>>>>>> Stashed changes
    </Header>
  )
}

export default HeaderSimple