import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {

	return (
		<nav className="nav-wrapper">
			<div className="container">
				<Link to="/" className="brand-logo">
					FRUITS <FontAwesomeIcon icon="seedling" />
				</Link>
				<ul className="right">
					<li>
						<Link to="/">Items</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
