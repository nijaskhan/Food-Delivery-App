import Carousel from 'react-bootstrap/Carousel';

function Carouselcomp() {
    return (
        <Carousel>
            <Carousel.Item className='mb-4'>
                <div className="position-relative mt-5 pt-5 ms-5 d-grid grid-cols-2 grid-rows-1" style={{maxWidth: '90%', height: '85vh'}}>
                    <img className="card1" src="/reviews.png" alt="First slide" />
                    <img className="card2" src="/squared.png" alt="Second slide" />
                    <img className="card3" src="/horizontal.png" alt="Third slide" />
                </div>
                <Carousel.Caption>
                    <h3 className='mb-4 fw-bolder fs-2'>Leave reviews for all meals</h3>
                    <p>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className='mb-4'>
                <div className="position-relative mt-5 pt-5 ms-5 d-grid grid-cols-2 grid-rows-1" style={{maxWidth: '90%', height: '85vh'}}>
                    <img className="card1" src="/reviews.png" alt="First slide" />
                    <img className="card2" src="/squared.png" alt="Second slide" />
                    <img className="card3" src="/horizontal.png" alt="Third slide" />
                </div>
                <Carousel.Caption>
                    <h3 className='mb-4 fw-bolder fs-2'>Leave reviews for all meals</h3>
                    <p>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className='mb-4'>
                <div className="position-relative mt-5 pt-5 ms-5 d-grid grid-cols-2 grid-rows-1" style={{maxWidth: '90%', height: '85vh'}}>
                    <img className="card1" src="/reviews.png" alt="First slide" />
                    <img className="card2" src="/squared.png" alt="Second slide" />
                    <img className="card3" src="/horizontal.png" alt="Third slide" />
                </div>
                <Carousel.Caption>
                    <h3 className='mb-4 fw-bolder fs-2'>Leave reviews for all meals</h3>
                    <p>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carouselcomp;