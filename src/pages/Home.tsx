import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { getAllProductsAsync, selectLoading, selectProducts } from "~/app/slices/productsSlice";
import Articles from "~/components/Articles/Articles";
import Banner from "~/components/Banner/Banner";
import Products from "~/components/Products/Products";
import Specials from "~/components/Specials/Specials";
import { ROUTES } from "~/utils/routes";

function Home() {
  const disptach = useAppDispatch();
  const list = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    disptach(getAllProductsAsync(4));
  }, []);

  return (
    <>
      <Banner />
      <main className="py-20 bg-orange-50">
        <Products
          list={list}
          loading={loading}
          title="Акции"
          link={{ title: "Все акции", href: ROUTES.HOME }}
        />
        <Products
          list={list}
          loading={loading}
          title="Новинки"
          link={{ title: "Все новинки", href: ROUTES.HOME }}
        />

        <Specials />
        <Articles />
      </main>
    </>
  );
}

export default Home;
