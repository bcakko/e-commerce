import { useRef } from 'react';
import { IMiniDropDownProps } from "../../../../types/Header.types";
import { Show } from "../../../../types/Shows.types";
import { Movie } from "../../../../types/Movies.types";
const MiniFav = (props: IMiniDropDownProps) => {
const { data_fav } = props;


return (
<div className={`xs:w-80 ${data_fav!==undefined && data_fav.length >= 3 ? "xs:h-60 mt-3" : "xs:h-40"}  -ml-[20rem] absolute z-40`}>
  <ul className="xs:w-full xs:h-full overflow-auto bg-header-main-color">
    { data_fav !== undefined ? data_fav.map((item: Movie | Show, index:number) => {
    if("title" in item){
    return(
    <li key={index} className="xs:w-full flex justify-between p-2 items-center hover:bg-side-color cursor-pointer">
      <div className="flex items-center">
        <img src={ item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : "http://cdn.onlinewebfonts.com/svg/img_546302.png" } className="w-10 h-10 object-contain" />
        <span>{item.title}</span>
      </div>
      <span>{item.vote_average}</span>
    </li>
    )}
    if("name" in item){
      return(
      <li key={index} className="xs:w-full flex justify-between p-2 items-center hover:bg-side-color cursor-pointer">
        <div className="flex items-center">
          <img src={ item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "http://cdn.onlinewebfonts.com/svg/img_546302.png" } className="w-10 h-10 object-contain" />
          <span>{item.name}</span>
        </div>
        <span>{item.vote_average}</span>
      </li>
      )}
    })

    : "Loading"}
  </ul>
</div>

);
};

export default MiniFav;