import { Group, Title, Paper } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'
import { IconPlayerSkipForward, 
         IconPlayerSkipBack, 
         IconPlayerPlay, 
         IconPlayerPause, 
         IconVolume,
         IconVolume3,
         IconRepeat,
         IconRepeatOff } from '@tabler/icons-react';
import PlayerHeader from './PlayerHeader';

const Playing = ({musicPlaying}) => {
  
  return (
    <Group className='p-5 flex flex-col w-1/2'>
        <Title order={2} className='self-start'>Now Playing</Title>
            <AudioPlayer 
              src={musicPlaying.song_file}
              showSkipControls
              showJumpControls={false}
              autoPlayAfterSrcChange
              header={<PlayerHeader musicPlaying={musicPlaying} />}
              showFilledProgress={false}
              customIcons={{
                next: <IconPlayerSkipForward stroke={1.5} siz={20} color='black'/>,
                previous: <IconPlayerSkipBack stroke={1.5} siz={20} color='black'/>,
                play: <IconPlayerPlay stroke={1.5} siz={20} className='text-[#F26979]' />,
                pause: <IconPlayerPause stroke={1.5} siz={20} className='text-[#F26979]'/>,
                volume: <IconVolume stroke={1.5} siz={20} color='black'/>,
                volumeMute: <IconVolume3 stroke={1.5} siz={20} color='black'/>,
                loop: <IconRepeat stroke={1.5} siz={20} color='black'/>,
                loopOff: <IconRepeatOff stroke={1.5} siz={20} color='black'/>,
              }}
              className='rounded-lg'
            />
    </Group>
  )
}

export default Playing