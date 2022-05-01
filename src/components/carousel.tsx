import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import { HomepageShowsHeight25 } from './styles/homepage-shows-style';
import { CarouselHeader } from "./styles/carousel.style";

type CarouselProps = {
  title: string;
};

function Carousel(props: any) {

  const carousel = useRef<HTMLInputElement>(null);

  return (
    <>
      <HomepageShowsHeight25>
        <CarouselHeader>{props.title}</CarouselHeader>
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: 1 }} className="inner-carousel">
            {props.data}
          </motion.div>
        </motion.div>
      </HomepageShowsHeight25>
    </>
  );
}

export default Carousel;
