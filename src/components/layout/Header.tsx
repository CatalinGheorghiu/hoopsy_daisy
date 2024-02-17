import AnnouncementBar from "@/components/layout/announcement/AnnouncementBar";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import { navigation } from "@/lib/navigation";

const Header = () => {
  return (
    <header>
      <AnnouncementBar />
      <MobileNav navigation={navigation} />
      <DesktopNav navigation={navigation} />
    </header>
  );
};

export default Header;
