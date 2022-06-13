import { CgSpinner } from "react-icons/cg";
import { IconContext } from "react-icons/lib";

const LoadingSpinner = () => {
  return (
    <IconContext.Provider
      value={{ className: "animate-spin w-20 h-20 text-main-color" }}
    >
      <CgSpinner className="animate-spin w-20 h-20 text-main-color" />
    </IconContext.Provider>
  );
};

export default LoadingSpinner;
