import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

function Carouselcomp() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="position-relative mx-3 d-grid grid-cols-2 grid-rows-2">
                    <img className="card1" src="/reviews.png" alt="First slide" />
                    <img className="card2" src="/squared.png" alt="Second slide" />
                    <img className="card3" src="/horizontal.png" alt="Third slide" />
                </div>
                <Carousel.Caption className='pt-5'>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
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
    );
}

export default Carouselcomp;