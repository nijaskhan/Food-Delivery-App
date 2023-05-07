import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
// import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Home.module.css';
import Banner from '../../components/Banner';
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
        <meta name="keywords" content="foodDelivery" />
      </Head>
      <Banner />
    </>
  )
}
