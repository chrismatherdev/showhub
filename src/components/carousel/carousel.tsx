import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { HomepageShowsHeight25 } from '../homepage-shows/homepage-shows-style';
import { CarouselHeader, MotionCarousel, MotionInnerCarousel } from './carousel.style';
import { Shows } from '../../hooks/use-show';

type CarouselProps = {
  title: string;
  data: Shows;
  marginBottom: string;
};

function Carousel(props: CarouselProps) {
  const [width, setWidth] = useState<number>(0);

  const carousel = useRef<HTMLDivElement | number | undefined>();

  useEffect(() => {
    // console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <HomepageShowsHeight25>
        <CarouselHeader>{props.title}</CarouselHeader>
        <MotionCarousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
          <MotionInnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
            {props.data}
          </MotionInnerCarousel>
        </MotionCarousel>
      </HomepageShowsHeight25>
    </>
  );
}

export default Carousel;
