import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
	//Checking existing user.
	const query = "SELECT * FROM users WHERE email = ? OR username = ?";

	db.query(query, [req.body.email, req.body.username], (err, data) => {
		if (err) return res.json(err);
		if (data.length) return res.status(409).json("User already exists!");

		//Hashing the passwords and create a user

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);

		//Query to store user data in database
		const query = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
		const values = [req.body.username, req.body.email, hash];

		//Creating user and handling error
		db.query(query, [values], (err, data) => {
			// err ? res.json(err) : response.status(200).json("User has been created!");
			if (err) return res.json(err);
			return res.status(200).json("User has been created!");
		});
	});
};

export const login = (req, res) => {
	// Checking weather user exist in database.

	const query = "SELECT * FROM users WHERE username = ?";

	//Using connected database to check weather user exists.

	db.query(query, [req.body.username], (err, data) => {
		if (err) return res.json;
		if (data.length === 0) return res.status(404).json("User not found");

		//Variable for password comparing
		const isPasswordCorrect = bcrypt.compareSync(
			req.body.password,
			data[0].password
		);

		//Condition when password is not correct
		if (!isPasswordCorrect)
			return res.status(400).json("Wrong username or password");

		//Variable for JWT access token
		const token = jwt.sign({ id: data[0].id }, process.env.NODE_ENV_JWT);

		//Deconstruction to isolate password from other data
		const { password, ...other } = data[0];

		/*
		Setting cookie "access_token", using created jwt token with httpOnly attribute for security.
		After success status response isolated data is returned.
		*/
		res
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.status(200)
			.json(other);
	});
};

/*
Function that log outs user and clears cookies out of JWT.
*/
export const logout = (req, res) => {
	res
		.clearCookie("access_token", {
			sameSite: "none",
			secure: true,
		})
		.status(200)
		.json("User has been logged out.");
};
