import { useNavigate } from "react-router-dom";
import ArrowLeftSvg from "../../assets/svg/ArrowLeftSvg";
const BackButton = ({goTo}) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(goTo);
  };
  return (
    <>
      <div className="px-7">
        <button
          type="button"
          className=" flex items-center mt-5  py-2 px-6 mr-2  text-sm  bg-white hover:bg-gray-100 text-gray-800 font-bold rounded-lg shadow dark:bg-darkBlue text-green dark:border-darkBlue"
          onClick={back}
        >
          <ArrowLeftSvg />
          Back
        </button>
      </div>
    </>
  );
};
export default BackButton;
