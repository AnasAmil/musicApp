'use client'
import {Group, Image, Text, Card } from '@mantine/core';
import React from 'react';
import "../globals.css"


interface CardProps {
    image: string;
    AlbumTitle: string;
    artistName: string;
}


const MyCard = ({image, AlbumTitle, artistName}: CardProps) => {


    return (
        <Card  p="lg" className='flex flex-col bg-transparent'>
            <Card.Section className=''>
                <Image
                    src={image}
                    
                    className="object-contain rounded-xl h-25"
                    alt="albumImage"
                >
                </Image>
                <Text weight={500}>{AlbumTitle}</Text>
                <Text weight={500}>{artistName}</Text>
            </Card.Section>
        </Card>
        
    )
}

export default MyCard;