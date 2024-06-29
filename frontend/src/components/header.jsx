import React, { useState, useEffect } from 'react';
import '../styles/header-styles.css'
import LogInDiv from './signin';

export default function Header({ Hstyles }) {
    const [showSignInDiv, setshowSignInDiv] = useState(false);
    const [bodyscroll, set_bodyscroll] = useState(true);
    const [showMenu, setshowMenu] = useState(window.innerWidth <= 600);
    const [showMenuBtn, setshowMenuBtn] = useState(window.innerWidth <= 600);
    const [MenuPosition, setMenuPosition] = useState(-100);
    const [showMainOptions, setshowMainOptions] = useState(window.innerWidth > 600);
    const [showMainLogo, setshowMainLogo] = useState(true);
    const [showSignUpBtn] = useState(Hstyles !== 'SignUp');

    useEffect(() => {
        document.body.style.overflow = (bodyscroll) ? 'auto' : 'hidden';
    }, [bodyscroll]);

    function toggleMenu() {
        setMenuPosition((MenuPosition === 0) ? -100 : 0);
        setshowMenuBtn(!showMenuBtn);
        setshowMainLogo(!showMainLogo);
    }

    function toggleSignInDiv() {
        setshowSignInDiv(!showSignInDiv);
        set_bodyscroll(!bodyscroll);
    }

    useEffect(() => {
        const handleResize = () => {
            setshowMenuBtn(window.innerWidth <= 600);
            setshowMenu(window.innerWidth <= 600);
            setshowMainOptions(window.innerWidth > 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <header>
                {showMenuBtn &&
                    <button className="menubutton" onClick={toggleMenu}></button>
                }
                {showMenu &&
                    <div className="menu" style={{ left: MenuPosition + '%' }}>
                        <button className="cross" id='menucross' onClick={toggleMenu}></button>
                        <a href="/" className="SideLogo" style={{ "fontFamily": 'Times New Roman' }}>
                            <div>UAE LANDMARKS</div>
                        </a>
                        <div className="sideoptions">
                            <a href="/Sell">Sell</a>
                            <a href="/Rent">Rent</a>
                            <a href="/Buy">Buy</a>
                            <a href="/Invest">Invest</a>
                        </div>
                    </div>
                }
                <a href="/" className="Logo" style={{ "fontFamily": 'Times New Roman' }}>
                    <div>UAE LANDMARKS</div>
                </a>
                {showMainOptions &&
                    <div className="mainoptions">
                        <a href="/Sell">Sell</a>
                        <a href="/Rent">Rent</a>
                        <a href="/Buy">Buy</a>
                        <a href="/Invest">Invest</a>
                    </div>
                }
                <form className="searcharea">
                    <input type="text" placeholder="search" />
                    <button></button>
                </form>
                <div className="userenterarea">
                    <button onClick={toggleSignInDiv}>SignIn</button>
                    {
                        showSignUpBtn &&
                        <a href="/SignUp">SignUp</a>
                    }
                </div>
            </header>
            {showSignInDiv && <LogInDiv onClose={toggleSignInDiv} />}
        </>
    )
}

