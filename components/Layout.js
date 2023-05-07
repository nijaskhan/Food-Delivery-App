import Navbar from "./Navbar";
import {useEffect, useState} from 'react'

const Layout = ({children}) => {
    const [logged, setLogin] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem('user')){
            setLogin(true);
        }else{
            setLogin(false);
        }
    })

    return ( 
        <>
        {
            logged ? (
                <div className="container">
                    <Navbar/>
                    {children}
                </div>
            ) : (
                <div className="container">
                    {children}
                </div>
            )
        }
        </>
    );
}

export default Layout;