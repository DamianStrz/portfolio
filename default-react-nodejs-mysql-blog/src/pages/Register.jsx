import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

//Creating component for Register Page with arrow function
const RegisterPage = () => {
	//Creating state for data coming from inputs
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [err, setErr] = useState(null);

	//Using useNavigate to redirect to Login Page
	const navigate = useNavigate();

	//Function that saves data from inputs as state
	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	//Function that handles POST method with axios library

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post("/auth/register", inputs);
			navigate("/login");
		} catch (err) {
			setErr(err.response.data);
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
				{err && (
					<p>
						User <b>{inputs.username}</b> already exist!
					</p>
				)}
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
