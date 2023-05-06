import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import Carouselcomp from '../../components/Carousel';
import style from '../styles/Home.module.css'

const Login = () => {
    return (
        <>
            <section className={`${style.gradientForm}`} style={{ overflowX: 'hidden' }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-12 px-0">
                        <div className="card vh-100 rounded-3 text-black">
                            <div className="row g-0 vh-100">
                                <div className="col-lg-6">
                                    <div className="card-body col-md-6 col-lg-6 mx-auto">
                                        <div className='pb-5'>
                                            <Image src='/main.png' height={40} width={80} />
                                        </div>
                                        {/* <h1 className='pb-5' style={{fontSize: '1.2rem', fontWeight: '900'}}>Food <br/><span className='text-primary'>Delivery</span></h1> */}
                                        <div className="mt-1 mt-lg-4 mb-4 pb-1">
                                            <h1 className='pb-4' style={{ fontSize: '4rem' }}>Login</h1>
                                            <p style={{ color: '#545563' }}>Sign in with your data that you entered during your registration.</p>
                                        </div>
                                        <form>
                                            <div className="form-outline mb-4" style={{ color: '#545563' }}>
                                                <label className="form-label" for="form2Example11">Email</label>
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="Phone number or email address" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form2Example22" style={{ color: '#545563' }}>Password</label>
                                                <input type="password" id="form2Example22" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="checkbox" style={{ color: '#545563' }} id="form2Example22" />
                                                <span className='ps-2'>Keep me logged in</span>
                                            </div>
                                            <div className="text-center pt-1 mb-3 pb-1">
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