type ArrowProps = {
  className: string;
};

const Arrow = ({ className }: ArrowProps) => {
  return (
    <svg
      className={`cursor-pointer ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 6.5L14.75 12L9.25 17.5"
        stroke="#1A1A1A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
