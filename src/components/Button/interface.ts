interface ButtonProps {
  text: string;
  onClick?: () => void;
  hidden?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default ButtonProps;
