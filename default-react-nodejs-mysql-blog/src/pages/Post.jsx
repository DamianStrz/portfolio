import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify  from "dompurify";

//Creating component for Post Page with arrow function
const PostPage = () => {
	//State for posts data.
	const [post, setPost] = useState({});

	//useLocation hook returns current location object.
	const location = useLocation();

	//Using useNavigate to redirect to redirect to Homepage after deleting a post.
	const navigate = useNavigate();

	//Using slice method to get post ID from current path.
	const postId = location.pathname.split("/")[2];

	//Using currentUser props from context to check weather user can edit certain post.
	const { currentUser } = useContext(AuthContext);

	//After changing category blog shows only posts with defined category.
	useEffect(() => {
		//Async can't be used in useEffect callback so there is a need to create new function inside hook for that purpose.
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts/${postId}`);
				setPost(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [postId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${postId}`);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="single">
			<div className="content">
				<img src={`../uploads/${post.img}`} alt={`post-img${post?.id}`} />
				<div className="user">
					{post.userImg && <img src={post.userImg} alt="user-pic" />}
					<div className="info">
						<span>{post.username}</span>
						<p>Posted {moment(post.date).fromNow()}</p>
					</div>

					{/* This link redirects user to Post edition page */}

					{currentUser.username === post.username && (
						<div className="edit">
							<Link to="/write?edit=2" state={post}>
								<img src={Edit} alt="edit-button" />
							</Link>
							<img onClick={handleDelete} src={Delete} alt="delete-button" />
						</div>
					)}
				</div>
				<h1>{post.title}</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(post.desc),
					}}
				></p>
			</div>
			<Menu cat={post.category} />
		</div>
	);
};

export default PostPage;
