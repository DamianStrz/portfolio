import React from "react";

import { Link } from "react-router-dom";

//Creating component for Register Page with arrow function
const RegisterPage = () => {
	return (
		<div className="authentication">
			<h1>Login</h1>
			<form action="">
				<input required type="text" placeholder="username" />
				<input required type="e-mail" placeholder="e-mail" />
				<input required type="password" placeholder="password" />
				<button>Register</button>
				<p>This is an error!</p>
				<span>
					Do you have an account?<br/>
					<Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default RegisterPage;
