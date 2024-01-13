type CloseProps = {
  onClick: () => void;
};

const Close = ({ onClick }: CloseProps) => {
  return (
    <button
      className="cursor-pointer"
      onClick={onClick}
      name="close-button"
      aria-label="Drawer close button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 5L5 19"
          stroke="#1A1A1A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 5L19 19"
          stroke="#1A1A1A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Close;
