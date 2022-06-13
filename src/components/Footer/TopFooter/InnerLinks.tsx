import { NavLink } from "react-router-dom";

const InnerLinks = () => {
  return (
    <nav>
      <ul className="text-center">
        <li>
          <NavLink className="inline-block w-full" to="/hesabim">
            Hesabım
          </NavLink>
        </li>
        <li>
          <NavLink className="inline-block w-full" to="/satis-sozlesmesi">
            Mesafeli Satış Sözleşmesi
          </NavLink>
        </li>
        <li>
          <NavLink className="inline-block w-full" to="/gizlilik-guvenlik">
            Gizlilik ve Güvenlik
          </NavLink>
        </li>
        <li>
          <NavLink className="inline-block w-full" to="iptal-iade">
            İptal ve İade
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default InnerLinks;
