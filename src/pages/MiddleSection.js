import React from 'react';
import Carousel,{ CarouselItem } from './Carousel';
import Albedo from '../assets/albedocovercrop.png';
import Metal from '../assets/metalcovercrop.png';
import Pure from '../assets/purecovercrop.png';

function MiddleSection() {
  return (
    <div className="MIDDLESECTION">
      <section>
        <div className="carou">
            <Carousel>
            <CarouselItem>
              <h3>Albedo Katana</h3>
              <img src={Albedo} alt ="" />
            </CarouselItem>
            <CarouselItem>
              <h3>Metallica</h3>
              <img src ={Metal} alt ="metal"/>
            </CarouselItem>
            <CarouselItem>
              <h3>Pure</h3>
              <img src={Pure} alt="pure" />
            </CarouselItem>
            </Carousel>
        </div>
        </section>
    </div>
  )
}

export default MiddleSection