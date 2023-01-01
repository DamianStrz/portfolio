import express from "express";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

/*
Initializing express in app
*/

const app = express();

app.use(express.json());

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
