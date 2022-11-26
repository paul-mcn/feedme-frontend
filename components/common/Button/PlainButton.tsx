type Props = {
  label: string;
  onClick: () => {} | undefined;
  className: string | undefined;
};

const PlainButton = ({ label, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default PlainButton;
