import { createClient } from "contentful"; // Imports function from content library
import RecipeCard from "../components/RecipeCard"; //Imports template for single recipe card

// Uses getStaticProps to connect to data and fetch data from Contentful
export async function getStaticProps() {
	//Using createClient method with credentials from Contentful
	const client = createClient({
		//Using .env variables to make credentials secure
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	// That function gives access to data from defined Contentful space
	const response = await client.getEntries({ content_type: "recipe" });

	// As a result getStaticProps returns object to props that can be used in component
	return {
		props: {
			recipes: response.items,
			revalidate: 1,
		},
	};
}

export default function Recipes({ recipes }) {
	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.sys.id} recipe={recipe} />
			))}

			<style jsx>{`
				.recipe-list {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-gap: 20px 60px;
				}
			`}</style>
		</div>
	);
}
