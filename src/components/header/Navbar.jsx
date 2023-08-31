import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue shadow-blue shadow-md">
      <div className="flex justify-center">
        <ul className="flex flex-row font-normal text-white py-4">
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
      </div>
    </div>
  );
};
export default Navbar;
