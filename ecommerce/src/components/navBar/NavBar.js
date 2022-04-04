import React from 'react';
import NavBtn from '../navBtn/NavBtn';
import './navBar.css';

export default function NavBar({ list }) {
  return (
    <nav>
      <div className="brand">
        <h1>Compro</h1>
      </div>

      <ul>
        {list.map((item) => {
          return <NavBtn item={item} />;
        })}
      </ul>
    </nav>
  );
}
