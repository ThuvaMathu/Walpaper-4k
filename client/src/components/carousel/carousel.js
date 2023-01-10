import { useState, useEffect } from 'react';
const Carousel = () => {
  const [gap, setGap] = useState(16);
  const [width, setWidth] = useState(0);
  const [carousel, setCarousel] = useState(null);
  const [content, setContent] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  useEffect(() => {
    const handleResize = () => setWidth(carousel.offsetWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  const handleNext = () => {
    setCarousel((carousel.scrollLeft += width + gap));
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      setNext({ display: 'none' });
    }
    if (carousel.scrollWidth !== 0) {
      setPrev({ display: 'flex' });
    }
  };
  
  const handlePrev = () => {
    setCarousel((carousel.scrollLeft -= width + gap));
    if (carousel.scrollLeft - width - gap <= 0) {
      setPrev({ display: 'none' });
    }
    if (!(content.scrollWidth - width - gap <= carousel.scrollLeft + width)) {
      setNext({ display: 'flex' });
    }
  };
  
  
  return (
    <div>
     <div id="carousel" ref={el => setCarousel(el)}>
  <h1>Carousel</h1>
</div>
<div id="content" ref={el => setContent(el)}>
  <h1>Carousel</h1>
</div>
<button id="next" ref={el => setNext(el)} onClick={handleNext}>
  Next
</button>
<button id="prev" ref={el => setPrev(el)} onClick={handlePrev}>
  Prev
</button>

    </div>
  );
};

export default Carousel