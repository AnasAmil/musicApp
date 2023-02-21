"use client"

import React, { useState } from 'react'
import Link from "next/link"
import { Navbar, Group, Code } from '@mantine/core'
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

    const [active, setActive] = useState('Billing')
    const links = data.map((item) =>(
        <Link
            href={item.link}
            key={item.label}
            onClick={(e) => {
                e.preventDefault();
                setActive(item.label);
            }}
            className="flex items-center text-xs text-black font-bold p-2 mb-3 hover:text-[#F36979]"
        >
            <item.icon stroke={1.5} size={20} className='mr-3' />
            <span>{item.label}</span>
        
        </Link>
    ))

  return (
    <Navbar height={700} width={{ sm: 250 }} p="md">
      <Navbar.Section grow>
        <Group position="apart" className='p-2 mb-5'>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  )
}

export default NavbarSimple