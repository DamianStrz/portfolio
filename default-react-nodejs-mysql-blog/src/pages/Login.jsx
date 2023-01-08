import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
/*Creating component for Login Page with arrow function
Components contains p tag for errors handling
*/
const LoginPage = () => {
	//Creating state for data coming from inputs
	const [inputs, setInputs] = useState({
		username: "",
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
			await axios.post("/auth/login", inputs);
			navigate("/");
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
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Login</button>
				{err && <p>{err}</p>}
				<span>
					You don't have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
};

export default LoginPage;
