import { Group, Text, Image } from '@mantine/core'
import React from 'react'

const PlayerHeader = ({musicPlaying}) => {
  return (
    <Group className='flex flex-col'>
        <Text className='font-bold text-xs self-end'><span className='text-[#A2A0A1] text-xs font-medium'>next - </span>WILI</Text>
        <Image 
            src={musicPlaying.song_avatar}
            width={120}
            height={120}
        />

        <Text className='font-bold text-base leading-3'>{musicPlaying.title}</Text>
        <Text className='text-[#A2A0A1] leading-3'>Draganov</Text>
        
    </Group>
  )
}

export default PlayerHeader