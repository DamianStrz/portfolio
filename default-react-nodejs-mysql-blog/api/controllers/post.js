import { db } from "../db.js";

export const getPosts = (req, res) => {
	//Query selecting data from category or returning all posts
	const query = req.query.cat
		? "SELECT * FROM posts WHERE category = ?"
		: "SELECT * FROM posts";

	// Connecting to database using defined query with category value.

	db.query(query, [req.query.cat], (err, data) => {
		if (err) return res.json(err);

		return res.status(200).json(data);
	});
};

export const getPost = (req, res) => {
	res.json("from controller");
};

export const addPost = (req, res) => {
	res.json("from controller");
};

export const deletePost = (req, res) => {
	res.json("from controller");
};

export const updatePost = (req, res) => {
	res.json("from controller");
};
