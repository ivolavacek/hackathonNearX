import React, { useContext, useEffect, useState } from 'react';
import './HomePage.css';
import logoLight from '../../images/curso-template-v2.png';
import logoDark from '../../images/curso-template.png';
import ModeContext from '../context/ModeContext';
import { verificarNFT } from '../contratos/verificaContrato2';

const HomePage = () => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;
    const [desbloqueio, setDesbloqueio] = useState(false);

    async function desbloqueia() {
        try {
            setDesbloqueio( await verificarNFT() );
            console.log("Página bloqueada: ", desbloqueio);
        } catch (error) {
        console.error('Erro ao buscar NFT:', error);
        }
    }

    useEffect(() => {
        desbloqueia();
      }, []);

    return (
        <>
            <div className={`total ${mode}`}>
                <div className={`titulo ${mode}`}>
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto1">Bem vindo ao GIV Access!</div>
                    <div className="texto2">Conecte sua Wallet para ter acesso as nossa funcionalidades!</div>
                </div>
                <div class="container">
                    <div class="square">
                        <p>"Tem NFT? " {desbloqueio ? 'sim' : 'não'}</p>
                    </div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
            </div>
        </>
    );
};

export default HomePage;