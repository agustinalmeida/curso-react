import React from 'react';
import './style.css';
import NavBar from './components/navBar/NavBar';

export default function App() {
  return (
    <>
      <NavBar list={['inicio', 'nosotros', 'contacto']} />
    </>
  );
}