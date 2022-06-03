import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { ISearchBarProps } from "../../../types/Header.types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../types/RootState.types";
import { useRef, useState ,ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { filterCollectionFetchAction } from "../../../redux/actions/filterCollectionActions";
import { detailFetchAction } from "../../../redux/actions/detailActions";

const SearchBar = (props: ISearchBarProps) => {
  const {mainWidth, mainBorderColor, mainTextColor, mainBgColor, inputTextColor, inputBgColor, inputPlaceholderColor} = props;

  const [searchBox, setSearchBox] = useState("");

  const dispatch = useDispatch();
  const collection = useSelector(
    (state: RootState) => state.filterCollection.collection.results
  );

  const searchBoxRef = useRef<HTMLDivElement>(null);

    // Routing
    const navigate = useNavigate();
    const routeChange = ( id: string, url: string  ) => {
    let path : string = `/detail/${url}/${id}`;
        navigate(path);
    }

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchBoxString = event.target.value.toLocaleLowerCase();
    setSearchBox(searchBoxString);
    dispatch(filterCollectionFetchAction(searchBox))
    if(searchBoxRef && searchBoxRef.current) searchBoxRef.current.className = `flex ${mainBgColor} ${mainBorderColor} w-full h-32 overflow-auto border-2 p-2`
  }

  const onClickHandler = (event: MouseEvent<HTMLLIElement>): void => {
    const {target} = event;
    const clickedId = (target as Element).getAttribute("data-id");
    const clickedPath = (target as Element).getAttribute("data-path");
    if(clickedId) dispatch(detailFetchAction(clickedId));
    if(clickedId && clickedPath)routeChange(clickedId, clickedPath)
  }

  return (
    <div className={`${mainWidth} h-8`}>
      <div className={`${mainWidth} ${mainBorderColor} ${mainTextColor} ${mainBgColor} border-2 overflow-hidden flex items-center p-1`}>
        <input onChange={onSearchChange} type="search" placeholder="what are you looking for?" className={`${inputPlaceholderColor} ${inputTextColor} ${inputBgColor} w-full p-1 focus:outline-none`}/>
        <FiSearch className="xs:text-3xl md:text-xl"/>
      </div>
      <div ref={searchBoxRef} className={`hidden`}>
        <ul className="w-full">
          {collection ? collection.map((item, index) => {
            if("name" in item && "poster_path" in item){
              return <li onClick={onClickHandler} key={index} data-id={item.id} data-path="show" className="flex p-1 w-full items-center hover:bg-side-color cursor-pointer">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-10 h-10 object-contain"/>
                <span>{item.name}</span>
              </li>
            }
            if("title" in item){
              return <li onClick={onClickHandler} key={index} data-id={item.id} data-path="movie" className="flex p-1 w-full items-center hover:bg-side-color cursor-pointer">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-10 h-10 object-contain"/>
                <span>{item.title}</span>
              </li>
            }
            if("name" in item && "profile_path" in item){
              return <li onClick={onClickHandler} key={index} data-id={item.id} data-path="person" className="flex p-1 w-full items-center hover:bg-side-color cursor-pointer">
                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className="w-10 h-10 object-contain"/>
                <span>{item.name}</span>
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
