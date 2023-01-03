import { db } from "../db.js";
import bcrypt from "bcryptjs";

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

export const login = (req, res) => {};

export const logout = (req, res) => {};
