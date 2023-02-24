"use client"
import React from 'react'
import NavbarSimple from './components/NavbarSimple'
import HeaderSimple from './components/HeaderSimple'
import CategoriesCarousel from './components/CategoriesCarousel'
const Home = () => {
  return (
    <>
      <div className='flex'>
        <NavbarSimple />
        <div className='w-full'>
          <HeaderSimple />
          <CategoriesCarousel />
        </div>
      </div>
    </>
  )
}

export default Home
