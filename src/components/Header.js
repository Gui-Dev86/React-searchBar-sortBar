import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="container">
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/fuelRechercheVille">Rechercher par ville</Link>
                    </li>
                    <li>
                        <Link to="/fuelTriVille">Trier par ville</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;