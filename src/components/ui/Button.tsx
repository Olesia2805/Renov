type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return <button type="button">{title}</button>;
};

export default Button;
