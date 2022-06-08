import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <div className="w-full bg-secondary-color text-header-main-color">
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
