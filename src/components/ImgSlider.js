import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import '../App.css'
export default function ImgSlider() {
  return (
    <div >
      <MDBCarousel showControls  className='slider'  > 
      <MDBCarouselItem style={{height:'300px'}}
        className='w-100 '
        itemId={1}
        src='https://previews.123rf.com/images/vectorlab/vectorlab1901/vectorlab190100067/123179130-flash-sale-purple-gradient-horizontal-poster-online-ecommerce-discount-promotion-typography-template.jpg'
        alt='...'
      />
      <MDBCarouselItem style={{height:'300px'}}
        className='w-100 d-block'
        itemId={2}
        src='https://www.shutterstock.com/image-vector/delivery-online-tracking-isometric-banner-600w-1517975468.jpg'
        alt='...'
      />
      <MDBCarouselItem style={{height:'300px'}}
        className='w-100 d-block'
        itemId={3}
        src='https://previews.123rf.com/images/jokiewalker/jokiewalker2205/jokiewalker220500020/185579970-online-store-concept-on-laptop-screen-with-striped-awning-and-shoe-sneaker-pastel-color-on-screen-wi.jpg'
        alt='...'
      />
    </MDBCarousel>
    </div>
  );
}