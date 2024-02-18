import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoCartOutline,
  IoCloudDoneOutline,
  IoHeartOutline,
  IoMenuOutline,
  IoSearchOutline,
} from "react-icons/io5";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";

import { ROUTES } from "~/utils/routes";

function Header() {
  return (
    <header id="header" className="header shadow">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Logo />

          <div className="flex">
            <Button variant="success" className="mr-4">
              <IoMenuOutline size="1.375rem" />
              Каталог
            </Button>

            <div className="w-[270px] xl:w-[370px] lg:w-[220px] flex items-center py-1 px-3 rounded-md border border-green-500">
              <Input type="text" placeholder="Найти товар" className="w-full mr-2 " />
              <div>
                <IoSearchOutline size="1.375rem" />
              </div>
            </div>
          </div>

          <div className="flex gap-x-4">
            <Link to={ROUTES.HOME}>
              <div className="max-w-max mx-auto">
                <IoHeartOutline size="1.375rem" />
              </div>
              <span className="text-sm hidden lg:inline-block">Избранное</span>
            </Link>
            <Link to={ROUTES.HOME}>
              <div className="max-w-max mx-auto">
                <IoCloudDoneOutline size="1.375rem" />
              </div>
              <span className="text-sm hidden lg:inline-block">Заказы</span>
            </Link>
            <Link to={ROUTES.HOME}>
              <div className="max-w-max mx-auto">
                <IoCartOutline size="1.375rem" />
              </div>
              <span className="text-sm hidden lg:inline-block">Корзина</span>
            </Link>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 rounded-full bg-avatar bg-cover bg-no-repeat bg-center" />
            <h3 className="hidden lg:block">Алексей</h3>
            <Button variant="icon" className="hidden lg:inline-flex">
              <div>
                <IoIosArrowDown />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
