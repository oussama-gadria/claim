import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import BagSvg from "../../assets/svg/BagSvg";
import AvatarSvg from "../../assets/svg/AvatarSvg";
import DropDownProfile from "../common/DropDownProfile";
const Header = () => {
  return (
    <div className="shadow-xl font-sans">
      <div className="container mx-auto  flex justify-between">
        <Logo />
        <ul className="flex flex-row items-center text-sm font-extrabold">
          <li className="mx-11 text-xl">
            <Link to="/">
              <a href="/#">Home</a>
            </Link>
          </li>
          <li className="mx-11 text-xl">
            <Link to="/shop">
              <a href="/#">Products</a>
            </Link>
          </li>
          <li className="mx-11 text-xl">
            <a href="/#">About us</a>
          </li>
          <li className="mx-11 text-xl">
            <a href="/#">Contact us</a>
          </li>
        </ul>
        <div className="flex flex-row items-center">
          <div className="pr-2">
            <button>
              <BagSvg />
            </button>
          </div>
          <div className="text-2xl pr-1">|</div>
          <div class="relative" data-te-dropdown-ref>
            <button
            className="pt-1"
              type="button"
              id="dropdownMenuButton1"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <AvatarSvg />
            </button>
            <DropDownProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
