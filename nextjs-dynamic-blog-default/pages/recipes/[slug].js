import React from "react";
import { createClient } from "contentful"; // Imports function from contentful library

import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";

//Using createClient method with credentials from Contentful
const client = createClient({
	//Using .env variables to make credentials secure
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "recipe",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths: paths, // can be written as shortcut with only "paths"
		fallback: true,
	};
};

// Uses getStaticProps to connect to data and fetch data from Contentful
export async function getStaticProps({ params }) {
	// Using createClient method with credentials from Contentful saved above as "client" variable

	// The function below gives access to data from defined Contentful space

	// This method runs for each object generated with getStaticPaths method individually

	const { items } = await client.getEntries({
		// Destructuring response object
		content_type: "recipe",
		"fields.slug": params.slug,
	});

	// As a result getStaticProps returns object to props that can be used in component

	if (!items.length) {
		return {
			redirect: {
				destination: "/",
				perm: false,
			},
		};
	}

	return {
		props: { recipe: items[0] },
		revalidate: 1,
	};
}

//A component in which data of each recipe is displayed

export default function RecipeDetails({ recipe }) {
	if (!recipe) return <Skeleton />;

	const { featuredImage, title, cookingTime, ingredients, method } =
		recipe.fields;

	return (
		<div>
			<div className="banner">
				<Image
					src={"https:" + featuredImage.fields.file.url}
					width={featuredImage.fields.file.details.image.width}
					height={featuredImage.fields.file.details.image.height}
				/>
				<h2>{title}</h2>
			</div>
			<div className="info">
				<p>Takes about {cookingTime} minutes to cook.</p>
				<h3>Ingredients</h3>

				{ingredients.map((ing) => (
					<span key={ing}>{ing}</span>
				))}
			</div>

			<div className="method">
				<h3>Step by step:</h3>
				<div>{documentToReactComponents(method)}</div>
			</div>

			<style jsx>
				{`
					h2,
					h3 {
						text-transform: uppercase;
					}
					.banner h2 {
						margin: 0;
						background: #fff;
						display: inline-block;
						padding: 20px;
						position: relative;
						top: -60px;
						left: -10px;
						transform: rotateZ(-1deg);
						box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
					}
					.info p {
						margin: 0;
					}
					.info span::after {
						content: ", ";
					}
					.info span:last-child::after {
						content: ".";
					}
				`}
			</style>
		</div>
	);
}
