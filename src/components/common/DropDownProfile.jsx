import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Dropdown, Ripple });
const DropDownProfile = () => {
  return (
    <>
      
      <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1"
    data-te-dropdown-menu-ref>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold text-bleu hover:bg-neutral-100 active:text-neutral-800 active:no-underline "
              href="/#"
              data-te-dropdown-item-ref
            >
              UserName
            </a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold text-bleu hover:bg-neutral-100 active:text-neutral-800 active:no-underline "
              href="/#"
              data-te-dropdown-item-ref
            >
              LogOut
            </a>
          </li>
          
        </ul>
    </>
  );
};
export default DropDownProfile;
