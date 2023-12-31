import styles from './Button.module.scss';
import ButtonProps from './interface';

const Button = ({ text, onClick, hidden, type, disabled }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${hidden ? styles.active : null}`}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
