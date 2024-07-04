// src/components/Navbar.jsx
import React from 'react';
import n from '../components/Nav.module.css';

function Navbar() {
  return (
    <>
      <nav className={n.container}>
        <div className={n.btn_aluno}>
          <button>ALUNO ONLINE</button>
        </div>
        <div className={n.btn_professor}>
          <button>PROFESSOR ONLINE</button>
        </div>
      </nav>
      <hr className={n.linha_verde} />
    </>
  );
}

export default Navbar;
