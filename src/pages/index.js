import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../../components/Banner';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import MenuCards from '../../components/MenuCards';
import Restaurants from '../../components/Restaurants';

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
      <Restaurants />
    </>
  )
}
