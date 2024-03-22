import React from 'react';
import Header from '../components/header/Header';
import HomePage from '../components/homePage/HomePage';
import { ModeProvider } from '../components/context/ModeContext';


const Home = () => (
  <ModeProvider>
    <Header />
    <HomePage />
  </ModeProvider>
);

export default Home;
