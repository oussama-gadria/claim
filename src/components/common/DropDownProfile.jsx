import { Dropdown, Ripple, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";
initTE({ Dropdown, Ripple });
const DropDownProfile = ({ handleDeleteToken }) => {
  const navigate = useNavigate();
  const logOut = () => {
    handleDeleteToken();
    localStorage.removeItem("CartId");
    navigate("/SignIn");
  };
  return (
    <>
      <ul
        className="dropdown-menu absolute  text-gray-700 pt-1 z-[1000] float-left m-0 hidden min-w-max overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg "
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        <li>
          <p
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold text-bleu hover:bg-neutral-100 active:text-neutral-800 active:no-underline "
            data-te-dropdown-item-ref
          >
            UserName
          </p>
        </li>
        <li>
          <button
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold text-bleu hover:bg-neutral-100 active:text-neutral-800 active:no-underline "
            data-te-dropdown-item-ref
            onClick={logOut}
          >
            LogOut
          </button>
        </li>
      </ul>
    </>
  );
};
export default DropDownProfile;
