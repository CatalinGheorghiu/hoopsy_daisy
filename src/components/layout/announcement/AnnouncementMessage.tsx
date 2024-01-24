import { CSSProperties } from "react";

type AnnouncementMessageProps = {
  message: string;
  style?: CSSProperties;
};

const AnnouncementMessage = ({ message, style }: AnnouncementMessageProps) => {
  return (
    <p
      className="flex w-full min-w-full justify-center py-3 text-center text-xs text-white transition-transform duration-500 ease-in-out md:text-sm"
      style={style}
    >
      {message}
    </p>
  );
};

export default AnnouncementMessage;
