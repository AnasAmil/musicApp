"use client"
import React from 'react'
import { Header } from '@mantine/core'
import "../globals.css"
import SearchInput from './SearchInput'
import ProfilePic from './ProfilePic'

const HeaderSimple = () => {

  return (
    <Header height={60} mb={20} className='flex items-center border-b-2 bg-transparent w-full border-[#E6D3CF] justify-between px-8'>
      <SearchInput  />
      <ProfilePic  />
    </Header>
  )
}

export default HeaderSimple