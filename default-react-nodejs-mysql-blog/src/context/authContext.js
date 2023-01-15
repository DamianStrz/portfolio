import axios from "axios";
import { createContext, useState, useEffect } from "react";

//Initiates context for authentication purpose
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	//State for getting user info from local storage
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	/*
	Login function with axios package and credentials from inputs.
	Setting received user data as state after logging in.
	*/

	const login = async (inputs) => {
		const res = await axios.post("/auth/login", inputs);
		setCurrentUser(res.data);
	};

	/*
	Log out function with axios package and credentials from inputs.
	Setting received user data as null after logging out.
	*/

	const logout = async (inputs) => {
		await axios.post("/auth/logout");
		setCurrentUser(null);
	};

	//Local storage update after state change.

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
