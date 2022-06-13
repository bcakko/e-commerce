import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotifier } from "../../redux/actions/notifierActions";
import { RootState } from "../../types/RootState.types";

export default function Notifier() {
    const dispatch = useDispatch();
    const isShown = useSelector((state: RootState) => state.notifier.isShown)
    const message = useSelector((state: RootState) => state.notifier.message)

    useEffect(()=>{
        setTimeout(()=> {
            dispatch(hideNotifier())
        },4000)        

    },[isShown])

    const onClickHandler = () => {
        if(message) dispatch(hideNotifier());
    }


  return (
    <div className={`${isShown ? "fixed right-[5%]" : "fixed right-[-100%]"} z-40 top-[20%]  xs:w-60 xs:h-12 p-3 rounded bg-header-main-color text-main-color flex items-center justify-between overflow-hidden transition-all ease-in`}>
        <div className="w-full flex justify-between items-center">
            <span onClick={onClickHandler} className="cursor-pointer hover:text-side-color">x</span>
            <span className="w-[80%] text-right">{message ? message : "empty"}</span>
        </div>
    </div>
  )
}
