import { Group, Title } from '@mantine/core'
import React from 'react'
import MusicQueue from './MusicQueue'



const Queue = () => {
  return (
    <Group className='p-5 flex flex-col w-1/2 items-start'>
        <Title order={2} className='self-start'>Queue</Title>
        <MusicQueue />
    </Group>
  )
}

export default Queue