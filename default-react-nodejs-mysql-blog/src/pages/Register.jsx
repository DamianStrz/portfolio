import axios from "axios";
import React, { useState } from "react";

import { Link } from "react-router-dom";

//Creating component for Register Page with arrow function
const RegisterPage = () => {
	//Creating state for data from inputs
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post("/auth/register", inputs);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="authentication">
			<h1>Login</h1>
			<form action="">
				<input
					required
					type="text"
					placeholder="username"
					name="username"
					onChange={handleChange}
				/>
				<input
					required
					type="e-mail"
					placeholder="e-mail"
					name="email"
					onChange={handleChange}
				/>
				<input
					required
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Register</button>
				<p>This is an error!</p>
				<span>
					Do you have an account?
					<br />
					<Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default RegisterPage;
