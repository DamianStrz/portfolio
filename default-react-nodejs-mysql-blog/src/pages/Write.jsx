import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

//Creating component for Write Page with arrow function

const WritePage = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.title || "");
	const [title, setTitle] = useState(state?.desc || "");
	const [file, setFile] = useState();
	const [cat, setCat] = useState(state?.category || "");

	const navigate = useNavigate();

	// Function for uploading files = images.
	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("/uploads", formData);
			return res.data;
		} catch (err) {
			alert("You need to upload a file first!");
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const imgUrl = upload();

		try {
			state
				? await axios.put(`/posts/${state.id}`, {
						title,
						desc: value,
						cat,
						img: file ? imgUrl : "",
				  })
				: await axios.post(`/posts/`, {
						title,
						desc: value,
						cat,
						img: file ? imgUrl : "",
						date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
				  });
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="add">
			<div className="content">
				<input
					type="text"
					value={title}
					placeholder="Enter post title"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className="editorContainer">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className="menu">
				<div className="item">
					<h1>Publish</h1>
					<span>
						<b>Status: </b>Draft
					</span>
					<span>
						<b>Visibility: </b>Public
					</span>
					<input
						className="invisible-input"
						type="file"
						name="file"
						id="file"
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<label className="file" htmlFor="file">
						Upload Image
					</label>
					<div className="buttons">
						<button>Save as a draft</button>
						<button onClick={handleClick}>Publish</button>
					</div>
				</div>
				<div className="item">
					<h1>Category</h1>
					<div className="category">
						<input
							type="radio"
							checked={cat === "art"}
							name="category"
							value="art"
							id="art"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="art">Art</label>
					</div>
					<div className="category">
						<input
							type="radio"
							checked={cat === "science"}
							name="category"
							value="science"
							id="science"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="science">Science</label>
					</div>
					<div className="category">
						<input
							type="radio"
							checked={cat === "technology"}
							name="category"
							value="technology"
							id="technology"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="technology">Technology</label>
					</div>
					<div className="category">
						<input
							type="radio"
							checked={cat === "cinema"}
							name="category"
							value="cinema"
							id="cinema"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="technology">Cinema</label>
					</div>
					<div className="category">
						<input
							type="radio"
							checked={cat === "design"}
							name="category"
							value="design"
							id="design"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="design">Design</label>
					</div>
					<div className="category">
						<input
							type="radio"
							checked={cat === "food"}
							name="category"
							value="food"
							id="food"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="food">Food</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WritePage;
