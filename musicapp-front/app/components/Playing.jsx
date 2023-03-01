import { Group, Title, Paper } from '@mantine/core'
import React from 'react'

const Playing = () => {
  return (
    <Group className='p-5'>
        <Title order={2}>Now Playing</Title>
        <Paper className='bg-white shadow-md'></Paper>
    </Group>
  )
}

export default Playing