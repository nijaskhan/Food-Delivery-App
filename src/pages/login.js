// import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Carouselcomp from '../../components/Carousel';
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import style from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Login = () => {
    const router = useRouter();
    useEffect(()=>{
        if(localStorage.getItem('user')){
            router.push('/');
        }
    }, [])
    const { register, handleSubmit } = useForm();
    const submit = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        router.push('/');
        // have to give the route to the backend api using axios for validating the password
    }
    return (
        <>
            {/* <Head>
                <title>Food Delivery | Login</title>
                <meta name="keywords" content="foodDelivery"/>
            </Head> */}
            <section className={`${style.gradientForm}`} style={{ overflowX: 'hidden' }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-12 px-0">
                        <div className="card vh-100 rounded-3 text-black">
                            <div className="row g-0 vh-100">
                                <div className="col-lg-6">
                                    <div className="card-body col-md-6 col-lg-6 mx-auto">
                                        <div className='pb-5'>
                                            <Image src='/main.png' height={40} width={80} alt='Logo' />
                                        </div>
                                        <div className="mt-1 mt-lg-4 mb-4 pb-1">
                                            <h1 className='pb-4' style={{ fontSize: '4rem' }}>Login</h1>
                                            <p style={{ color: '#545563' }}>Sign in with your data that you entered during your registration.</p>
                                        </div>
                                        <form onSubmit={handleSubmit(submit)}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" {...register("email", { required: true })} placeholder="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control {...register("password", { required: true })} type="password" placeholder="password" />
                                            </Form.Group>
                                            <div className="form-outline mb-4">
                                                <input type="checkbox" style={{ color: '#545563' }} id="form2Example22" />
                                                <span className='ps-2'>Keep me logged in</span>
                                            </div>
                                            <div className="text-center pt-3 pt-lg-4 mb-3 pb-1">
                                                <input className="form-control btn btn-primary" value="Login" type='submit' />
                                            </div>
                                            <div className="text-center mb-5 pb-1">
                                                <a className="text-primary" style={{ textDecorationLine: 'none' }}>Forgot password?</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                        <p className="mb-0 me-2">Don't have an account?</p>
                                        <button type="button" className="btn btn-outline-primary">Sign up</button>
                                    </div>
                                </div>
                                <div className={`col-lg-6 d-none d-lg-flex d-md-flex align-items-center ${style.gradientCustom2}`}>
                                    <div className='align-items-center mx-auto'>
                                        <Carouselcomp />
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

export default Login;