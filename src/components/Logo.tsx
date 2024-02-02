import Image from "next/image";
import { cn } from "@/lib/utils";

import LogoImage from "@/public/images/HD_Logo.png";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src={LogoImage}
      alt="Logo"
      className={cn("h-20 w-20 rounded-full", className)}
    />
  );
};

export default Logo;
