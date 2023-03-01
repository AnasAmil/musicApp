import { Group, Title } from '@mantine/core'
import React from 'react'
import MusicQueue from './MusicQueue'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Queue = ({ songs, setMusicPlaying, musicPlaying }) => {
  return (
    <Group className='p-5 flex flex-col w-1/2 items-start'>
        <Title order={2} className='self-start'>Queue</Title>
        {
          songs.map((song, index) => {
            return(
              <MusicQueue key={index} {...song} index={index} setMusicPlaying={setMusicPlaying} musicPlaying={musicPlaying} />
            )
          })
        }
        
    </Group>
  )
}

export default Queue