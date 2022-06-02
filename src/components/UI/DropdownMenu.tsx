import { useEffect, useRef, MouseEvent } from 'react';
// Types
import { IDropdownCategory, IDropdownProps } from "../../types/Header.types";
// Routing
import { useNavigate } from "react-router-dom";
import LinkWithText from "./LinkWithText";
//
import { collectionFetchAction } from "../../redux/actions/collectionActions";
import { useDispatch } from "react-redux";

const DropdownMenu = (props: IDropdownProps) => {
  const { ddTitle, ddTitleStyle, ddTitleHoverColor, ddList, ddListStyle, ddBackgroundColor } = props;
  const ddRef = useRef<HTMLUListElement>(null);
  const ddTitleRef = useRef<HTMLSpanElement>(null);

  const dispatch = useDispatch();
  
  const showDropdown = () : void => {
    if(ddRef && ddRef.current && ddTitleRef && ddTitleRef.current !== null) {
      ddRef.current.className = `block absolute w-full p-1 border rounded flex flex-col ${ddBackgroundColor}`;
      ddTitleRef.current.className = `${ddTitleStyle} ${ddTitleHoverColor}`
    }
  };

  const hideDropdown = () : void => {
    if(ddRef && ddRef.current && ddTitleRef && ddTitleRef.current !== null) {
      ddRef.current.className = "hidden";
      ddTitleRef.current.className = ddTitleStyle
    }
  };

  const navigate = useNavigate();
  const routeChange = ( link: string | null) => {
    const path:string = `/${link}`;
    navigate(path)
  }

  const onClickHandler = (event: MouseEvent<Element>) :void => {
    const {target} = event;
    const mainPath = (target as Element).getAttribute("data-path");
    const subPath = (target as Element).getAttribute("data-url");
    console.log(mainPath)
    console.log(subPath)
    //if(subPath) dispatch(collectionFetchAction(mainPath, subPath))
  }

  return (
    <div onMouseEnter={()=> showDropdown()} onMouseLeave={()=> hideDropdown()}>
      <span ref={ddTitleRef} className={ddTitleStyle}>{ddTitle}</span>
      <ul ref={ddRef} className="hidden">
        {ddList.links ? ddList.links.map((item: IDropdownCategory, index: number) => 
        <li onClick={onClickHandler} data-path={item.main_path}
        data-url={item.sub_path}>
          <LinkWithText
            key={index}
            type="inner"
            text={item.title}
            path={item.main_path}
            className={ddListStyle}
            data-path={item.main_path}
            data-url={item.sub_path}
          />
        </li>) : <li>loading</li>}
      </ul>
    </div>
  );
};

export default DropdownMenu;
