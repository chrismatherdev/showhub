import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarouselStyle = styled.div`
  border-bottom: 10px;
  padding: 8px;
`;

export const CarouselHeader = styled.h2`
  padding-bottom: 15px;
  margin-top: 15px;
  padding: 8px;
`;

export const MotionCarousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const MotionInnerCarousel = styled(motion.div)`
  display: flex;
  margin-bottom: 15px;
`;

export const Styled = {
  Container: styled.div`
    border-bottom: 10px;
    padding: 8px;
  `,

  Header: styled.h2`
    padding-bottom: 15px;
    margin-top: 15px;
    padding: 8px;
  `,

  Carousel: styled(motion.div)`
    cursor: grab;
    overflow: hidden;
  `,

  InnerCarousel: styled(motion.div)`
    display: flex;
    margin-bottom: 15px;
  `,
};
