import { useRef } from 'react';
// Types
import { IDropdownCategory, IDropdownProps } from "../../types/Header.types";
// Component
import LinkWithText from "./LinkWithText";

const DropdownMenu = (props: IDropdownProps) => {
  const { ddTitle, ddTitleStyle, ddTitleHoverColor, ddList, ddListStyle, ddBackgroundColor } = props;
  const ddRef = useRef<HTMLUListElement>(null);
  const ddTitleRef = useRef<HTMLSpanElement>(null);
  
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

  return (
    <div onMouseEnter={()=> showDropdown()} onMouseLeave={()=> hideDropdown()}>
      <span ref={ddTitleRef} className={ddTitleStyle}>{ddTitle}</span>
      <ul ref={ddRef} className="hidden">
        {ddList.links ? ddList.links.map((item: IDropdownCategory, index: number) =>
          <LinkWithText
            key={index}
            type="inner"
            text={item.title}
            className={ddListStyle}
            data_path={item.main_path}
            data_url={item.sub_path}
          />
        ) : <li>loading</li>}
      </ul>
    </div>
  );
};

export default DropdownMenu;
