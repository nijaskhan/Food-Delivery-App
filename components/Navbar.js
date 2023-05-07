import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
	return (
		<>
		<nav className="navbar navbar-expand-lg bg-white mt-3 ">
			<div className="container">
				<a className="navbar-brand" href="#">
					<Image src='/main.png' height={40} width={80} alt='Logo' />
				</a>

				<form class="d-flex d-lg-flex d-md-none d-none ms-5">
					<div className="input-group justify-content-center align-items-center">
						<input type="text" className="form-control position-relative rounded-3" style={{backgroundColor: '#f2f2f2', border: 'none'}} placeholder="Search" />
						<i className="ri-search-line position-absolute top-0 end-0 mt-1 text-muted me-3"></i>
					</div>
				</form>

				<div className="ms-auto d-lg-none d-md-flex d-sm-flex">
					<ul className="ms-auto me-4 d-sm-flex d-flex d-flex d-lg-none mt-3" style={{ listStyleType: 'none' }}>
						<li className="nav-item">
							<div className='position-relative' style={{ backgroundColor: '#e6e6e6', borderRadius: '10px' }}>
								<i className="ri-shopping-bag-3-line text-primary p-2" style={{ fontSize: '1.8rem' }}></i>
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
									4
								</span>
							</div>
						</li>
						<li className="nav-item ms-4">
							<div className='position-relative' style={{ backgroundColor: '#e6e6e6', borderRadius: '10px' }}>
								<Image src='/img.png' alt='avatar' width={47} height={45} style={{ backgroundColor: '#e6e6e6', borderRadius: '15px', padding: '5px' }} />
							</div>
						</li>
					</ul>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center" style={{ fontWeight: 'bold' }}>
						<li className="nav-item">
							<a className="nav-link mx-2 text-dark" href="#!">Restaurants</a>
						</li>
						<li style={{ borderRight: "1px solid #ccc" }} className='d-sm-none d-lg-flex d-md-none d-none'>
							<a className="nav-link mx-2 text-dark" href="#!">Deals</a>
						</li>
						<li className='d-sm-block d-lg-none'>
							<a className="nav-link mx-2 text-dark" href="#!">Deals</a>
						</li>
						<li className="nav-item me-2">
							<a className="nav-link mx-1 text-dark" href="#!">
								<i className="fas fa-heart pe-2"></i>My Orders
							</a>
						</li>
						<div className='d-none d-lg-flex'>
							<li className="nav-item ms-2">
								<div className='position-relative' style={{ backgroundColor: '#e6e6e6', borderRadius: '10px' }}>
									<i className="ri-shopping-bag-3-line text-primary p-2" style={{ fontSize: '1.8rem' }}></i>
									<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
										4
									</span>
								</div>
							</li>
							<li className="nav-item ms-4">
								<div className='position-relative' style={{ backgroundColor: '#e6e6e6', borderRadius: '10px' }}>
									<Image src='/img.png' alt='avatar' width={47} height={45} style={{ backgroundColor: '#e6e6e6', borderRadius: '15px', padding: '5px' }} />
								</div>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
		<div className='pb-1'>
			<hr style={{ color: '#a6a6a6', backgroundColor: '#cccccc', height: 2 }} />
		</div>
		</>
	);
}

export default Navbar;