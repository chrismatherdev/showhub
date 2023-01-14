import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Styled as S } from './carousel.style';

type CarouselProps = {
  title: string;
  data: JSX.Element[];
  marginBottom?: string;
};

function Carousel(props: CarouselProps) {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  return (
    <>
      <S.Container>
        <S.Header>{props.title}</S.Header>
        <S.Carousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
          <S.InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
            {props.data}
          </S.InnerCarousel>
        </S.Carousel>
      </S.Container>
    </>
  );
}

export default Carousel;
