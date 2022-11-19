//Importing components from React Router dependency
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//Importing components needed for specified Routes
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Post from "./pages/Post";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>This is Home page</div>,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
