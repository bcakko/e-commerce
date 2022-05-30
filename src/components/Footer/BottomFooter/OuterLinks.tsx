import LinkWithIcon from "../../UI/LinkWithIcon";
import { GrMail, GrInstagram } from "react-icons/gr";
const OuterLinks = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <LinkWithIcon
        type="outer"
        path="https://www.instagram.com/muddy.store/"
        icon={<GrInstagram className="text-5xl mx-3" />}
        className="text-main-color"
      />
      <LinkWithIcon
        type="outer"
        path=""
        icon={<GrMail className="text-6xl mx-3" />}
        className="text-main-color"
      />
    </div>
  );
};

export default OuterLinks;
