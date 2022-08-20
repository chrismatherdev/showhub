import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface CarouselProps {
  display: string;
}

export const CarouselStyle = styled.div`
  border-bottom: 10px;
  padding: 8px;
`;

export const ShowCarousel = styled.div`
  cursor: grab;
  overflow: hidden;
`;

export const CarouselHeader = styled.h2`
  color: black;
  padding-bottom: 15px;
  margin-top: 15px;
`;

export const MotionCarousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const MotionInnerCarousel = styled(motion.div)`
  display: flex;
  margin-bottom: 15px;
`;
