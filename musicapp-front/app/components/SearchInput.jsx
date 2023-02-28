"use client"

import React from 'react'
import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@mantine/core'

const SearchInput = () => {
  return (
    <TextInput 
        placeholder='Search'
        autoComplete='nope'
        icon={<IconSearch size={18} stroke={1.5} color='#F26979' />}
        radius='md'
        className='custom_input'
  />
  )
}

export default SearchInput