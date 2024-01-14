type FacebookProps = {
  className?: string;
};

const Facebook = ({ className }: FacebookProps) => {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.1428 3.42871H14.5714C13.4347 3.42871 12.3446 3.88024 11.5409 4.68397C10.7372 5.4877 10.2857 6.57778 10.2857 7.71443V10.2859H7.71423V13.7144H10.2857V20.5716H13.7142V13.7144H16.2857L17.1428 10.2859H13.7142V7.71443C13.7142 7.4871 13.8045 7.26908 13.9653 7.10833C14.126 6.94759 14.344 6.85728 14.5714 6.85728H17.1428V3.42871Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Facebook;
