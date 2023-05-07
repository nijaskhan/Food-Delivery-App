import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Banner from '../../components/Banner';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import MenuCards from '../../components/MenuCards';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/login');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Food Delivery | Home</title>
        <meta name="keywords" content="foodDelivery" />
      </Head>
      <Banner />
      <MenuCards />

      {/* Nearby restaurants section */}
      <section className='py-3'>
        <div className='row mb-3'>
          <h3 className='pb-4 fs-2' style={{ letterSpacing: '0.1px', fontWeight: 500 }}>Nearby Restaurants</h3>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
            <div class="card rounded-4" style={{ width: '24rem' }}>
              <Image src="/hotel.png" class="card-img-top" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
            <div class="card rounded-4" style={{ width: '24rem' }}>
              <Image src="/hotel2.png" class="card-img-top" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
            <div class="card rounded-4" style={{ width: '24rem' }}>
              <Image src="/hotel3.png" class="card-img-top" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
            <div class="card rounded-4" style={{ width: '24rem' }}>
              <Image src="/hotel5.png" class="card-img-top" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
            <div class="card rounded-4" style={{ width: '24rem' }}>
              <Image src="/hotel7.png" class="card-img-top" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3">
            <div class="card rounded-4" style={{ width: '24rem' }}>
              <Image src="/hotel8.png" class="card-img-top" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} alt="restaurant-image" width={200} height={200} />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
