import { useRef, useState } from "react";
import { INavBarProps } from "../../types/Header.types";
const DropdownMenu = (props: INavBarProps) => {
  const { ddData } = props;
  const ddRef = useRef<HTMLUListElement>(null);

  const [isHovered, setIsHovered] = useState(false)

  // const onHoverkHandler = () : void => {
  //   if(ddRef && ddRef.current!==null) {ddRef.current.className = "block";}
  // };

  const onHoverkHandler = () : void => {
    if(ddRef && ddRef.current!==null) {ddRef.current.className = "block";}
  };

  return (
    <div>
      <ul ref={ddRef} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>Categories
        {isHovered ? ddData.map(item => <li>{item}</li>) : ""}
      </ul>
    </div>
  );
};

export default DropdownMenu;
