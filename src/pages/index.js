import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
// import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/login');
    }
  }, [])

  return (
    <>
      <Head>
        <title>Food Delivery | Home</title>
        <meta name="keywords" content="foodDelivery"/>
      </Head>
      <section className="container">
        <div className='row justify-content-center'>
          <div className="col-md-6 rounded-4 box-shadow" style={{ backgroundColor: '#F3F4FF', width: '48%' }}>  {/* box shadow def in global.css */}
            <div className="d-flex">
              <Image src='/banner21.png' className='mt-5' alt='banner' width={353} height={240} />
              <div className='d-block mt-5'>
                <p className='bannerName'>All deserts</p>
                <h1 className='bannerOff' style={{ color: '#4E60FF' }}>20% OFF</h1>
                <div className='align-items-end'>
                  <div class="d-flex bannerDesc align-items-end" style={{height: '5.5rem'}}>
                    <p class="m-0">Deserty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rounded-4 ms-5" style={{ backgroundColor: '#FFF3ED', width: '48%' }}>
            <div className="d-flex">
              <Image src='/banner22.png' className='mt-5' alt='banner' width={353} height={240} />
              <div className='d-block mt-5'>
                <p className='bannerName'>All deserts</p>
                <h1 className='bannerOff text-danger'>50% OFF</h1>
                <div className='align-items-end'>
                  <div class="d-flex bannerDesc align-items-end" style={{height: '5.5rem'}}>
                    <p class="m-0">Fooddies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
