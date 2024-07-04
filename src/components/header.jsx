// src/components/Header.jsx
import styles from './Header.module.css';
import logoEscola from '../assets/Logo Lucia Baltazar.png';
import logoSeduc from '../assets/logo_seduc.png';

function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logoELinha}>
          <img className={styles.logoEscola} src={logoEscola} alt="Logo-escola" />
          <div className={styles.linhaVerticalGrande}></div>
        </div>
        <div className={styles.infoEscola}>
          <h2>EEEP LÚCIA BALTAZAR COSTA</h2>
          <div className={styles.seducContainer}>
            <h4>SEDUC</h4>
            <div className={styles.linhaVerticalPequena}></div>
            <img className={styles.logoSeduc} src={logoSeduc} alt="Logo SEDUC" />
          </div>
        </div>
        <div className={styles.cadastro}>
          <a href="pre-cadastro"><h3>Pré-cadastro</h3></a>
        </div>
        <div className={styles.login}>
          <a href="login"><h3>Login</h3></a>
        </div>
        <div className={styles.menu}>
          <h3>☰</h3>
        </div>
        <hr className={styles.linha_laranja} />
      </header>
    </>
  );
}

export default Header;
