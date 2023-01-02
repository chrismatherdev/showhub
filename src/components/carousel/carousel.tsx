import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import {
  CarouselStyle,
  CarouselHeader,
  MotionCarousel,
  MotionInnerCarousel,
} from './carousel.style';
import { useMotionValue } from 'framer-motion';
import { ShowType } from '../../hooks/use-show';

type CarouselProps = {
  title: string;
  data: ShowType;
  marginBottom: string;
};

function Carousel(props: CarouselProps) {
  const [width, setWidth] = useState<number>(0);
  const widthTest = useMotionValue(0);

  const carousel = useRef<any>(null);
  const carouselTest = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  useEffect(() => {
    widthTest.set(carouselTest.current?.offsetWidth || 0);
  }, []);

  return (
    <>
      <CarouselStyle>
        <CarouselHeader>{props.title}</CarouselHeader>
        <MotionCarousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
          <MotionInnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
            {props.data}
          </MotionInnerCarousel>
        </MotionCarousel>
      </CarouselStyle>
    </>
  );
}

export default Carousel;
