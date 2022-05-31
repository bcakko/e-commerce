import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { ISearchBarProps } from "../../../types/Header.types";

const SearchBar = (props: ISearchBarProps) => {
  const {mainWidth, mainBorderColor, mainTextColor, mainBgColor, inputTextColor, inputBgColor, inputPlaceholderColor} = props;
  
  return (
    <div className={`${mainWidth} ${mainBorderColor} ${mainTextColor} ${mainBgColor} border-2 rounded-2xl overflow-hidden flex items-center p-1`}>
      <input type="search" placeholder="what are you looking for?" className={`${inputPlaceholderColor} ${inputTextColor} ${inputBgColor} w-full p-1 focus:outline-none `}/>
      <FiSearch/>
    </div>
  );
};

export default SearchBar;
