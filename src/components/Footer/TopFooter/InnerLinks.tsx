import { NavLink } from "react-router-dom";

const InnerLinks = () => {
  return (
    <nav>
      <ul className="text-center">
        <li>
          <NavLink className="inline-block w-full" to="/hesabim">
            Account
          </NavLink>
        </li>
        <li>
          <NavLink className="inline-block w-full" to="/satis-sozlesmesi">
            Sales Agreement
          </NavLink>
        </li>
        <li>
          <NavLink className="inline-block w-full" to="/gizlilik-guvenlik">
            Privacy and Security
          </NavLink>
        </li>
        <li>
          <NavLink className="inline-block w-full" to="iptal-iade">
            Cancellation and Refund Policy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default InnerLinks;
