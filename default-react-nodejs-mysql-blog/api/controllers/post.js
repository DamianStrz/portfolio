import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
	//Query selecting data from category or returning all posts
	const query = req.query.cat
		? "SELECT * FROM posts WHERE category = ?"
		: "SELECT * FROM posts";

	// Connecting to database using defined query with category value.

	db.query(query, [req.query.cat], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

export const getPost = (req, res) => {
	/*
	Query uses post id to to find certain post data.
	Then uses post uid column to find username assigned to post.
	*/
	const query =
		"SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `category`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";

	db.query(query, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data[0]);
	});
};

export const addPost = (req, res) => {
	//Checking Json Web Token
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated user!");

	//Verification method from jsonwebtoken and handling errors
	jwt.verify(token, process.env.NODE_ENV_JWT, (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const query =
			"INSERT INTO posts (`title`, `desc`, `img`, `category`, `date`, `uid`) VALUES (?)";

		const values = [
			req.body.title,
			req.body.desc,
			req.body.img,
			req.body.cat,
			req.body.date,
			userInfo.id,
		];

		db.query(query, [values], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.json("Post has been created.");
		});
	});
};

export const deletePost = (req, res) => {
	//Checking Json Web Token
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated user!");

	//Verification method from jsonwebtoken and handling errors
	jwt.verify(token, process.env.NODE_ENV_JWT, (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		//Database query to delete a post
		const postId = req.params.id;
		const query = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

		/*
		Using query with needed data.
		Comparing post id with user id
		*/
		db.query(query, [postId, userInfo.id], (err, data) => {
			console.log(postId, userInfo);
			if (err) return res.status(403).json("You can delete only your post.");

			return res.json("Post has been deleted!");
		});
	});
};

export const updatePost = (req, res) => {
	//Checking Json Web Token
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated user!");

	//Verification method from jsonwebtoken and handling errors
	jwt.verify(token, process.env.NODE_ENV_JWT, (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;
		const query =
			"UPDATE posts SET `title`=?, `desc`=?, `img`=?, `category`=? WHERE `id` = ? AND `uid` = ?";

		const values = [
			req.body.title,
			req.body.desc,
			req.body.img,
			req.body.cat,
			userInfo.id,
		];

		db.query(query, [...values, postId, userInfo.id], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.json("Post has been updated.");
		});
	});
};
