import Image from "next/image";
import LogoImage from "../../public/images/HD_Logo.png";

const Logo = () => {
  return (
    <Image src={LogoImage} alt="Logo" className="h-20 w-20 rounded-full" />
  );
};

export default Logo;
