import React from "react";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";

//Creating component for Post Page with arrow function
const PostPage = () => {
	return (
		<div className="single">
			<div className="content">
				<img
					src="https://images.pexels.com/photos/4680086/pexels-photo-4680086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="post-img"
				/>
				<div className="user">
					<img
						src="https://images.pexels.com/photos/7360385/pexels-photo-7360385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="user-pic"
					/>
					<div className="info">
						<span>User</span>
						<p>Posted 2 days ago</p>
					</div>

					{/* This link redirects user to Post edition page */}

					<div className="edit">
						<Link to="/write?edit=2">
							<img src={Edit} alt="edit-button" />
						</Link>
						<img src={Delete} alt="delete-button" />
					</div>
				</div>
			</div>
			<div className="menu">m</div>
		</div>
	);
};

export default PostPage;
