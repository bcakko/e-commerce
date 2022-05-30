import { IMiniDropDownProps } from "../../../../types/Header.types";
const MiniCart = (props: IMiniDropDownProps) => {
  const { ddUser } = props;
  return (
    <div>
      <ul>
        {ddUser ? ddUser.map((item: string, index:number) => <li>{item}</li>) : <li>Loading</li>}
      </ul>
    </div>

  );
};

export default MiniCart;
