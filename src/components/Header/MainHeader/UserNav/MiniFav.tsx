import { useEffect, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailFetchAction } from '../../../../redux/actions/detailActions';
import { IMiniDropDownProps } from "../../../../types/Header.types";
import { Show } from "../../../../types/Shows.types";
import { Movie } from "../../../../types/Movies.types";
const MiniFav = (props: IMiniDropDownProps) => {
  const { data_fav, data_style } = props;

  // Routing
  const navigate = useNavigate();
  const routeChange = (id: string, url: string) => {
    let path: string = `/detail/${url}/${id}`;
      navigate(path);
  };

  const dispatch = useDispatch();

  useEffect(() => {

  }, [])

  const onClickHandler = (event: MouseEvent<HTMLLIElement>): void => {
    const { currentTarget } = event;
    const clickedId = (currentTarget as Element).getAttribute("data-id");
    const clickedPath = (currentTarget as Element).getAttribute("data-path");
    if (clickedId && clickedPath)
      dispatch(detailFetchAction(clickedId, clickedPath));
    if (clickedId && clickedPath) routeChange(clickedId, clickedPath);
  };

return (
<div className={`xs:w-80 ${data_style} ${data_fav!==undefined && data_fav.length >= 3 ? "xs:h-52 mt-3" : "xs:h-40 mt-3"} -ml-[20rem] absolute z-40`}>
  <ul className="xs:w-full xs:h-full overflow-auto bg-header-main-color">
    { data_fav !== undefined ? data_fav.map((item: Movie | Show, index:number) => {
    if("title" in item){
    return(
    <li key={index} data-id={item.id} data-path={"movie"} onClick={onClickHandler} className="xs:w-full flex justify-between p-2 items-center hover:bg-side-color hover:text-header-main-color cursor-pointer">
      <div className="flex items-center">
        <img src={ item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : "http://cdn.onlinewebfonts.com/svg/img_546302.png" } className="w-10 h-10 object-contain" />
        <span className="xs:w-[60%]">{item.title}</span>
      </div>
      <span>{item.vote_average}</span>
    </li>
    )}
    if("name" in item){
      return(
      <li key={index} data-id={item.id} data-path={"tv"} onClick={onClickHandler} className="xs:w-full flex justify-between p-2 items-center hover:bg-side-color hover:text-header-main-color cursor-pointer">
        <div className="flex items-center">
          <img src={ item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "http://cdn.onlinewebfonts.com/svg/img_546302.png" } className="w-10 h-10 object-contain" />
          <span className="xs:w-[60%]">{item.name}</span>
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