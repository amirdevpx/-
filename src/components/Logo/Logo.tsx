import { Link } from "react-router-dom";
import LOGO_FULL from "../../assets/images/logo-full.png";
import { ROUTES } from "../../utils/routes";

function Logo() {
  return (
    <div className="w-[160px]">
      <Link to={ROUTES.HOME}>
        <img src={LOGO_FULL} alt="Северяночка" />
      </Link>
    </div>
  );
}

export default Logo;
