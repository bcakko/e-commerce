import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { ISearchBarProps } from "../../../types/Header.types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../types/RootState.types";
import {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  MouseEvent,
  RefObject,
} from "react";
import { useNavigate } from "react-router-dom";
import { filterCollectionFetchAction } from "../../../redux/actions/filterCollectionActions";
import { detailFetchAction } from "../../../redux/actions/detailActions";

const SearchBar = (props: ISearchBarProps) => {
  const {
    mainWidth,
    mainBorderColor,
    mainTextColor,
    mainBgColor,
    inputTextColor,
    inputBgColor,
    inputPlaceholderColor,
  } = props;

  const [searchBox, setSearchBox] = useState("");

  const dispatch = useDispatch();
  const collection = useSelector(
    (state: RootState) => state.filterCollection.collection.results
  );

  const searchBoxRef = useRef<HTMLDivElement>(null);

  // Routing
  const navigate = useNavigate();
  const routeChange = (id: string, url: string) => {
    let path: string = `/detail/${url}/${id}`;
      navigate(path);
  };

  //? event: any sorulacak!
  function useOutsideClicker(ref: RefObject<HTMLDivElement>): void {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any): void {
        if (ref.current && !ref.current.contains(event.target)) {
          if (searchBoxRef && searchBoxRef.current)
            searchBoxRef.current.className = `hidden`;
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClicker(searchBoxRef);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchBoxString = event.target.value.toLocaleLowerCase();
    setSearchBox(searchBoxString);

    if (searchBoxRef && searchBoxRef.current && collection.length < 4)
      searchBoxRef.current.className = `flex xs:w-40 sm:w-80 h-32 overflow-auto absolute z-20 ${mainBgColor} ${mainBorderColor}`;
    if (searchBoxRef && searchBoxRef.current && collection.length > 4)
      searchBoxRef.current.className = `flex xs:w-40 sm:w-80 h-96 overflow-auto absolute z-20 ${mainBgColor} ${mainBorderColor}`;
    if(searchBox) dispatch(filterCollectionFetchAction(searchBox));
  };

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     dispatch(filterCollectionFetchAction(searchBox));
  //   }, 300);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [searchBox]);

  const onClickHandler = (event: MouseEvent<HTMLLIElement>): void => {
    const { currentTarget } = event;
    const clickedId = (currentTarget as Element).getAttribute("data-id");
    const clickedPath = (currentTarget as Element).getAttribute("data-path");
    if (clickedId && clickedPath)
      dispatch(detailFetchAction(clickedId, clickedPath));
    if (clickedId && clickedPath) routeChange(clickedId, clickedPath);
  };

  return (
    <div className={`${mainWidth} h-8`}>
      <div
        className={`${mainWidth} ${mainTextColor} overflow-hidden flex items-center p-1`}
      >
        <input
          onChange={onSearchChange}
          type="search"
          placeholder="what are you looking for?"
          className={`${inputPlaceholderColor} ${inputTextColor} ${inputBgColor} ${mainBorderColor} w-full p-1 focus:outline-none`}
        />
        <FiSearch className="xs:text-3xl md:text-xl" />
      </div>
      <div ref={searchBoxRef} className={`hidden`}>
        <ul className="w-full">
          {collection
            ? collection.map((item, index) => {
                if ("name" in item && "poster_path" in item) {
                  return (
                    <li
                      onClick={onClickHandler}
                      key={index}
                      data-id={item.id}
                      data-path="tv"
                      className="flex p-2 w-full items-center hover:bg-side-color cursor-pointer"
                    >
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                            : "http://cdn.onlinewebfonts.com/svg/img_546302.png"
                        }
                        className={`w-10 h-10 object-contain`}
                      />
                      <span>{item.name}</span>
                    </li>
                  );
                }
                if ("title" in item) {
                  return (
                    <li
                      onClick={onClickHandler}
                      key={index}
                      data-id={item.id}
                      data-path="movie"
                      className="flex p-2 w-full items-center hover:bg-side-color cursor-pointer"
                    >
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                            : "http://cdn.onlinewebfonts.com/svg/img_546302.png"
                        }
                        className="w-10 h-10 object-contain"
                      />
                      <span>{item.title}</span>
                    </li>
                  );
                }
                if ("name" in item && "profile_path" in item) {
                  return (
                    <li
                      onClick={onClickHandler}
                      key={index}
                      data-id={item.id}
                      data-path="person"
                      className="flex p-2 w-full items-center hover:bg-side-color cursor-pointer"
                    >
                      <img
                        src={
                          item.profile_path
                            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                            : "http://cdn.onlinewebfonts.com/svg/img_546302.png"
                        }
                        className="w-10 h-10 object-contain"
                      />
                      <span>{item.name}</span>
                    </li>
                  );
                }
              })
            : "No result"}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
