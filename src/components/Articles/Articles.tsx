import { Link } from "react-router-dom";
import Button, { buttonVariants } from "../Button/Button";
import { ROUTES } from "~/utils/routes";
import { IoChevronForward } from "react-icons/io5";
import img_01 from "~/assets/images/articles-01.jpg";

function Articles() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">Статьи</h3>
          <Link to={ROUTES.HOME} className={buttonVariants({ variant: "link" })}>
            Все статьи
            <IoChevronForward />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white shadow-md">
            <div className="w-full">
              <img src={img_01} alt="404" className="w-full" />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <span className="text-gray-500 text-xs">05.03.2021</span>
              <h3 className="font-bold text-lg">
                Режим использования масок и перчаток на территории магазинов
              </h3>
              <p className="text-sm">
                Подробная информация о режимах использования масок и перчаток на территории
                магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <div>
                <Button variant="success">Подробнее</Button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md">
            <div className="w-full">
              <img src={img_01} alt="404" className="w-full" />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <span className="text-gray-500 text-xs">05.03.2021</span>
              <h3 className="font-bold text-lg">
                Режим использования масок и перчаток на территории магазинов
              </h3>
              <p className="text-sm">
                Подробная информация о режимах использования масок и перчаток на территории
                магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <div>
                <Button variant="success">Подробнее</Button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md">
            <div className="w-full">
              <img src={img_01} alt="404" className="w-full" />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <span className="text-gray-500 text-xs">05.03.2021</span>
              <h3 className="font-bold text-lg">
                Режим использования масок и перчаток на территории магазинов
              </h3>
              <p className="text-sm">
                Подробная информация о режимах использования масок и перчаток на территории
                магазинов "ЛЕНТА". Информация обновляется каждый будний день.
              </p>
              <div>
                <Button variant="success">Подробнее</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
