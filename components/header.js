import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ username }) {
  const router = useRouter();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar navbar-position">
        <div className="nav-container">
          <Link className="nav-logo" href="/" passHref>
            <img className="raya-logo" src="/logoraya.png" alt="" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div>
                <div
                  className={
                    router.pathname === "/"
                      ? "menu-content-navbar home-active"
                      : "menu-content-navbar"
                  }
                >
                  <Link
                    activeClassName="active"
                    className="nav-links"
                    href="/"
                    passHref={false}
                  >
                    Home
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <div
                  className={
                    router.pathname === "/movies"
                      ? "menu-content-navbar home-active"
                      : "menu-content-navbar"
                  }
                >
                  <Link
                    activeClassName="active"
                    className="nav-links"
                    href="/movies"
                    passHref={false}
                  >
                    Movies
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <ClearIcon /> : <MenuIcon />}
          </div>
        </div>
      </nav>
    </>
  );
}
