import React from "react";
import { Link } from "react-router-dom";

//Creating component for Login Page with arrow function
const LoginPage = () => {
	return (
		<div className="authentication">
			<h1>Login</h1>
			<form action="">
				<input required type="text" placeholder="username" />
				<input required type="password" placeholder="password" />
				<button>Login</button>
				<p>This is an error!</p>
				<span>
					You don't have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
};

export default LoginPage;
