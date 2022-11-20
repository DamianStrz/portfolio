import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
/*

Layout component to render needed components inside.
It uses Outlet components to render children components returned in createBrowserRouter.

*/

const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
