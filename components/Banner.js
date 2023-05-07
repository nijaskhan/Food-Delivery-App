import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

const Banner = () => {
    return (
        <>
            <section className="container">
                <div className='row justify-content-center' >
                    <div className="col-md-6 col-lg-6 col-12 rounded-4 box-shadow my-3 mx-3 mb-md-0 card" style={{ backgroundColor: '#F3F4FF', border: 'none', width: '39rem' }}>
                        <div className="row d-flex">
                            <div className='col-lg-6 col-12 col-md-12'>
                                <Image src='/banner21.png' className='mt-5 card-img-left' alt='banner' width={353} height={240} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 order-first order-md-last">
                                <div className='d-block mt-3 ms-5 card-body'>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='bannerName'>All deserts</p>
                                            <h1 className='bannerOff mt-lg-5' style={{ color: '#4E60FF' }}>20% OFF</h1>
                                        </div>
                                        <p class="ms-5 d-flex d-lg-none">Deserty</p>
                                    </div>
                                    <div className='align-items-end d-lg-block d-none d-md-none d-sm-none'>
                                        <div class="d-flex bannerDesc align-items-end" style={{ height: '5.5rem' }}>
                                            <p class="m-0">Deserty</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 rounded-4 my-3 mx-2 mb-md-0 card" style={{ backgroundColor: '#F3F4FF', border: 'none', width: '39rem' }}>
                        <div className="row d-flex">
                            <div className='col-lg-6 col-12 col-md-12'>
                                <Image src='/banner22.png' className='mt-5 card-img-left' alt='banner' width={353} height={240} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 order-first order-md-last">
                                <div className='d-block mt-3 ms-5 card-body'>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='bannerName'>Big Burgers</p>
                                            <h1 className='bannerOff mt-lg-5' style={{ color: '#FD6D22' }}>50% OFF</h1>
                                        </div>
                                        <p class="m-5 d-flex d-lg-none">Fooddies</p>
                                    </div>
                                    <div className='align-items-end d-lg-block d-none d-md-none d-sm-none'>
                                        <div class="d-flex bannerDesc align-items-end" style={{ height: '5.5rem' }}>
                                            <p class="m-0">Fooddies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;