import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import { useState } from 'react';

const MenuCards = () => {

    const [isActivePizza, setActivePizza] = useState(false);
    const [isActiveBurger, setActiveBurger] = useState(false);
    const [isActiveBBQ, setActiveBBQ] = useState(false);
    const [isActiveSushi, setActiveSushi] = useState(false);
    const [isActiveBroccoli, setActiveBroccoli] = useState(false);
    const [isActiveDessert, setActiveDessert,] = useState(false);

    return (
        <>
            <section className='row my-5'>
                <div className="col-lg-2 col-md-4 col-4 d-flex justify-content-center">
                    <div class={`card rounded-4 menuCard ${isActivePizza ? `border-primary text-primary` : ``}`} onClick={() => setActivePizza(!isActivePizza)} style={{ width: '12rem', height: '6rem' }}>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="/pizza2.png" class="card-img-top" alt="menu-item" width={80} height={50} />
                                <p class="card-text d-block pt-1">Pizza</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-4 d-flex justify-content-center">
                    <div class={`card rounded-4 menuCard ${isActiveBurger ? `border-primary text-primary` : ``}`} onClick={() => setActiveBurger(!isActiveBurger)} style={{ width: '12rem', height: '6rem' }}>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="/pizza.png" class="card-img-top" alt="menu-item" width={80} height={50} />
                                <p class="card-text d-block pt-1">Burger</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-4 d-flex justify-content-center">
                    <div class={`card rounded-4 menuCard ${isActiveBBQ ? `border-primary text-primary` : ``}`} onClick={() => setActiveBBQ(!isActiveBBQ)} style={{ width: '12rem', height: '6rem' }}>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="/meat.png" class="card-img-top" alt="menu-item" width={80} height={50} />
                                <p class="card-text d-block pt-1">BBQ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-4 mt-lg-0 mt-3 d-flex justify-content-center">
                    <div class={`card rounded-4 menuCard ${isActiveSushi ? `border-primary text-primary` : ``}`} onClick={() => setActiveSushi(!isActiveSushi)} style={{ width: '12rem', height: '6rem' }}>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="/sushi.png" class="card-img-top" alt="menu-item" width={80} height={50} />
                                <p class="card-text d-block pt-1">Sushi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-4 mt-lg-0 mt-3 d-flex justify-content-center">
                    <div class={`card rounded-4 menuCard ${isActiveBroccoli ? `border-primary text-primary` : ``}`} onClick={() => setActiveBroccoli(!isActiveBroccoli)} style={{ width: '12rem', height: '6rem' }}>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="/broccoli.png" class="card-img-top" alt="menu-item" width={80} height={50} />
                                <p class="card-text d-block pt-1">Vegan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-4 mt-lg-0 mt-3 d-flex justify-content-center">
                    <div class={`card rounded-4 menuCard ${isActiveDessert ? `border-primary text-primary` : ``}`} onClick={() => setActiveDessert(!isActiveDessert)} style={{ width: '12rem', height: '6rem' }}>
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="/cake.png" class="card-img-top" alt="menu-item" width={80} height={50} />
                                <p class="card-text d-block pt-1">Desserts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MenuCards;