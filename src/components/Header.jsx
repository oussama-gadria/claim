import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
const Header = () => {
  return (
    <div className="shadow-xl font-sans">
      <div className="container mx-auto  flex justify-between">
        <Logo />
        <ul className="flex flex-row items-center text-sm font-medium">
          <li className="mx-11">
            <Link to="/">
              <a href="/#">Home</a>
            </Link>
          </li>
          <li className="mx-11">
            <Link to="/shop">
              <a href="/#">Products</a>
            </Link>
          </li>
          <li className="mx-11">
            <a href="/#">About us</a>
          </li>
          <li className="mx-11">
            <a href="/#">Contact us</a>
          </li>
        </ul>
        <SearchForm />
      </div>
    </div>
  );
};
export default Header;
