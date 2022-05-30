import { useRef, useState } from "react";
// Types
import { IDropdownProps } from "../../types/Header.types";
// Routing
import { useNavigate } from "react-router-dom";

const DropdownMenu = (props: IDropdownProps) => {
  const { ddTitle, ddTitleStyle, ddTitleHoverColor, ddList, ddListStyle, ddBackgroundColor } = props;
  const ddRef = useRef<HTMLUListElement>(null);
  const ddTitleRef = useRef<HTMLSpanElement>(null);

  const showDropdown = () : void => {
    if(ddRef && ddRef.current && ddTitleRef && ddTitleRef.current!==null) {
      ddRef.current.className = `block absolute w-full p-1 border rounded ${ddBackgroundColor}`;
      ddTitleRef.current.className = `${ddTitleStyle} ${ddTitleHoverColor}`
    }
  };

  const hideDropdown = () : void => {
    if(ddRef && ddRef.current &&ddTitleRef && ddTitleRef.current!==null) {
      ddRef.current.className = "hidden";
      ddTitleRef.current.className = ddTitleStyle
    }
  };

  const navigate = useNavigate();
  const routeChange = ( link: string | null) => {
    const path:string = `/${link}`;
    navigate(path)
  }

  return (
    <div onMouseEnter={()=> showDropdown()} onMouseLeave={()=> hideDropdown()}>
      <span ref={ddTitleRef} className={ddTitleStyle}>{ddTitle}</span>
      <ul ref={ddRef} className="hidden">
        {ddList ? ddList.map((item:string, index: number) => <li onClick={()=> routeChange(item)} key={index} className={ddListStyle}>{item}</li>) : <li>loading</li>}
      </ul>
    </div>
  );
};

export default DropdownMenu;
