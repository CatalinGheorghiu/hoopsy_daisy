type MenuProps = {
  onClick: () => void;
};

const Menu = ({ onClick }: MenuProps) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#1A1A1A"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Menu;
