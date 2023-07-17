import React, { useState } from 'react';
import styled from 'styled-components';
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io'

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 980px;
  height: 600px;
  overflow: hidden;
  padding: 5px 10px 10px 10px;
  @media (max-width: 764px){
    width: 100%;
  }
`;

const CarouselSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 764px){
    object-fit: contain;
  }
`;

const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const PreviousButton = styled(CarouselButton)`
  left: 20px;
`;

const NextButton = styled(CarouselButton)`
  right: 20px;
`;

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#333' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
`;

const images = [
  'https://is3-ssl.mzstatic.com/image/thumb/3DZAkXzngEO4hUFlFGsLzA/1250x703.jpg',
  'https://is2-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/1250x703.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/4pat5RmBvzlFi70xgv4Tjw/1250x703.jpg',
  'https://is3-ssl.mzstatic.com/image/thumb/XTad8Uq7ZHzIbP7QhiGjqA/1250x703.jpg',
  'https://is2-ssl.mzstatic.com/image/thumb/yz8wdRYi6Dput1ZLlsV0MA/1250x703.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/dG02IJQ4XhD05Z5dkoMrRw/1250x703.jpg'
];

const Carousel = () => {

  const Icons = {
    size: '28px'
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <CarouselWrapper>
        <PreviousButton onClick={goToPreviousSlide}>
          <IoMdArrowDropleft {...Icons}/>
        </PreviousButton>
        <CarouselSlide src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <NextButton onClick={goToNextSlide}>
          <IoMdArrowDropright {...Icons}/>
        </NextButton>
      </CarouselWrapper>
      <IndicatorContainer>
        {images.map((_, index) => (
          <IndicatorDot
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </IndicatorContainer>
    </>
  );
};

export default Carousel;