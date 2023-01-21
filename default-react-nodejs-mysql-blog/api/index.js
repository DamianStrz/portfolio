import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";

/*
Initializing express in app
*/

const app = express();

app.use(express.json());
app.use(cookieParser());

/*
Using multer diskStorage method to get files from certain folder on client side.
Also using Date object to add date to files that have the same names.
*/

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "../public/uploads");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

/*
Multer creates directory for uploaded files.
Then in post method we use that directory, and multer "single" method.
Third argument is a callback.
*/

const upload = multer({ storage: storage });

app.post("/api/uploads", upload.single("file"), function (req, res) {
	const file = req.file;
	res.status(200).json(file.filename);
});

/*
At URL host/api/posts/{route_declared_in_posts.js} it shows route declared in posts.js
*/

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

/**
 Checking if local server is connected
 */
app.listen(8800, () => {
	console.log("Connected!");
});
