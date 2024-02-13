"use client";

import { useEffect, useState } from "react";

import AnnouncementMessage from "@/components/layout/announcement/AnnouncementMessage";

export type AnnouncementMessageType = {
  id: number;
  message: string;
};

//TODO: This will be fetched from the DB
const announcementMessages: AnnouncementMessageType[] = [
  {
    id: 1,
    message: "Fast shipping within Germany"
  },
  {
    id: 2,
    message: "Fast shipping within Romania"
  },
  {
    id: 3,
    message: "Fast shipping within Canada"
  }
];

const AnnouncementBar = () => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElementIndex(
        (prevIndex) => (prevIndex + 1) % announcementMessages.length
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex w-full flex-row flex-nowrap overflow-hidden bg-custom-purple-800">
      {announcementMessages.length > 0 &&
        announcementMessages.map(({ id, message }, index) => (
          <AnnouncementMessage
            key={id}
            message={message}
            style={{
              transform: `translateX(-${currentElementIndex * 100}%)`
            }}
          />
        ))}
    </div>
  );
};

export default AnnouncementBar;
