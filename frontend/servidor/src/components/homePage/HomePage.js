import React, { useContext } from 'react';
import './HomePage.css';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';

const HomePage = () => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    return (
        <>
            <div className={`total ${mode}`}>
                <div className={`titulo ${mode}`}>
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto1">Bem vindo ao GIV Access!</div>
                    <div className="texto2">Conecte sua Wallet para ter acesso as nossa funcionalidades!</div>
                </div>
                <div class="container">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
            </div>
        </>
    );
};

export default HomePage;