'use client'
import React, { useState } from "react";
import { Group, Image, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import MyCard from "./MyCard";
import CarouselNextIcon from "./CarouselNextIcon";
import CarouselPrevIcon from "./CarouselPrevIcon";


const data = [
  {
      image: 'https://i.pinimg.com/564x/60/2d/19/602d19feb5f674eced70fbeb10c0aeb2.jpg',
      AlbumTitle: 'sad songs',
      artistName: 'mod',
  },
  {
      image: 'https://i.scdn.co/image/ab67706c0000da84cd0fbf5b5cabba4e547a2fac',
      AlbumTitle: 'love songs',
      artistName: 'some frensh shity artist',
  },
  {
      image: 'https://i.scdn.co/image/ab67706c0000da841b0308d62606d51dac9e987e',
      AlbumTitle: 'black album',
      artistName: 'Metalica',
  },
  {
      image: 'https://i.scdn.co/image/ab67616d0000b2737577bec9c216a902d2f78309',
      AlbumTitle: 'master of puppets',
      artistName: 'Metalica',
  },
  {
      image: 'https://i.scdn.co/image/ab67616d0000b2731b30bcd77238301ef8be2f11',
      AlbumTitle: 'night vision',
      artistName: 'Imagine dragons',
  },
  {
    image: 'https://i.scdn.co/image/ab67616d0000b2731b30bcd77238301ef8be2f11',
    AlbumTitle: 'night vision',
    artistName: 'Imagine dragons',
  },
  {
    image: 'https://i.scdn.co/image/ab67616d0000b2731b30bcd77238301ef8be2f11',
    AlbumTitle: 'night vision',
    artistName: 'Imagine dragons',
  },
  {
    image: 'https://i.scdn.co/image/ab67616d0000b2731b30bcd77238301ef8be2f11',
    AlbumTitle: 'night vision',
    artistName: 'Imagine dragons',
  },
  {
    image: 'https://i.scdn.co/image/ab67616d0000b2731b30bcd77238301ef8be2f11',
    AlbumTitle: 'night vision',
    artistName: 'Imagine dragons',
  },
]

const CategoriesCarousel = () => {

    const slides = data.map((item) => (
      <Carousel.Slide key={item.AlbumTitle}>
        <MyCard {...item} />
      </Carousel.Slide>
    ));

    return (
        <Group className="p-5">
          <Group className="flex">
              <Title order={2}>Top Artists <span>-Top 50</span></Title>
          </Group>
          <Carousel
            slideSize="20%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 3 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={2}
            className='w-full'
            loop
            nextControlIcon={<CarouselNextIcon />}
            previousControlIcon={<CarouselPrevIcon />}
          >
            {slides}
          </Carousel>
        </Group>
    )
}

export default CategoriesCarousel;