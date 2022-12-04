import React from "react";

import Logo from "../img/logo.png";

//Creating component for page Footer with arrow function

const Footer = () => {
	return (
		<footer>
			<img src={Logo} alt="logo" />
			<span>Made in <b>React.js</b> - tutorial</span>
		</footer>
	 );
}

export default Footer;



