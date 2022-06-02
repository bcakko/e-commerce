import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { ISearchBarProps } from "../../../types/Header.types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../types/RootState.types";
import { useRef, useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import { filterCollectionFetchAction } from "../../../redux/actions/filterCollectionActions";

const SearchBar = (props: ISearchBarProps) => {
  const {mainWidth, mainBorderColor, mainTextColor, mainBgColor, inputTextColor, inputBgColor, inputPlaceholderColor} = props;

  const [searchBox, setSearchBox] = useState("");

  const dispatch = useDispatch();
  const collection = useSelector(
    (state: RootState) => state.filterCollection.collection.results
  );

  const searchBoxRef = useRef<HTMLDivElement>(null);


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchBoxString = event.target.value.toLocaleLowerCase();
    setSearchBox(searchBoxString);
    dispatch(filterCollectionFetchAction(searchBox))
    if(searchBoxRef && searchBoxRef.current) searchBoxRef.current.className = `flex ${mainBgColor} ${mainBorderColor} w-full h-32 overflow-auto border-2 p-2`
  }

  return (
    <div className={`${mainWidth} h-8`}>
      <div className={`${mainWidth} ${mainBorderColor} ${mainTextColor} ${mainBgColor} border-2 overflow-hidden flex items-center p-1`}>
        <input onChange={onSearchChange} type="search" placeholder="what are you looking for?" className={`${inputPlaceholderColor} ${inputTextColor} ${inputBgColor} w-full p-1 focus:outline-none`}/>
        <FiSearch className="xs:text-3xl md:text-xl"/>
      </div>
      <div ref={searchBoxRef} className={`hidden`}>
        <ul>
          {collection ? collection.map((item, index) => {
            if("title" in item){
              console.log(item)
              return <li key={index} className="flex p-1 w-full">
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-10 h-10"/>
              <span>{item.title}</span>
              </li>
            } else if("title" in item){
              console.log(item)
              return <li key={index} className="flex p-1 w-full">
              <img src={`https://image.tmdb.org/t/p/w500${item}`} className="w-10 h-10"/>
              <span>{item}</span>
              </li>
            }
          })
          : ""}
        </ul>
      </div>
    </div>

  );
};

export default SearchBar;
