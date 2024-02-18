import { IoHeartOutline } from "react-icons/io5";
import Button from "../Button/Button";
import StarRatings from "react-star-ratings";

function Product({ data }: any) {
  return (
    <article className="bg-white rounded-2xl shadow-md">
      <div className="w-full relative">
        <Button className="absolute top-4 right-4 text-gray-300" variant="icon">
          <IoHeartOutline size="1.375rem" />
        </Button>
        <img src={data.image} alt={data.title} />
        {data.discount > 0 && (
          <span className="absolute bottom-0 left-4 py-1 px-3 bg-orange-500 rounded-md text-white font-normal">
            -{data.discount}%
          </span>
        )}
      </div>
      <div className="flex flex-col justify-center gap-y-4 p-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">
              {data.price - (data.price / 100) * data.discount} ₽
            </h3>
            <h3 className="text-lg text-gray-600">{data.price} ₽</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">С картой</span>
            <span className="text-gray-500 text-sm">Обычная</span>
          </div>
        </div>
        <h3>{data.title.length < 46 ? data.title : data.title.slice(0, 46).trim() + "..."}</h3>
        <div>
          <StarRatings
            rating={data.rating}
            name="rating"
            starRatedColor="rgb(245 158 11)"
            starDimension="20px"
            starSpacing="4"
          />
        </div>
        <Button variant="outline-success">В корзину</Button>
      </div>
    </article>
  );
}

export default Product;
