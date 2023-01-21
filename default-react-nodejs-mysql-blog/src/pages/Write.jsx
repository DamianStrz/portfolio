import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Creating component for Write Page with arrow function

const WritePage = () => {
	const [value, setValue] = useState("");
	const [title, setTitle] = useState("");
	const [file, setFile] = useState();
	const [cat, setCat] = useState("");

	// Function for uploading files = images.
	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("/uploads", formData);
			console.log(res.data);
		} catch (err) {
			alert("You need to upload a file first!");
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		upload();
	};

	return (
		<div className="add">
			<div className="content">
				<input
					type="text"
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
							name="category"
							value="technology"
							id="technology"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="technology">Cinema</label>
					</div>
					<div className="category">
						<input type="radio" name="category" value="design" id="design" />
						<label htmlFor="design">Design</label>
					</div>
					<div className="category">
						<input type="radio" name="category" value="food" id="food" />
						<label htmlFor="food">Food</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WritePage;
