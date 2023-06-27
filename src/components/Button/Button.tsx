import styles from './Button.module.scss';
import ButtonProps from './interface';

const Button = ({ text, onClick, hidden }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${hidden ? styles.active : null}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
