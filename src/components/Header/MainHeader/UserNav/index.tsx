import LinkWithIcon from "../../../UI/LinkWithIcon";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
const UserNav = () => {
  return ( 
    <div className="flex">
      <LinkWithIcon type="inner" path="/profile" icon={<FiUser />}/>
      <LinkWithIcon type="inner" path="/favourites" icon={<FiUser/>}/>
      <LinkWithIcon type="inner" path="/cart" icon={<FiUser/>}/>
    </div>
  );
};

export default UserNav;
