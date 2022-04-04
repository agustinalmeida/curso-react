import React from 'react';
import './navBtn.css';

export default function NavBtn({ item }) {
  return (
    <li>
      <button variant="contained">{item}</button>
    </li>
  );
}
