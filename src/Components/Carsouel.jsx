import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide from './slide.jpg';

const Carsouel = () => {
    return (
        <div className='carsole'>
            <Carousel>
                <Carousel.Item className='sliding'>
                    <img src={slide} text="First slide" />
                    <Carousel.Caption style={{ "color": "black" }}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='sliding'>
                    <img src={slide} text="Second slide" />
                    <Carousel.Caption style={{ "color": "black" }}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='sliding'>
                    <img src={slide} text="Third slide" />
                    <Carousel.Caption style={{ "color": "black" }}>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default Carsouel