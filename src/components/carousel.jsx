import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: 'https://sombrero.jdsports.id/pub/media/wysiwyg/99_Super_Style_1920x840.jpg', 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image: 'https://sombrero.jdsports.id/pub/media/wysiwyg/Adidas_X_The_Simpson_1920x840.jpg', 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image: 'https://sombrero.jdsports.id/pub/media/wysiwyg/NB_1906R_V2_1920x840.jpg', 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5">
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
              alt="slider image"
              key={slide.image}
        />
        {/* <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption> */}
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;