"use client"
import React, { useEffect, useState } from 'react'
import NavbarSimple from './components/NavbarSimple'
import HeaderSimple from './components/HeaderSimple'
import CategoriesCarousel from './components/CategoriesCarousel'
import axios from 'axios'
import Playing from './components/Playing'


const Home = () => {
  const [categories, setCategories] = useState([])
   useEffect(() => {
      const getCategories = async () => {
        await axios.get('http://localhost:8000/api/categories/')
          .then((res) => {
            setCategories(res.data)
          }).catch(err => {
            console.log(err);
            
          })
      }

      getCategories()
  }, [])  
  
  return (
    <>
      <div className='flex'>
        <NavbarSimple />
        <div className='w-[85vw]'  >
          <HeaderSimple />
          <CategoriesCarousel categories={categories} />
          <div className='flex'>
            <Playing />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
