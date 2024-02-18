import { IoLogoVk, IoLogoInstagram, IoLogoFacebook, IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo-v2.png";
import { ROUTES } from "~/utils/routes";

function Footer() {
  return (
    <section className="bg-[url(http://localhost:5173/src/assets/images/footer-bg.png)] bg-orange-100">
      <div className="container">
        <div className="flex items-center justify-between p-4 text-gray-500">
          <img src={logo} alt="Severyanochka" />
          <ul className="flex gap-4 items-center">
            <li>
              <Link to={ROUTES.HOME}>О компании</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>Контакты</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>Вакансии</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>Статьи</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>Политика обработки персональных данных</Link>
            </li>
          </ul>

          <ul className="flex gap-4 items-center">
            <li>
              <Link to={ROUTES.HOME}>
                <IoLogoInstagram />
              </Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>
                <IoLogoVk />
              </Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>
                <IoLogoFacebook />
              </Link>
            </li>
            <li className="ml-4">
              <Link to={ROUTES.HOME} className="flex items-center">
                <IoCallOutline /> <span className="ml-2">8 800 777 33 33</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
