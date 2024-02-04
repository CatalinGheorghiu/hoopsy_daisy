type TruckProps = {
  className?: string;
};

const Truck = ({ className }: TruckProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
    >
      <path
        d="M13.5 1H3C1.89543 1 1 1.89543 1 3V13.5185H15.5V3C15.5 1.89543 14.6046 1 13.5 1Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 5.5H18.9286L21.5 8.5V13.5H15.5V5.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.2273 18.3334C6.52433 18.3334 7.57578 17.2555 7.57578 15.926C7.57578 14.5964 6.52433 13.5186 5.2273 13.5186C3.93027 13.5186 2.87881 14.5964 2.87881 15.926C2.87881 17.2555 3.93027 18.3334 5.2273 18.3334Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4393 18.3334C18.7363 18.3334 19.7878 17.2555 19.7878 15.926C19.7878 14.5964 18.7363 13.5186 17.4393 13.5186C16.1423 13.5186 15.0908 14.5964 15.0908 15.926C15.0908 17.2555 16.1423 18.3334 17.4393 18.3334Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Truck;
