import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import BagSvg from "../../assets/svg/BagSvg";
import AvatarSvg from "../../assets/svg/AvatarSvg";
import DropDownProfile from "../common/DropDownProfile";
import { useContext, useEffect, useState } from "react";
import SignInSvg from "../../assets/svg/SignInSvg";
import jwt_decode from "jwt-decode";
import SearchForm from "../common/SearchForm";
import { TokenContext } from "../../context/TokenContext";
const Header = () => {
  const [userIsConnect, setUserIsConnect] = useState(false);
  const token = useContext(TokenContext);
  useEffect(()=>{
    if (token) {
      setUserIsConnect(true);
      const userConnect=jwt_decode(token); 
      console.log(userConnect);
    }
    else { 
      setUserIsConnect(false);
    }
  },[token])
  return (
    <div className="shadow-xl font-sans">
      <div className="container mx-auto  flex justify-between items-center">
        <Logo />
        <SearchForm/>
        <div className="flex flex-row items-center">
          <div className="pr-2">
            <button>
              <BagSvg />
            </button>
          </div>
          <div className="text-2xl pr-1">|</div>
          {!userIsConnect && (
            <Link to="/SignIn">
              <div className="flex flex-row items-center">
                <SignInSvg />
                <p className="text-blue font-extrabold">Sign In</p>
              </div>
            </Link>
          )}
          {userIsConnect && (
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
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
