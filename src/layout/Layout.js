import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export const Layout = ({ children }) => (
	<>
		<Nav />
		<main>{children}</main>
		<Footer />
	</>
);
