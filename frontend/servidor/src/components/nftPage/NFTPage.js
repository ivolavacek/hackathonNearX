import React from 'react';
import './NFTPage.css';
import NFTMint  from '../execute/Execute';
import  { useState } from 'react';

const NFTPage = () => {
    const [acao, setAcao] = useState(null);

    return (
        <div className="NFT">
            <button onClick={() => setAcao("mint")}>Mint</button>
            {acao === "mint" && <NFTMint func={"mint"} />} 

            <button onClick={() => setAcao("verificar")}>Verificar NFT</button>
            {acao === "verificar" && <NFTMint func={"verificar"} />} 
        </div>
    );
};

export default NFTPage;
