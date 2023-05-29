import React from 'react'
import {Carousel} from 'react-bootstrap'


const HeroSlider = () => {
  return (
    <Carousel fade>


  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/14337862/pexels-photo-14337862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/16863602/pexels-photo-16863602/free-photo-of-heavy-snowfall-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
  )
}

export default HeroSlider
