import Logo from '../../assets/svg/Logo.svg';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={Logo} alt="logo" />
        <div className={styles.buttonsGroup}>
          <Button text="Users" />
          <Button text="Sign up" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
