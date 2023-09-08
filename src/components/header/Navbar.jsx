import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue">
      <div className="flex justify-center">
        <ul className="flex flex-row font-normal text-white py-4">
          <li className="mx-11 text-xl">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="mx-11 text-xl">
            <Link to="/shop">
              <p>Products</p>
            </Link>
          </li>
          <li className="mx-11 text-xl">
            <p>About us</p>
          </li>
          <li className="mx-11 text-xl">
            <p>Contact us</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
