type SearchProps = {
  className?: string;
};

const Search = ({ className }: SearchProps) => {
  return (
    <svg
      className={`cursor-pointer ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.5" cy="11.5" r="7.5" stroke="#1A1A1A" strokeWidth="1.8" />
      <path
        d="M21.6004 21.6004L17.4004 17.4004"
        stroke="#1A1A1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Search;
