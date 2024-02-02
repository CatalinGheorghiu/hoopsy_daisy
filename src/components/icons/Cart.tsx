import { cn } from "@/lib/utils";

type CartProps = {
  className?: string;
};

const Cart = ({ className }: CartProps) => {
  return (
    <svg
      className={cn("cursor-pointer", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.40039 10.5L8.40039 6.20005C8.40039 4.21183 10.0122 2.60005 12.0004 2.60005V2.60005C13.9886 2.60005 15.6004 4.21182 15.6004 6.20005L15.6004 10.5"
        stroke="#1A1A1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.24596 12.0897C4.38211 10.3391 4.45019 9.46386 5.02515 8.93188C5.60011 8.3999 6.47805 8.3999 8.23391 8.3999H15.7653C17.5212 8.3999 18.3991 8.3999 18.9741 8.93188C19.549 9.46386 19.6171 10.3391 19.7533 12.0897L20.232 18.2448C20.3105 19.2537 20.3497 19.7582 20.0528 20.079C19.7559 20.3999 19.25 20.3999 18.238 20.3999H5.76121C4.74925 20.3999 4.24327 20.3999 3.9464 20.079C3.64952 19.7582 3.68876 19.2537 3.76723 18.2448L4.24596 12.0897Z"
        stroke="#1A1A1A"
        strokeWidth="1.8"
      />
    </svg>
  );
};

export default Cart;
