import { Group, Text, Image, Button } from '@mantine/core'
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Lottie from 'lottie-react';
import React, { useState } from 'react'
import playing_animation from '../../public/playing_animation.json'

const MusicQueue = ({ song_avatar, song_file, title, index, setMusicPlaying, musicPlaying}) => {
  const [playing, setPlaying] = useState(true)
  return (
    <Group className='bg-white p-3 w-full rounded-lg flex justify-between'>
        <Group>
          <Text className='text-sm'>0{index+1}</Text>
          <Image 
              src={song_avatar}
              width={40}
              height={40}
              radius=''
          />
          <IconPlayerPlayFilled size={15} className='text-[#A2A0A1]' />
        </Group>
        <Text className='font-bold text-sm'>{ title }</Text>
        <Text className='text-[#A2A0A1] text-sm'>Draganov</Text>
        <Text className='text-[#A2A0A1] text-sm'>3:22</Text>
        {
          musicPlaying.title !== title 
          ? <Button className='bg-[#F26979] rounded-3xl'  compact  onClick={() => setMusicPlaying({title: title, song_avatar: song_avatar, song_file: song_file})}>
              <IconPlayerPlayFilled size={10} className='text-white' />
           </Button>
          : <Lottie animationData={playing_animation} loop={true}  className='w-10'/>
        }
    </Group>
  )
}

export default MusicQueue