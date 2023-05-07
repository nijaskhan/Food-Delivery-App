import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';

const Profile = () => {
    return (
        <section className='row py-2'>
            {/* first-coloumn */}
            <div className="col-md-12 col-12 col-lg-4">
                <h2>Settings</h2>
                <div className='pt-4'>
                    <div className={`border border-primary border-2 card rounded-4 ${styles.hoverProfile}`} style={{ height: '5rem' }}>
                        <div className="card-body d-flex align-items-center">
                            <Image src='/icon.png' width={50} height={50} />
                            <div className='ms-4'>
                                <h5 className="card-title">Account</h5>
                                <p className="card-text">Personal Information</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className={`card rounded-4 ${styles.hoverProfile}`} style={{ height: '5rem' }}>
                        <div className="card-body d-flex align-items-center">
                            <Image src='/icon2.png' width={50} height={50} />
                            <div className='ms-4'>
                                <h5 className="card-title">Address</h5>
                                <p className="card-text">Shipping Address</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className={`card rounded-4 ${styles.hoverProfile}`} style={{ height: '5rem' }}>
                        <div className="card-body d-flex align-items-center">
                            <Image src='/icon3.png' width={50} height={50} />
                            <div className='ms-4'>
                                <h5 className="card-title">Payment Method</h5>
                                <p className="card-text">COnnected credit cards</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className={`card rounded-4 ${styles.hoverProfile}`} style={{ height: '5rem' }}>
                        <div className="card-body d-flex align-items-center">
                            <Image src='/icon4.png' width={50} height={50} />
                            <div className='ms-4'>
                                <h5 className="card-title">Security</h5>
                                <p className="card-text">Password, 2FA</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* second coloumn */}
            <div className="col-md-12 col-lg-8 col-12">
                <h2 className='pb-2 pt-4 pt-lg-0'>Account</h2>
                <div className="border pt-4">
                    <div className='px-3'>
                        <h4 className='py-3 fw-bold'>Personal information</h4>
                        <p>Avatar</p>
                        <div className='d-flex align-items-center'>
                            <Image src='/mainAvatar.png' alt='Pro-Pic' width={115} height={110} />
                            <button className='btn btn-light btn-outline-primary ms-5 p-2 rounded-3'>Change</button>
                            <button className='btn btn-outline-light ms-4 p-2 text-muted rounded-3'>remove</button>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pt-4">
                                <form>
                                    <div className="mb-3">
                                        <label for="firstName" className="form-label">First name</label>
                                        <input type="tetx" className="form-control" value={'Nijas'} id='firstName' />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" id='email' value={'nijaskhan150@gmail.com'} className="form-control" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 pt-4">
                                <form>
                                    <div className="mb-3">
                                        <label for="lastName" className="form-label">Last name</label>
                                        <input type="text" id='lastName' value={'Khan'} className="form-control rounded-3" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="phoneNumber" className="form-label">Phone number</label>
                                        <input type="tel" id='phoneNumber' value={'+91 8547032547'} className="form-control rounded-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='row pt-5'>
                            <h4 className='py-3 fw-bold'>Email Notifications</h4>
                            <div className='col-md-6'>
                                <div className="form-check">
                                    <input className={`form-check-input border-radius ${styles.formCheckInput}`} type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                    <label className={styles.formCheckLabel} for="defaultCheck1">
                                        New deals
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className={`form-check-input border-radius ${styles.formCheckInput}`} type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                    <label className={styles.formCheckLabel} for="defaultCheck1">
                                        New restaurants
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className={`form-check-input border-radius ${styles.formCheckInput}`} type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                    <label className={styles.formCheckLabel} for="defaultCheck1">
                                        Order statuses
                                    </label>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-check">
                                    <input className={`form-check-input border-radius ${styles.formCheckInput}`} type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                    <label className={styles.formCheckLabel} for="defaultCheck1">
                                        Password changes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className={`form-check-input border-radius ${styles.formCheckInput}`} type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                    <label className={styles.formCheckLabel} for="defaultCheck1">
                                        Special offers
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className={`form-check-input border-radius ${styles.formCheckInput}`} type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                    <label className={styles.formCheckLabel} for="defaultCheck1">
                                        Newsletter
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ color: '#a6a6a6', backgroundColor: '#cccccc', height: 2 }} />
                    <div className="row pb-4 py-2 px-3">
                        <div className="col-lg-4 d-none d-lg-block d-md-none">
                            <button className='btn btn-light btn-outline-danger p-2 btn-lg rounded-3'>Log Out</button>
                        </div>
                        <button className='btn btn-light btn-outline-danger d-lg-none d-md-block d-block p-2 btn-lg rounded-3'>Log Out</button>
                        <div className="col-12 col-md-12 col-lg-8 d-flex pt-3 pt-lg-0">
                            <div className='ms-lg-auto mx-auto'>
                                {/* for large and medium screens */}
                                <button className='btn btn-outline-secondary p-2 btn-md d-lg-none d-md-none rounded-3'>Discard Changes</button>
                                <button className='btn btn-primary p-2 btn-ms ms-3 d-lg-none d-md-none rounded-3'>Save Changes</button>
                                {/* for smaller screens */}
                                <button className='btn btn-outline-secondary p-2 btn-lg d-none d-md-inline rounded-3'>Discard Changes</button>
                                <button className='btn btn-primary p-2 btn-lg ms-3 d-none d-md-inline rounded-3'>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;