'use client'
import React, { useState } from "react";
import { Group, Image, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import MyCard from "./MyCard";
import CarouselNextIcon from "./CarouselNextIcon";
import CarouselPrevIcon from "./CarouselPrevIcon";



const CategoriesCarousel = ({ categories }) => {
  

    return (
        <Group className="p-5">
          <Group className="flex">
              <Title order={2}>Categories <span className="text-[#9B918B] text-sm font-medium ml-1">-Top 50</span></Title>
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
            {
              categories && categories.map((categorie, index) => {
                  return (
                    <Carousel.Slide key={index}>
                      <MyCard {...categorie} />
                    </Carousel.Slide>
                  )
              })
            }
          </Carousel>
        </Group>
    )
}

export default CategoriesCarousel;