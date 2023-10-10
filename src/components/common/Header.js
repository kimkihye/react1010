import { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scenery, setScenery] = useState("SCENERY");
  const Companyref = useRef("");


  const sceneryname = useMemo(() => {
    return () => {
      setScenery(scenery);
    };
  }, [scenery]);

  return (
    <header>
      <div className="inner">
        <h1 onClick={sceneryname}>
          <Link to="/">
            {scenery}
          </Link>
        </h1>
        <nav className="menuWeb">
          <ul id="gnb">
            <li>
              <Link to="/company">
                Company{Companyref.current}
              </Link>
            </li>
            <li>
              <Link to="/consulting">Consultation</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
