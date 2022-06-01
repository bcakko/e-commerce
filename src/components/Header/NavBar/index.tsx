import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../types/RootState.types";
import DropdownMenu from "../../UI/DropdownMenu";

const NavBar = () => {
  // const dispatch = useDispatch();
  // const categories = useSelector((state: RootState) => state.categories.categories);

  // useEffect(() => {
  //   dispatch(categoriesFetchAction())
  // }, []);

  // return (
  //   <nav className="w-full flex justify-center bg-secondary-color text-header-main-color ">
  //     <div className="sm:w-full sm:flex lg:w-11/12 font-sans font-semibold text-sm ">
  //       <DropdownMenu
  //         ddTitle="Clothing"
  //         ddTitleStyle="mr-5 cursor-pointer transition-all"
  //         ddTitleHoverColor="text-header-secondary-color"
  //         ddList={categories}
  //         ddListStyle="p-1 cursor-pointer hover:text-header-secondary-color transition-all"
  //         ddBackgroundColor="bg-secondary-color"
  //       />
  //       <DropdownMenu
  //         ddTitle="Electronics"
  //         ddTitleStyle="mr-5 cursor-pointer transition-all"
  //         ddTitleHoverColor="text-header-secondary-color"
  //         ddList={categories}
  //         ddListStyle="p-1 cursor-pointer hover:text-header-secondary-color transition-all"
  //         ddBackgroundColor="bg-secondary-color"
  //       />
  //       <DropdownMenu
  //         ddTitle="Outdoor"
  //         ddTitleStyle="mr-5 cursor-pointer transition-all"
  //         ddTitleHoverColor="text-header-secondary-color"
  //         ddList={categories}
  //         ddListStyle="p-1 cursor-pointer hover:text-header-secondary-color transition-all"
  //         ddBackgroundColor="bg-secondary-color"
  //       />
  //       <DropdownMenu
  //         ddTitle="Self-Care"
  //         ddTitleStyle="mr-5 cursor-pointer transition-all"
  //         ddTitleHoverColor="text-header-secondary-color"
  //         ddList={categories}
  //         ddListStyle="p-1 cursor-pointer hover:text-header-secondary-color transition-all"
  //         ddBackgroundColor="bg-secondary-color"
  //       />
  //     </div>
  //   </nav>
  // );
  return <div></div>;
};

export default NavBar;
