import ButtonWithText from "./ButtonWithText";

const ProductCard = (props: {
  id: number;
  title: string;
  price: number;
  image: string;
}) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 text-left">
      <div className="h-full p-5 flex flex-col justify-between">
        <img
          src={props.image}
          alt={props.title}
          className="h-64 object-contain pb-5"
        />
        <p className="truncate">{props.title}</p>
        <p className="font-bold">${props.price}</p>
        <ButtonWithText text="Sepete Ekle" className="mt-4" />
      </div>
    </div>
  );
};

export default ProductCard;
