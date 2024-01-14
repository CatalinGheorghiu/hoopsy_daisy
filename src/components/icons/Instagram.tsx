type InstagramProps = {
  className?: string;
};

const Instagram = ({ className }: InstagramProps) => {
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
        d="M16.2857 3.42871H7.7143C5.34737 3.42871 3.42859 5.34749 3.42859 7.71443V16.2859C3.42859 18.6528 5.34737 20.5716 7.7143 20.5716H16.2857C18.6527 20.5716 20.5714 18.6528 20.5714 16.2859V7.71443C20.5714 5.34749 18.6527 3.42871 16.2857 3.42871Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4283 11.4598C15.5341 12.1732 15.4123 12.9017 15.0801 13.5419C14.748 14.182 14.2225 14.701 13.5783 15.0253C12.9341 15.3495 12.2041 15.4623 11.4922 15.3478C10.7802 15.2332 10.1224 14.8971 9.61249 14.3871C9.10255 13.8772 8.76639 13.2194 8.65182 12.5075C8.53725 11.7955 8.65011 11.0655 8.97433 10.4213C9.29856 9.77714 9.81764 9.25162 10.4578 8.91948C11.0979 8.58733 11.8264 8.46549 12.5398 8.57127C13.2674 8.67917 13.9411 9.01824 14.4612 9.53839C14.9814 10.0585 15.3204 10.7322 15.4283 11.4598Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7144 7.28564H16.7229"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Instagram;
