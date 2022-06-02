import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { collectionFetchAction } from '../../redux/actions/collectionActions';
import { RootState } from '../../types/RootState.types';

const LinkWithText = (props: {
  type: "inner" | "outer";
  text: string;
  className?: string;
  data_path: string;
  data_url?: string | null
}) => {

  const dispatch = useDispatch();
  const myData = useSelector(
    (state: RootState) => state.collection.collection.movies
  );
  
  const onClickHandler = (event: MouseEvent<Element>) :void => {
    const {target} = event;
    const mainPath = (target as Element).getAttribute("data-path");
    const subPath = (target as Element).getAttribute("data-url");
    if(mainPath && subPath !== null) dispatch(collectionFetchAction(mainPath, subPath))
  }

  if (props.type === "inner") {
    return (
      <NavLink onClick={onClickHandler} to={`collection/${props.data_path}/${props.data_url}`} data-path={props.data_path}
      data-url={props.data_url} className={props.className}>
        {props.text}
      </NavLink>
    );
  }
  return (
    <div className={props.className}>
      {props.text}
    </div>
  );
};
export default LinkWithText;