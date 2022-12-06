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
				<h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
					ipsa.
				</h1>
				<p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
						explicabo perferendis dignissimos quo atque similique magni
						praesentium quasi expedita suscipit repellendus, at, tempore impedit
						laboriosam, sunt fuga neque a. Eaque.
						<br />
						<br />
						Culpa doloremque architecto accusantium pariatur voluptates, hic
						exercitationem excepturi minima commodi dignissimos assumenda
						laudantium similique odit repudiandae velit consequatur nemo,
						laborum esse suscipit quas quos, mollitia optio.
						<br />
						<br />
						Asperiores, rerum voluptas? Ratione amet autem dolore libero debitis
						id deleniti minima. Quia modi atque temporibus saepe provident
						numquam veritatis tempora culpa aspernatur beatae quos aut
						voluptatibus dolore, quae ipsa sint itaque at!
						<br />
						<br />
						Beatae non nulla, enim, doloribus voluptates pariatur molestias
						possimus, quo quas sint hic! Voluptas aperiam voluptate rerum,
						consectetur velit nemo consequatur accusantium dolor nam! Similique
						ullam sequi quibusdam a itaque. At, vero vel?
						<br />
						<br />
						Exercitationem, beatae magnam. Est a et hic voluptatem accusantium
						placeat repudiandae quisquam magnam rem officiis amet, velit quis
						quasi sit consequuntur. Nesciunt excepturi recusandae molestias.
						Quam, sint?
					</p>
				</p>
			</div>
			<div className="menu">m</div>
		</div>
	);
};

export default PostPage;
