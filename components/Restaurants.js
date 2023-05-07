import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

const Restaurants = () => {
    return (
        <>
            <section className='py-3'>
                <div className='row mb-3'>
                    <h3 className='pb-4 fs-2' style={{ letterSpacing: '0.1px', fontWeight: 500 }}>Nearby Restaurants</h3>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
                        <div class="card rounded-4" style={{ width: '24rem', overflow: 'hidden' }}>
                            <Image src="/hotel.png" class="card-img-top cardImage" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
                            <div class="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 class="card-title pt-2">Royal Sushi House</h5>
                                    <i class="ri-shopping-bag-3-line ml-auto" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <p class="card-text text-muted"><i class="ri-time-line"></i> 30-40 min • $32 min sum </p>
                                <div className="border rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                    <Image src='/sushi.png' width={18} height={18} alt='icon' /><span className='ps-2'>Sushi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
                        <div class="card rounded-4" style={{ width: '24rem', overflow: 'hidden' }}>
                            <Image src="/hotel2.png" class="card-img-top cardImage" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 class="card-title pt-2">Burgers & Pizza</h5>
                                    <div className='position-relative'>
                                        <i className="ri-shopping-bag-3-line text-primary" style={{ fontSize: '1.6rem' }}></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                            4
                                        </span>
                                    </div>
                                </div>
                                <p class="card-text text-muted"><i class="ri-time-line"></i> 40-60 min • $24 min sum </p>
                                <div className='d-flex'>
                                    <div className="border rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                        <Image src='/pizza.png' width={18} height={18} alt='icon' /><span className='ps-2'>Burger</span>
                                    </div>
                                    <div className="border ms-2 rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                        <Image src='/pizza2.png' width={18} height={18} alt='icon' /><span className='ps-2'>Pizza</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
                        <div class="card rounded-4" style={{ width: '24rem', overflow: 'hidden' }}>
                            <Image src="/hotel3.png" class="card-img-top cardImage" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
                            <div class="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 class="card-title pt-2">Ninja sushi</h5>
                                    <i class="ri-shopping-bag-3-line ml-auto" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <p class="card-text text-muted"><i class="ri-time-line"></i> 20-40 min • $40 min sum </p>
                                <div className="border rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                    <Image src='/pizza.png' width={18} height={18} alt='icon' /><span className='ps-2'>Sushi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
                        <div class="card rounded-4" style={{ width: '24rem', overflow: 'hidden' }}>
                            <Image src="/hotel5.png" class="card-img-top cardImage" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
                            <div class="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 class="card-title pt-2">Sushi Master</h5>
                                    <i class="ri-shopping-bag-3-line ml-auto" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <p class="card-text text-muted"><i class="ri-time-line"></i> 60-70 min • $49 min sum </p>
                                <div className="border rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                    <Image src='/pizza.png' width={18} height={18} alt='icon' /><span className='ps-2'>Sushi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
                        <div class="card rounded-4" style={{ width: '24rem', overflow: 'hidden' }}>
                            <Image src="/hotel7.png" class="card-img-top cardImage" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
                            <div class="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 class="card-title pt-2">Kobe</h5>
                                    <i class="ri-shopping-bag-3-line ml-auto" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <p class="card-text text-muted"><i class="ri-time-line"></i> 20-30 min • $57 min sum </p>
                                <div className="border rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                    <Image src='/pizza.png' width={18} height={18} alt='icon' /><span className='ps-2'>Sushi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
                        <div class="card rounded-4" style={{ width: '24rem', overflow: 'hidden' }}>
                            <Image src="/hotel8.png" class="card-img-top cardImage" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
                            <div class="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 class="card-title pt-2">Japanese Sushi</h5>
                                    <i class="ri-shopping-bag-3-line ml-auto" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <p class="card-text text-muted"><i class="ri-time-line"></i> 30-50 min • $104 min sum </p>
                                <div className="border rounded-4 d-flex justify-content-center align-items-center w-25" style={{ backgroundColor: '#f2f2f2' }}>
                                    <Image src='/pizza.png' width={18} height={18} alt='icon' /><span className='ps-2'>Sushi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Restaurants;