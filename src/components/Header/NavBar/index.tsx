import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesFetchAction } from "../../../redux/actions/categoriesActions";
import { RootState } from "../../../types/RootState.types";
import DropdownMenu from "../../UI/DropdownMenu";

const NavBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);

  useEffect(() => {  
    dispatch(categoriesFetchAction())
  }, []);
  
  return (
    <nav className="w-full flex justify-center p-2 bg-secondary-color text-header-main-color ">
      <div className="sm:w-full md:flex lg:w-11/12 font-sans">
        <DropdownMenu ddData={categories}/>
      </div>
    </nav>
  );
};

export default NavBar;
