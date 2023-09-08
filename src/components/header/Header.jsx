import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import BagSvg from "../../assets/svg/BagSvg";
import AvatarSvg from "../../assets/svg/AvatarSvg";
import DropDownProfile from "../common/DropDownProfile";
import { useContext, useEffect, useState } from "react";
import SignInSvg from "../../assets/svg/SignInSvg";
import SearchForm from "../common/SearchForm";
import { TokenContext } from "../../context/TokenContext";
import { GET_USER_CONNECT } from "../../graphql/query";
import { useQuery } from "@apollo/client";
const Header = ({ handleDeleteToken }) => {
  const [userIsConnect, setUserIsConnect] = useState(false);
  const token = useContext(TokenContext) || localStorage.getItem("token");
  
 
   
  const { data } = useQuery(GET_USER_CONNECT, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (token) {
      setUserIsConnect(true);
    } else {
      setUserIsConnect(false);
    }
  }, [token, data]);

  return (
    <div className="shadow-xl font-sans">
      <div className="container mx-auto  flex justify-between items-center">
        <Logo />
        <SearchForm />
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
             <div class="dropdown inline-block relative">
             <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <AvatarSvg />
              </button>
              <DropDownProfile handleDeleteToken={handleDeleteToken} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
