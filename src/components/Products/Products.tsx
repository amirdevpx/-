import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { buttonVariants } from "../Button/Button";
import { IoChevronForward } from "react-icons/io5";
import { ProductState } from "~/app/slices/productsSlice";

type Props = {
  list: Array<ProductState>;
  loading: boolean;
  title: string;
  link: {
    title: string;
    href: string;
  };
};

function Products({ list, loading, title, link }: Props) {
  return (
    <section>
      <div className="container mb-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">{title}</h3>
          <Link to={link.href} className={buttonVariants({ variant: "link" })}>
            {link.title}
            <IoChevronForward />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {loading ? (
            <h1 className="text-2xl font-bold text-gray-500">Loading...</h1>
          ) : (
            list.map((item) => <Product key={item.id} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
