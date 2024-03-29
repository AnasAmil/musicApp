'use client'
import { Image, Text, Paper } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import "../globals.css"


const MyCard = ({title,color,categorieImage}) => {    

    return (
        <Paper  p="lg" className={`rounded-lg p-1 shadow-md h-32 overflow-hidden`} style={{backgroundColor: color}}>
            <Text className='font-bold text-white text-lg'>{title}</Text>
            <Image 
                src={categorieImage}
                width={60}
                height={60}
                className='float-right rotate-45 mt-12 ml-5'
            />
        </Paper>
        
    )
}

export default MyCard;