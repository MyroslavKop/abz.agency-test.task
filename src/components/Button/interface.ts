interface ButtonProps {
  text: string;
  onClick?: () => void;
  hidden?: boolean;
  type?: 'button' | 'submit';
}

export default ButtonProps;
