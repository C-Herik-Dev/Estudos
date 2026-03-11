import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

export function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <div className="bg-white drop-shadow mb-4 h-16 w-full flex items-center justify-center">
      <header className="flex max-w-7xl w-full items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img src={logoImg} alt="Logo do site" />
        </Link>
        {!loadingAuth && signed && (
          <Link to="/dashboard">
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiUser size={22} color="#000000" />
            </div>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to="/login">
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiLogIn size={24} color="#000000" />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
