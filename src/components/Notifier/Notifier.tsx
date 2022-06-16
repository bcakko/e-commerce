import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotifier } from "../../redux/actions/notifierActions";
import { RootState } from "../../types/RootState.types";

export default function Notifier() {
  const dispatch = useDispatch();
  const { isShown, message } = useSelector(
    (state: RootState) => state.notifier
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotifier());
    }, 4000);
    // timeout();
    // return {
    //     clearTimeout(timeout.current)
    // }
  }, [isShown]);

  //! Incele
  // requestIdleCallback
  // requestAnimationFrame

  const onClickHandler = () => {
    if (message) dispatch(hideNotifier());
  };

  return (
    <div
      className={`${
        isShown ? "fixed right-[5%]" : "fixed right-[-100%]"
      } z-40 top-[20%]  xs:w-60 xs:h-12 p-3 rounded bg-gradient-to-b from-main-color to-header-secondary-color hover:from-side-color hover:to-header-secondary-color text-header-main-color flex items-center justify-between overflow-hidden transition-all ease-in shadow-lg`}
    >
      <div className="w-full flex justify-between items-center">
        <span
          onClick={onClickHandler}
          className="cursor-pointer hover:text-side-color"
        >
          x
        </span>
        <span className="w-[80%] text-right">
          {message ? message : "empty"}
        </span>
      </div>
    </div>
  );
}
