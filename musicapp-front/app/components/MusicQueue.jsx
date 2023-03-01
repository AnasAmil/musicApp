import { Group, Text, Image, Button } from '@mantine/core'
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Lottie from 'lottie-react';
import React, { useState } from 'react'
import playing_animation from '../../public/playing_animation.json'

const MusicQueue = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <Group className='bg-white p-3 w-full rounded-lg flex'>
        <Text className='text-sm'>01</Text>
        <Image 
            src='data:image/png;base64,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'
            width={40}
            height={40}
        />
        <IconPlayerPlayFilled size={15} className='text-[#A2A0A1]' />
        <Text className='font-bold text-sm'>WILI</Text>
        <Text className='text-[#A2A0A1] text-sm px-14'>Draganov</Text>
        <Text className='text-[#A2A0A1] text-sm px-12'>3:22</Text>
        {
          playing 
          ? <Button className='bg-[#F26979] rounded-3xl'  compact >
              <IconPlayerPlayFilled size={10} className='text-white' />
           </Button>
          : <Lottie animationData={playing_animation} loop={true} className='w-10'/>
        }
    </Group>
  )
}

export default MusicQueue