import React from 'react';
import Header from '../components/header/Header';
import NFTPage from '../components/nftPage/NFTPage';
import { ModeProvider } from '../components/context/ModeContext';


const Nfts = () => (
  <ModeProvider>
    <Header />
    <NFTPage />
  </ModeProvider>
);

export default Nfts;
