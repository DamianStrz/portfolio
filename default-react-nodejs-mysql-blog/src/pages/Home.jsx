import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//Creating component for Home Page with arrow function

const HomePage = () => {
	// Sample data for training
	// const posts = [
	// 	{
	// 		id: 1,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	// 		img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	// 		img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	// 		img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	// 		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
	// 		img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	// 	},
	// ];

	//State for posts data.
	const [posts, setPosts] = useState([]);

	//useLocation hook returns current location object.
	const category = useLocation().search;

	//After changing category blog shows only posts with defined category.
	useEffect(() => {
		//Async can't be used in useEffect callback so there is a need to create new function inside hook for that purpose.
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts${category}`);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [category]);

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="thumbnail">
							<img src={post.img} alt={`post-${post.id}-img`} />
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<button>Read more...</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
