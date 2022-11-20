//Importing components from React Router dependency
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//Importing components needed for specified Routes
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import WritePage from "./pages/Write";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import Layout from "./components/Layout";

const router = createBrowserRouter([
	/*

	Method returns array of objects, where specified paths are declared.
	Paths of Home, Post, Write pages are rendered within Layout component to have the same layout with Navigation above and Footer down below.

	*/
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/post/:id",
				element: <PostPage />,
			},
			{
				path: "/write",
				element: <WritePage />,
			},
		],
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

function App() {
	return (
		<div className="app">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
