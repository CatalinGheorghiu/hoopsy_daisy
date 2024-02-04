import Image, { StaticImageData } from "next/image";

import NikeLogoImg from "@/public/images/nike_logo.png";
import AdidasLogoImg from "@/public/images/adidas_logo.png";
import TeslaLogoImg from "@/public/images/tesla_logo.png";
import AMDLogoImg from "@/public/images/amd_logo.png";
import AppleLogoImg from "@/public/images/apple_logo.png";
import LinuxLogoImg from "@/public/images/linux_logo.png";
import Slider from "@/components/ui/Slider";

export type FeaturedCompany = {
  id: number;
  name: string;
  logo: StaticImageData;
};

const featuredCompanies: FeaturedCompany[] = [
  {
    id: 1,
    name: "Company 1",
    logo: AppleLogoImg
  },
  {
    id: 2,
    name: "Company 2",
    logo: TeslaLogoImg
  },
  {
    id: 3,
    name: "Company 3",
    logo: AMDLogoImg
  },
  {
    id: 4,
    name: "Company 4",
    logo: LinuxLogoImg
  },
  {
    id: 5,
    name: "Company 5",
    logo: AdidasLogoImg
  },
  {
    id: 6,
    name: "Company 6",
    logo: NikeLogoImg
  }
];

const CompanyLogoSlider = () => {
  if (featuredCompanies.length < 1) return;

  return (
    <Slider>
      {featuredCompanies.map(({ id, logo, name }) => (
        <li
          key={id}
          className="relative h-20 min-w-0 flex-[0_0_50%] pl-4 sm:flex-[0_0_25%] md:h-24 md:flex-[0_0_18%]"
        >
          <Image
            className="h-full w-full bg-custom-purple-200 object-contain p-4"
            src={logo}
            alt={name}
          />
        </li>
      ))}
    </Slider>
  );
};

export default CompanyLogoSlider;
