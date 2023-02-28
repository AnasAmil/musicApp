"use client"

import React, { useState } from 'react'
import Link from "next/link"
import { Navbar, Group, Code, Title } from '@mantine/core'
import { 
  IconHome,
  IconSearch,
  IconPlaylist,
  IconSquarePlus  } from '@tabler/icons-react';

const data = [
    { link: '', label: 'Home', icon: IconHome },
    { link: '', label: 'Search', icon: IconSearch },
    { link: '', label: 'Library', icon: IconPlaylist },
    { link: '', label: 'Create Playlist', icon: IconSquarePlus },
];

const NavbarSimple = () => {

    const [active, setActive] = useState('Home')
    const links = data.map((item) =>(
        <Link
            href={item.link}
            key={item.label}
            onClick={(e) => {
                e.preventDefault();
                setActive(item.label);
            }}
            className={`flex items-center text-xs ${active == item.label ? "text-[#F36979]" : "text-black"}  font-bold p-2 mb-3 hover:text-[#F36979]`}
        >
            <item.icon stroke={1.5} size={20} className='mr-3' />
            <span>{item.label}</span>
        
        </Link>
    ))

  return (
    <Navbar height='100vh' className='w-[15vw]' p="md">
      <Navbar.Section className='border-b-2'>
        <Group position="apart" className='p-2 mb-5'>
          <Code className='font-bold text-lg'>MusicApp</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section>
        <Group className='flex flex-col items-start p-2 mt-3'>
            <span className='font-bold text-[#9E9E9E]'>My Playlists</span>
            <ul className='font-bold text-xs'>
              <li className='py-2 hover:text-[#F36979] cursor-pointer'>Tunes</li>
              <li className='py-2 hover:text-[#F36979] cursor-pointer'>Rai</li>
              <li className='py-2 hover:text-[#F36979] cursor-pointer'>Rap</li>
              <li className='py-2 hover:text-[#F36979] cursor-pointer'>Pop</li>
            </ul>
        </Group>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavbarSimple