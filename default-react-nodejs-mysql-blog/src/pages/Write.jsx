import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Creating component for Write Page with arrow function

const WritePage = () => {
	const [value, setValue] = useState("");
	console.log(value);
	return (
		<div className="add">
			<div className="content">
				<input type="text" placeholder="Enter post title" />
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
					/>
					<label className="file" htmlFor="file">
						Upload Image
					</label>
					<div className="buttons">
						<button>Save as a draft</button>
						<button>Upload</button>
					</div>
				</div>
				<div className="item">
					<h1>Category</h1>
					<div className="category">
						<input type="radio" name="category" value="art" id="art" />
						<label htmlFor="art">Art</label>
					</div>
					<div className="category">
						<input type="radio" name="category" value="science" id="science" />
						<label htmlFor="science">Science</label>
					</div>
					<div className="category">
						<input
							type="radio"
							name="category"
							value="technology"
							id="technology"
						/>
						<label htmlFor="technology">Technology</label>
					</div>
					<div className="category">
						<input
							type="radio"
							name="category"
							value="technology"
							id="technology"
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
